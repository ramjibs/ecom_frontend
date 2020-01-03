import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { UserDashboard } from './dashboard-sketch';
import { Observable } from 'rxjs';

@Injectable()
export class UserDashboardService {

    constructor(private http: HttpClient) {
        this.getDashboard().subscribe(data=>{
            console.log(data);
        })
        this.getSearchUserResults().subscribe(
            data=>{
                console.log(data);
            }
        )
     }

    public getDashboard(): Observable<any> {
        return this.http.get('assets/users/dashboard.json');
            
    }

    public getSearchUserResults(): Observable<any>{
        return this.http.get('assets/users/searchUserResults.json');
    }


}