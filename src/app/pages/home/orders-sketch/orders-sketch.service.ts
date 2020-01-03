import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order, Purchase } from './order'
@Injectable()
export class  OrdersSketchService {


    private _getAllOrders: string = 'assets/orders/order.json';
    private _getAllPurchase: string = 'assets/orders/product.json';
    

    constructor(private http: HttpClient) { }

    getAllPurchase(): Observable<Purchase[]> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.get<Purchase[]>(this._getAllPurchase,httpOptions);

    }

    getAllorders(): Observable<any[][]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': localStorage.getItem('currentUser')
            })
          };
        return this.http.get<any[][]>(this._getAllOrders,httpOptions);
            
    }
    

     private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
