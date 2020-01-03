import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Addoffer, offer, Updateoffer, Deleteoffer } from '../offer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-offer',
  templateUrl: './admin-offer.component.html',
  styleUrls: ['./admin-offer.component.css']
})
export class AdminOfferComponent implements OnInit {

  hideAddOfferForm: boolean = true;
  validateAddOffer: boolean = false;

  @Output() canSubmission = new EventEmitter<boolean>();
  @Output() addOffer = new EventEmitter<boolean>();
  @Input() addOfferObj: Addoffer;

  @Input() ordertypes: string[];
  @Input() paytypes: string[];

  offer: offer;
  buttonName = 'Add Offer';
  form: boolean;
  check: string;
  offerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.offer = new offer();
    this.form = true;
  }

  ngOnInit() {

    this.offerForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      valid_from: ['', Validators.required],
      valid_to: ['', Validators.required],
      payment: ['', Validators.required],
      order_type: ['', Validators.required]
    })


  }
  //   selectedFile=null;
  //   onFileSelected(evet){
  //     this.selectedFile=event.target.files[0];
  //   }

  //   onUpload(){
  // this.http.
  //   }

  cancelSubmission() {
    this.hideAddOfferForm = false;
    this.canSubmission.emit(this.hideAddOfferForm)
  }




  addOffertoDB() {


    this.offer = this.offerForm.value;
    console.log(this.offer)
    this.addOfferObj.name = this.offer.name;
    this.addOfferObj.description = this.offer.description;
    this.addOfferObj.price = this.offer.price;
    this.addOfferObj.image = this.offer.image;
    this.addOfferObj.valid_from = new Date(this.offer.valid_from).getTime().toString();
    this.addOfferObj.valid_to = new Date(this.offer.valid_to).getTime().toString();
    this.check = this.offer.order_type[0];
    if (this.check == 'A') {
      this.addOfferObj.order_type = ['Normal', 'Schedule'];
    }
    else if (this.check == 'N') {
      this.addOfferObj.order_type = ['Normal'];
    }
    else {
      this.addOfferObj.order_type = ['Schedule'];
    }

    this.check = this.offer.payment[0];
    if (this.check == 'A') {
      this.addOfferObj.payment = ['COD', 'Onlice'];
    }
    else if (this.check == 'C') {
      this.addOfferObj.payment = ['COD'];
    }
    else {
      this.addOfferObj.payment = ['Online'];
    }
    this.validateAddOffer = true;
    console.log(this.addOfferObj)
    // this.addOffer.emit(this.validateAddOffer);
  }



}

@Component({

  templateUrl: './admin-offer.component.html',
  styleUrls: ['./admin-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  offer: offer;
  updateOffer: Updateoffer;
  form: boolean;
  buttonName = 'Update'
  offerForm: FormGroup;

  ordertypes: string[] = ['All', 'Normal', 'Schedule'];
  paytypes: string[] = ['All', 'COD', 'Online'];
  check: string;
  payment: string;
  order_type: string;
  startDate: Date;
  endDate: Date;
  constructor(public dialogRef: MatDialogRef<UpdateOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: offer, private formBuilder: FormBuilder) {
    this.offer = this.data;
    this.form = true;

    if(this.offer.order_type.length==2){
      this.order_type = 'All'
    }
    else{
      this.order_type = this.offer.order_type[0];
    }
    if(this.offer.payment.length==2){
      this.payment = 'All'
    }
    else{
      this.payment = this.offer.payment[0];
    }

    this.startDate = new Date(parseInt(this.offer.valid_from));
    this.endDate = new Date(parseInt(this.offer.valid_to));


  }


  ngOnInit() {
    
    
    this.offerForm = this.formBuilder.group({
      id: [this.offer.id],
      name: [this.offer.name, Validators.required],
      price: [this.offer.price, [Validators.required, Validators.min(0)]],
      description: [this.offer.description, Validators.required],
      valid_from: [this.startDate, Validators.required],
      valid_to: [this.endDate, Validators.required],
      payment: [this.payment, Validators.required],
      order_type: [this.order_type, Validators.required]
    })

    console.log(this.offerForm.value)


  }

  cancelSubmission() {
    this.dialogRef.close();
  }

  addOffertoDB() {

    this.updateOffer = new Updateoffer();
    this.offer = this.offerForm.value;
    this.updateOffer.id = this.offer.id;
    this.updateOffer.name = this.offer.name;
    this.updateOffer.description = this.offer.description;
    this.updateOffer.price = this.offer.price;
    this.updateOffer.image = this.offer.image;

    this.updateOffer.valid_from = new Date(this.offer.valid_from).getTime().toString();;
    this.updateOffer.valid_to = new Date(this.offer.valid_to).getTime().toString();

    this.check = this.offer.order_type[0];
    if (this.check == 'A') {
      this.updateOffer.order_type = ['Normal', 'Schedule'];
    }
    else if (this.check == 'N') {
      this.updateOffer.order_type = ['Normal'];
    }
    else {
      this.updateOffer.order_type = ['Schedule'];
    }
    this.check = this.offer.payment[0];
    if (this.check == 'A') {
      this.updateOffer.payment = ['COD', 'Online'];
    }
    else if (this.check == 'C') {
      this.updateOffer.payment = ['COD'];
    }
    else {
      this.updateOffer.payment = ['Online'];
    }

    console.log(this.updateOffer);

    // this.dialogRef.close(this.updateOffer);

  }


}

@Component({

  templateUrl: './admin-offer.component.html',
  styleUrls: ['./admin-offer.component.css']
})

export class DeleteOfferComponent implements OnInit {

  id: string;
  form: boolean;

  constructor(public dialogRef: MatDialogRef<DeleteOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deleteoffer) {
    this.id = this.data.id;
    this.form = false;

  }


  ngOnInit() {



  }


  cancelSubmission() {
    this.dialogRef.close();
  }

  DeleteOffer() {
    this.dialogRef.close(this.id);

  }


}
