import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AddProduct, UpdateProduct, Product, DeleteProduct } from '../product';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Form } from '@angular/forms';
//for validation
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})

export class AdminProductComponent implements OnInit {

  hideAddProductForm: boolean = true;
  validateAddProduct: boolean = false;

  @Output() canSubmission = new EventEmitter<boolean>();
  @Output() addProduct = new EventEmitter<boolean>();
  @Input() addProductObj: AddProduct;
  

  form: boolean;
  buttonName = 'Add Product';
  product: Product;

  // ngForm: Form;
  //for validation
  productForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
   
    this.product = new Product();
    this.form = true;
    // this.ngForm.$form.$valid = false;
  }

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required,Validators.min(0), Validators.max(100)]],
      description: ['', Validators.required]
    })
   
    
  }


  cancelSubmission() {
    this.hideAddProductForm = false;
    this.canSubmission.emit(this.hideAddProductForm)
  }




  addProductToDB(){
    this.product = this.productForm.value;
    // console.log(this.product);
    this.addProductObj.name = this.product.name;
    this.addProductObj.description = this.product.description;
    this.addProductObj.price = this.product.price;
    this.addProductObj.discount = this.product.discount;
    this.addProductObj.image = this.product.image;
    
    this.validateAddProduct = true;
    this.addProduct.emit(this.validateAddProduct);
  }

}

@Component({
  
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product;
  updateProduct: UpdateProduct;
  buttonName = 'Update'
  form : boolean;

   //for validation
   productForm: FormGroup;
  product_id: string;
  
  constructor(public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,private formBuilder: FormBuilder) { 
    this.product = this.data;
    this.form = true;
    
  }
  

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name, Validators.required],
      price: [this.product.price, [Validators.required, Validators.min(0)]],
      discount: [this.product.discount, [Validators.required,Validators.min(0), Validators.max(100)]],
      description: [this.product.description, Validators.required]
    })
   
    
    
  }

  cancelSubmission() {
    this.dialogRef.close();
  }

  addProductToDB(){

    this.updateProduct = new UpdateProduct();
    this.product = this.productForm.value;
    
    this.updateProduct.id = this.product.id;
    this.updateProduct.name = this.product.name;
    this.updateProduct.description = this.product.description;
    this.updateProduct.discount = this.product.discount;
    this.updateProduct.price = this.product.price;
    this.updateProduct.image = this.product.image;
    
    this.dialogRef.close(this.updateProduct);
    
  }


}

@Component({
  
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})

export class DeleteProductComponent implements OnInit {

  id: String;
  form: boolean;
  
  constructor(public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteProduct) { 
    this.id = this.data.id;
    this.form = false;
    
  }
  

  ngOnInit() {
    
    
    
  }
  

  cancelSubmission() {
    this.dialogRef.close();
  }

  DeleteProduct(){
    this.dialogRef.close(this.id);
  }
  

}

