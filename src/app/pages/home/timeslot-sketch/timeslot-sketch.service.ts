import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timeslot, AddTimeslot,UpdateTimeslot } from './timeslot';

@Injectable()
export class TimeslotSketchService {

    
    private _fetchTimeslot: string = 'http://3.17.135.197:1122/api/admin/getSlot';
    private _addTimeslot: string = 'http://3.17.135.197:1122/api/admin/addSlot';
    private _updateTimeslot: string = 'http://3.17.135.197:1122/api/admin/updateSlot/';
    private _deleteTimeslot: string = 'http://3.17.135.197:1122/api/admin/deleteSlot/';
    constructor(private http: HttpClient) { }


    fetchTimeslots(): Observable<Timeslot[]> {
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': localStorage.getItem('currentUser')
             
          })
        };
      return this.http.get<Timeslot[]>(this._fetchTimeslot,httpOptions);
      
          
  }

  AddTimeslot(timeslot: AddTimeslot): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('currentUser')
         
      })
    };
  return this.http.post<object>(this._addTimeslot,timeslot,httpOptions);
  }

  UpdateTimeslot(timeslot: UpdateTimeslot): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('currentUser')
         
      })
    };
  return this.http.post<object>(this._updateTimeslot+timeslot.time_slot_id,timeslot,httpOptions);
  }
  
  DeleteTimeslot(time_slot_id: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('currentUser')
         
      })
    };
  return this.http.post<object>(this._deleteTimeslot+time_slot_id,'',httpOptions);
  }

}
