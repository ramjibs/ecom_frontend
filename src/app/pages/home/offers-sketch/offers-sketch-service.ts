import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {offer, Addoffer, Updateoffer, Deleteoffer } from './offer';

@Injectable()
export class OfferSketchService {


    private _fetchoffers: string = 'http://3.17.135.197:1122/api/admin/getAllOffer';
    private _addoffer: string = 'http://3.17.135.197:1122/api/admin/addOffer';
    private _updateoffer: string = 'http://http://3.17.135.197:1122/api/admin/updateOffer/';
    private _deleteoffer: string = 'http://3.17.135.197:1122/api/admin/deleteOffer/';
    
    constructor(private http: HttpClient) { }

    fetchoffers(): Observable<offer[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': localStorage.getItem('currentUser')
            })
          };
        return this.http.get<offer[]>(this._fetchoffers,httpOptions);
            
    }
    Addoffer(offer: Addoffer): Observable<Object> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json', 
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.post<object>(this._addoffer,offer,httpOptions);
    }

    Updateoffer(offer: Updateoffer): Observable<Object> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    return this.http.post<object>(this._updateoffer+offer.id,offer,httpOptions);
    }

    Deleteoffer(offer_id:string): Observable<object> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('currentUser')
        })
      };
    // return this.http.post<object>(this._deleteoffer,offer,httpOptions);
    return this.http.post<object>(this._deleteoffer+offer_id,httpOptions);
 
    }

}
