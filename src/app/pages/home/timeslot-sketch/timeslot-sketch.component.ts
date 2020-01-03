import { Component, OnInit } from '@angular/core';
import { TimeslotSketchService } from './timeslot-sketch.service';
import { Timeslot, AddTimeslot } from './timeslot';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UpdateTimeslotComponent, DeleteTimeslotComponent } from './admin-timeslot/admin-timeslot.component';
import {MatSnackBar} from '@angular/material';





@Component({
  selector: 'app-timeslot-sketch',
  templateUrl: './timeslot-sketch.component.html',
  styleUrls: ['./timeslot-sketch.component.css']
})

export class TimeslotSketchComponent implements OnInit {
  
  

  //array of offers were store to display in offers tab
  arrTimeslot: Timeslot[];

  
  

  //helps to show add offer form to the user
  
  showAddTimeslotForm: boolean;
  

  //object to add new offer
  
  addTimeslot:  AddTimeslot;
 

  

  modifyDate: Date;


  

  constructor(private snackBar: MatSnackBar, private adminService: TimeslotSketchService, private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {

    

    //intially it is set to true which display offer tab as default tab to the user
   

    //initially set to false so form will not be displayed to the user
    
    this.showAddTimeslotForm = false;
    


    



    this.adminService.fetchTimeslots()
    .subscribe(data => {
      this.arrTimeslot = data;
      // console.log(data)
    },
      error => {
        // console.log('error');
        // this.showAddTimeslotForm = true;
        this.openSnackBar('Error while Fetching Timeslot', '', 'red-snackbar')
      },
      () => {
        // console.log('all Timeslot');
       
        // console.log(this.arrTimeslot)
        if(this.arrTimeslot.length==0){
          this.showAddTimeslotForm = true;
        }
      });
      // this.addTimeslot = new AddTimeslot();
      


  }
  




  trackByFnTimeslot(index, timeslot){
    return timeslot.slot_id;
  }

 

  

  addTimeslottoDB(){
    
    
    this.adminService.AddTimeslot(this.addTimeslot)
    .subscribe(data => {},
    error => {
      this.openSnackBar('Something went wrong', '', 'red-snackbar')
    },
    () => {
      this.showAddTimeslotForm = false;
      this.adminService.fetchTimeslots()
      .subscribe(data => {this.arrTimeslot = data},
        error => {
          this.openSnackBar('Error while fetching Timeslot', '', 'red-snackbar')
        },
        () =>{
          this.openSnackBar('Timeslot Added Successfully', '', 'green-snackbar')
        })

    }
    )
    

  }

  
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [className]
    });
  }


  addTimeslotForm(){
    this.addTimeslot = new AddTimeslot();
    this.showAddTimeslotForm = true;
  }

  


  cancelTimeslotSubmission($event){
    this.addTimeslot = null;
    this.showAddTimeslotForm = $event;
  }


  

  
  //working fine guess
  openUpdateDialogTimeslot(timeslot: Timeslot): void {
    console.log(timeslot);
    // document.getElementById('login').style.display = 'none';
    const dialogRef = this.dialog.open(UpdateTimeslotComponent, {
      width: '500px',
      data:  {time_slot_id: timeslot.time_slot_id,
              from_time: timeslot.from_time,
              to_time: timeslot.to_time
             
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // document.getElementById('login').style.display = 'block';
      if(result!=null){
        this.adminService.UpdateTimeslot(result)
        .subscribe(data => {},
          error =>{
            this.openSnackBar("Something went wrong", '', 'red-snackbar')
          
          },
          () => {
            this.openSnackBar("Timeslot Updated Successfully", '', 'green-snackbar')
            this.adminService.fetchTimeslots()
              .subscribe(data => {this.arrTimeslot = data},
                error => {
                  // this.showAddTimeslotForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Timeslot", '', 'red-snackbar')
                },
                () => {
                  if(this.arrTimeslot.length==0){
                    this.showAddTimeslotForm = true;
                  }
                }
              )

          })
      }
    });
  }

  //working fine i guess
  openDeleteDialogTimeslot(time_slot_idl: string ) : void {

    // console.log(time_slot_idl);
    const dialogRef = this.dialog.open(DeleteTimeslotComponent, {
      width: '400px',
      data:  {
        time_slot_id: time_slot_idl,
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=null){
        this.adminService.DeleteTimeslot(result)
          .subscribe(data => {},
            error => {
              this.openSnackBar("Something went wrong", '', 'red-snackbar')
            },
            () => {
              this.openSnackBar("Timeslot Deleted Successfully", '', 'green-snackbar')
              this.adminService.fetchTimeslots()
              .subscribe(data => {this.arrTimeslot = data},
                error => {
                  // this.showAddTimeslotForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Timeslot", '', 'red-snackbar')
                },
                () => {
                  if(this.arrTimeslot.length==0){
                    this.showAddTimeslotForm = true;
                  }
                }
              )});
                
        

      }
      
      
    });
  }

  

  modifyTimeslot(): void{
    
  }

  

  
}




