import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product,AddProduct, UpdateProduct } from './product';

@Injectable()
export class ProductSketchService {


    private _getAllProduct: string = 'http://3.17.135.197:1122/api/admin/getAllProduct';
    private _addProduct: string = 'http://3.17.135.197:1122/api/admin/addProduct';
    private _updateProduct: string = 'http://3.17.135.197:1122/api/admin/updateProduct/'
    private _deleteProduct: string = 'http://3.17.135.197:1122/api/admin/deleteProduct/';

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.get<Product[]>(this._getAllProduct,httpOptions);

    }

    AddProduct(product: AddProduct): Observable<Object> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json', 
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.post<object>(this._addProduct,product,httpOptions);
    }

    UpdateProduct(product: UpdateProduct): Observable<Object> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.post<object>(this._updateProduct+product.id,product,httpOptions);
    }

    DeleteProduct(product_id:string): Observable<object> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    // return this.http.post<object>(this._deleteoffer,offer,httpOptions);
    return this.http.post<object>(this._deleteProduct+product_id,httpOptions);
 
    }

}
