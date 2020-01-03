import { Component, OnInit } from '@angular/core';
import { OfferSketchService } from './offers-sketch-service';
import { offer, Addoffer, Updateoffer } from './offer';
import {FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UpdateOfferComponent, DeleteOfferComponent } from './admin-offer/admin-offer.component';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-offers-sketch',
  templateUrl: './offers-sketch.component.html',
  styleUrls: ['./offers-sketch.component.css']
})

export class OffersSketchComponent implements OnInit {
  

  //array of offers were store to display in offers tab
  arrOffer: offer[];
  
  

  //helps to show add offer form to the user
  showAddOfferForm: boolean;

  //object to add new offer
  addOffer: Addoffer;

  ordertypes: string[] = ['All','Normal', 'Schedule'];
  paytypes: string[] = ['All','COD', 'Online'];

  modifyDate: Date;

  searchTextOffer: string;
  

  constructor(private snackBar: MatSnackBar, private adminService: OfferSketchService, private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
   

    //initially set to false so form will not be displayed to the user
    this.showAddOfferForm = false;




    //get all offers already added from the UI by user and store in arrOffer
    this.adminService.fetchoffers()
    .subscribe(data => {
      this.arrOffer = data;
      // console.log(data)
    },
      error => {
        // this.showAddOfferForm = true;
        this.openSnackBar('Error while Fetching Offers', '', 'red-snackbar')
      },
      () => {
        // console.log('alloffers');
       
        // console.log(this.arrOffer)
        if(this.arrOffer.length==0){
          this.showAddOfferForm = true;
        }
      });
      


  }
  
  

  trackByFn(index, offer){
    return offer.offer_id;
  }

  trackByFnTimeslot(index, timeslot){
    return timeslot.slot_id;
  }

  trackByFnProduct(index, product){
    return product.product_id;
  }

  

  addOffertoDB(){
    this.adminService.Addoffer(this.addOffer)
    .subscribe(data => {},
    error => {
      this.openSnackBar('Something went wrong', '', 'red-snackbar')
    },
    () => {
      this.showAddOfferForm = false;
      this.adminService.fetchoffers()
      .subscribe(data => {this.arrOffer = data},
        error => {
          this.openSnackBar('Error while fetching Offer', '', 'red-snackbar')
        },
        () =>{
          this.openSnackBar('Offer Added Successfully', '', 'green-snackbar')
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

  addOfferForm(){
    this.addOffer = new Addoffer();
    this.showAddOfferForm = true;
  }

  

  cancelOfferSubmission($event){
    this.addOffer = null;
    this.showAddOfferForm = $event;
  }


  openUpdateDialogOffer(offer: offer): void {
    // console.log(offer);
    
    const dialogRef = this.dialog.open(UpdateOfferComponent, {
      width: '800px',
      data:  {
              id: offer.id,
              name: offer.name,
              description: offer.description,
              price: offer.price,
              valid_from: offer.valid_from,
              valid_to: offer.valid_to,
              image: offer.image,
              order_type: offer.order_type,
              payment: offer.payment
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // document.getElementById('login').style.display = 'block';
      if(result!=null){
        this.adminService.Updateoffer(result)
        .subscribe(data => {},
          error =>{
            this.openSnackBar("Something went wrong", '', 'red-snackbar')
          
          },
          () => {
            this.openSnackBar("Offer Updated Successfully", '', 'green-snackbar')
            this.adminService.fetchoffers()
              .subscribe(data => {this.arrOffer = data},
                error => {
                  // this.showAddTimeslotForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Offer", '', 'red-snackbar')
                },
                () => {
                  if(this.arrOffer.length==0){
                    this.showAddOfferForm = true;
                  }
                }
              )

          })
      }
    });
  }

  openDeleteDialogOffer(offer_idl: string ) : void {

    
    const dialogRef = this.dialog.open(DeleteOfferComponent, {
      width: '500px',
      data:  {
              id: offer_idl,
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=null){
        this.adminService.Deleteoffer(result)
          .subscribe(data => {},
            error => {
              this.openSnackBar("Something went wrong", '', 'red-snackbar')
            },
            () => {
              this.openSnackBar("Offer Deleted Successfully", '', 'green-snackbar')
              this.adminService.fetchoffers()
              .subscribe(data => {this.arrOffer = data},
                error => {
                  // this.showAddOfferForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Offers", '', 'red-snackbar')
                },
                () => {
                  if(this.arrOffer.length==0){
                    this.showAddOfferForm = true;
                  }
                }
              )});
                
        

      }
      
      
    });
  }

  
}




