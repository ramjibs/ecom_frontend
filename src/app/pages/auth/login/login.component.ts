import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginPost, Login } from './Login';
import { LoginService } from './login.service';
import { MatDialog } from '@angular/material';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
    
  hide = true;
    valid = true;
    isLoggedIn = 'false';
    wrongCredentails: boolean;
    returnUrl: string;
    ILoginPost: LoginPost;
    ILogin: Login;
    loading = false;
    constructor(private router: Router, 
      private loginService: LoginService, 
      public dialog: MatDialog,
      private route: ActivatedRoute,
      ) {
      this.ILoginPost = new LoginPost();
      
    }

    ngOnInit() {
      // reset login status
      this.logout();
  }

    onSubmit() {
      this.loading = true;
      this.loginService.login(this.ILoginPost)
            .subscribe(
                data => {
                    this.ILogin = data;
                    
                },
                error => {
                    // this.alertService.error(error);
                    // this.loading = false;
                },
                () => {
                  
                  localStorage.setItem('currentUser',this.ILogin.token);
                    this.router.navigate(['/home']);
                    this.loading = false;
                });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

  openDialog(): void {
    document.getElementById('login').style.display = 'none';
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '450px',
      data: { mobileNo:  ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      document.getElementById('login').style.display = 'block';
    });
  }

  }

