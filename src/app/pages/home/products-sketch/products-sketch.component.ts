
import { Component, OnInit } from '@angular/core';
import { ProductSketchService } from './products-sketch-service';
import { Product, AddProduct } from './product';
import {FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { DeleteProductComponent, UpdateProductComponent } from './admin-product/admin-product.component';



@Component({
  selector: 'app-products-sketch',
  templateUrl: './products-sketch.component.html',
  styleUrls: ['./products-sketch.component.css']
})

export class ProductsSketchComponent implements OnInit {
  
  flipped = false;
  

  flipIt() {
    this.flipped = !this.flipped;
  }
  

  //array of offers were store to display in offers tab
  arrProducts: Product[];
  
  

  //helps to show add offer form to the user
  showAddProductForm: boolean;

  //object to add new offer
  addProduct: AddProduct;


  // ordertypes: string[] = ['All','Normal', 'Schedule'];
  // paytypes: string[] = ['All','COD', 'Online'];

  modifyDate: Date;

  
  searchTextProduct: string;

  

  constructor(private snackBar: MatSnackBar, private adminService: ProductSketchService, private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {

   
   

    //initially set to false so form will not be displayed to the user
    
    this.showAddProductForm = false;


    //get all products from the DB and store in products var
    this.adminService.getAllProducts()
    .subscribe(data => {this.arrProducts = data},
      error => {
        this.openSnackBar('Error while Fetching Product', '', 'red-snackbar')
      },
      () =>{
        if(this.arrProducts.length==0){
          this.showAddProductForm = true;
        }
      }
      );


    //get all offers already added from the UI by user and store in arrOffer
      


  }
  


  trackByFnProduct(index, product){
    return product.product_id;
  }

  

  addProducttoDB(){
    
    
    this.adminService.AddProduct(this.addProduct)
    .subscribe(data => {},
    error => {
      this.openSnackBar('Something went wrong', '', 'red-snackbar')
    },
    () => {
      this.showAddProductForm = false;
      this.adminService.getAllProducts()
      .subscribe(data => {this.arrProducts = data},
        error => {
          this.openSnackBar('Error while fetching Product', '', 'red-snackbar')
        },
        () =>{
          this.openSnackBar('Product Added Successfully', '', 'green-snackbar')
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

  

  addProductForm(){
    this.addProduct = new AddProduct();
    this.showAddProductForm = true;
  }

  

  cancelProductSubmission($event){
    this.addProduct = null;
    this.showAddProductForm = $event;
  }


  //working fine i guess
  openDeleteDialogProduct(product_idl: string ) : void {

    // console.log(time_slot_idl);
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '400px',
      data:  {
        id: product_idl,
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=null){
        this.adminService.DeleteProduct(result)
          .subscribe(data => {},
            error => {
              this.openSnackBar("Something went wrong", '', 'red-snackbar')
            },
            () => {
              this.openSnackBar("Product Deleted Successfully", '', 'green-snackbar')
              this.adminService.getAllProducts()
              .subscribe(data => {this.arrProducts = data},
                error => {
                  // this.showAddTimeslotForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Product", '', 'red-snackbar')
                },
                () => {
                  if(this.arrProducts.length==0){
                    this.showAddProductForm = true;
                  }
                }
              )});
                
        

      }
      
      
    });
  }

  //working fine i guess
  openUpdateDialogProduct(product: Product): void {
    // console.log(timeslot);
    // document.getElementById('login').style.display = 'none';
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '500px',
      data:  {
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              discount: product.discount, 
              image: product.image
             
            } 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // document.getElementById('login').style.display = 'block';
      if(result!=null){
        this.adminService.UpdateProduct(result)
        .subscribe(data => {},
          error =>{
            this.openSnackBar("Something went wrong", '', 'red-snackbar')
          
          },
          () => {
            this.openSnackBar("Product Updated Successfully", '', 'green-snackbar')
            this.adminService.getAllProducts()
              .subscribe(data => {this.arrProducts = data},
                error => {
                  // this.showAddTimeslotForm = true;
                  // console.log('error');
                  this.openSnackBar("Error while Fetching Product", '', 'red-snackbar')
                },
                () => {
                  if(this.arrProducts.length==0){
                    this.showAddProductForm = true;
                  }
                }
              )

          })
      }
    });
  }  

  
}



