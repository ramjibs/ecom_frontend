
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AddTimeslot, Timeslot, UpdateTimeslot, DeleteTimeslot } from '../timeslot';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'app-admin-timeslot',
  templateUrl: './admin-timeslot.component.html',
  styleUrls: ['./admin-timeslot.component.css']
})
export class AdminTimeslotComponent implements OnInit {

  hideAddTimeslotForm: boolean = true;
  validateAddTimeslot: boolean = false;
  buttonName = 'Add Timeslot';


  @Output() canSubmission = new EventEmitter<boolean>();
  @Output() addTimeslot = new EventEmitter<boolean>();
  @Input() addTimeslotObj: AddTimeslot;
  
  timeslot: Timeslot;
  form: boolean;

  constructor() { 
   
    this.timeslot = new Timeslot();
    this.form = true;
  }

  ngOnInit() {
    // this.timeslot = new Timeslot();
    
  }
  
  cancelSubmission() {
    this.hideAddTimeslotForm = false;
    this.canSubmission.emit(this.hideAddTimeslotForm)
  }

  

  addTimeslottoDB(){
    // console.log(this.timeslot)
    this.addTimeslotObj.from_time = this.timeslot.from_time;
    this.addTimeslotObj.to_time = this.timeslot.to_time;
    
    this.validateAddTimeslot = true;
    this.addTimeslot.emit(this.validateAddTimeslot);
  }

}

@Component({
  
  templateUrl: './admin-timeslot.component.html',
  styleUrls: ['./admin-timeslot.component.css']
})
export class UpdateTimeslotComponent implements OnInit {

  timeslot: Timeslot;
  updateTimeslot: UpdateTimeslot;
  buttonName = 'Update'
  form : boolean;
  
  constructor(public dialogRef: MatDialogRef<UpdateTimeslotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Timeslot) { 
    this.timeslot = this.data;
    // console.log(this.data);
    this.form = true;

    
  }
  

  ngOnInit() {
    
    
    
  }

  cancelSubmission() {
    this.dialogRef.close();
    
  }

  addTimeslottoDB(){
    this.updateTimeslot = new UpdateTimeslot();
    this.updateTimeslot.time_slot_id = this.timeslot.time_slot_id;
    this.updateTimeslot.from_time = this.timeslot.from_time;
    this.updateTimeslot.to_time = this.timeslot.to_time;
    
    this.dialogRef.close(this.updateTimeslot);
    
  }


}

@Component({
  
  templateUrl: './admin-timeslot.component.html',
  styleUrls: ['./admin-timeslot.component.css']
})

export class DeleteTimeslotComponent implements OnInit {

  time_slot_id: string;
  form: boolean;

  

  constructor(public dialogRef: MatDialogRef<DeleteTimeslotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteTimeslot) { 
    this.time_slot_id = this.data.time_slot_id;
    this.form = false;
    // console.log(this.time_slot_id)
    
  }
  

  ngOnInit() {
    
    
    
  }

  cancelSubmission() {
    this.dialogRef.close();
    
  }

  deleteTimeslot(){
    // debugger;
    // this.deleteTimeslotEmit.emit(true);
    this.dialogRef.close(this.time_slot_id);
  }


}
