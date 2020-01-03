import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoginPost , Login} from './login';

@Injectable()
export class LoginService {
    private _urlLogin: string = 'http://3.17.135.197:1122/api/auth/signin';

    constructor(private http: HttpClient) { }

    login(LoginPost: LoginPost): Observable<Login> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
               
            })
          };
        return this.http.post<Login>(this._urlLogin,LoginPost,httpOptions);
        //  return this.http.post<ILogin>(this._urlLogin,ILoginPost,httpOptions).pipe(map(user => {
        //     // login successful if there's a jwt token in the response
        //     if (user.message_code=='success' && user.token) {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //     }

        //     return user;
        // }),
        // catchError(this.handleError)
        // );
            
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

     private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
