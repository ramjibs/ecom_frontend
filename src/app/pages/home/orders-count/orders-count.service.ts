import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class OrderDetailsService {

    constructor(private http: HttpClient) {
        // this.getOrderDetails().subscribe(data=>{
        //     console.log(data);
        // })
        // this.getPendingOrderDetails().subscribe(data=>{
        //         console.log(data);
        //     }
        // )
    
     }

    public getOrderDetails(): Observable<any> {
        return this.http.get('assets/users/orderDetails.json');
            
    }

    public getPendingOrderDetails():Observable<any>{
        return this.http.get('assets/users/orderDetails.json');
    }

    public getDeliveredOrderDetails():Observable<any>{
        return this.http.get('assets/users/orderDetails.json');
    }

    public getUserDetails():Observable<any>{
        return this.http.get('assets/users/searchUserResults.json');
    }



}