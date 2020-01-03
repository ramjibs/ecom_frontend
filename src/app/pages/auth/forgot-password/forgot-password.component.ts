import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { timer } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ForgotPasswordService } from './forgot-password.service';
import { IOtp, IVerifyOtp, IVerifyOtpPost, ISubmitNewPassword, ISubmitNewPasswordPost } from './IForgotPassword';
import { Router } from '@angular/router';


export interface DialogData {
  mobileNo: string;
  otp: string;
  newPass: string;
  confirmPass: string;
  Details: string;
}

export interface IVerifyOtpPost {
       otp: string;
       Details: string;
  }

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  selectedIndex:number=0;
  userIdTab:boolean = true;
  otpTab:boolean = false;
  newPassTab:boolean = false;
  acknowledgePassTab: boolean = false;
  timeLeft: number;
  timeButton: string ; 
  timeButtonAccess: boolean;
  interval;
  subscribeTimer: any;
  source: any;
  timeAlertColor: string = 'black';
  loading: boolean = false;
  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  Iotp:  IOtp;
  IVerifyOtpPostVal: IVerifyOtpPost;
  IVerifyOtp: IVerifyOtp;
  ISubmitNewPassword: ISubmitNewPassword;
  ISubmitNewPasswordPost: ISubmitNewPasswordPost;
  constructor(public router: Router,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private forgotService: ForgotPasswordService,private formBuilder: FormBuilder) {
      this.IVerifyOtpPostVal = new IVerifyOtpPost();
      this.ISubmitNewPasswordPost = new ISubmitNewPasswordPost();
      this.myForm = this.formBuilder.group({
        password: ['', [Validators.required]],
        confirmPassword: ['']
      }, { validator: this.checkPasswords});
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  oberserableTimer() {
    
    this.source = timer(1000,1000);
    const abc = this.source.subscribe(val => {
      
      this.subscribeTimer = this.timeLeft - val;
     
    });
  }
  
  startTimer() {
    this.timeButtonAccess = true;
    this.timeLeft = 65;
    
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        if(this.timeLeft<10){

          this.timeAlertColor = 'rgba(255, 0, 0, 0.692)';
        }
      } else {

        this.pauseTimer();
        // this.timeLeft = 60;
      }
    },1000)
    
  }

  resendOtp(){
    this.timeAlertColor = 'black';
    this.forgotService.getOtp(this.data.mobileNo)
      .subscribe(data => {this.Iotp = data;
          }, error => {
              this.loading = false;
          },  () => {
              if(this.Iotp.Status == 'Success')
              {
                  this.IVerifyOtpPostVal.Details =  this.Iotp.Details;
                  this.loading = false;
                  this.startTimer();
                  }
          }

      );
    

  }
  

  pauseTimer() {
    this.timeButtonAccess = false;
    this.timeButton = '';
    this.source = null;
    clearInterval(this.interval);
  }


  
  toOtp(){
    this.loading = true;
    this.forgotService.getOtp(this.data.mobileNo)
      .subscribe(data => {this.Iotp = data;
          }, error => {
              this.loading = false;
          },  () => {
            
              if(this.Iotp.Status == 'Success'){
                  
                  this.IVerifyOtpPostVal.Details = this.Iotp.Details;
                  this.loading = false;
                  this.toOtpSub();
                  
                  
                  }
          }

      );
    
  }


  toOtpSub(){
    this.otpTab = true;
    this.newPassTab = false;
    this.acknowledgePassTab = false;
    this.userIdTab = false;
    this.selectedIndex = 1; 
    this.startTimer();

  }
 
  toNewPassTab(){
    // debugger; 
    this.loading = true;
    this.IVerifyOtpPostVal.otp = this.data.otp;
    this.forgotService.verifyOtp(this.IVerifyOtpPostVal).subscribe(
      data => {this.IVerifyOtp = data;
      }, error => {
          this.loading = false;
      },  () => {
          if(this.IVerifyOtp.message_code == 'Success'){
              this.loading = false;
              this.toNewPassSub();
              }
      }

    );
    
    
  }
  toNewPassSub(){
    this.pauseTimer();
    this.newPassTab = true;
    this.userIdTab = false;
    this.otpTab = false;
    this.acknowledgePassTab = false;
    this.selectedIndex = 2;
  }
  updatePassword(){
    this.loading = true;
    this.ISubmitNewPasswordPost.password = this.data.newPass;
    this.ISubmitNewPasswordPost.phone_number = this.data.mobileNo;
    this.forgotService.submitNewPassword(this.ISubmitNewPasswordPost).subscribe(
      data => {this.ISubmitNewPassword = data;
      }, error => {
          this.loading = false;
      },  () => {
          if(this.ISubmitNewPassword.message_code == 'success'){
              this.loading = false;
              console.log('finish');
              localStorage.setItem('currentUser',this.ISubmitNewPassword.token);
              this.router.navigate(['/home']);
              
              this.dialogRef.close();
              }
      }


    );

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    
    return pass === confirmPass ? null : { notSame: true}
  }

  

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


