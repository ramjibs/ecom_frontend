import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOtp , IVerifyOtp, ISubmitNewPassword,IVerifyOtpPost, ISubmitNewPasswordPost} from './IForgotPassword';
// import 'rxjs/add/operator/catch'; 

@Injectable()
export class ForgotPasswordService {
    private _urlOtp: string = 'http://3.17.135.197:1122/api/auth/requestOtp/';
    private _urlverifyOtp: string = 'http://3.17.135.197:1122/api/auth/verifyOtp';
    private _urlSubmitnewPassword: string = 'http://3.17.135.197:1122/api/auth/updatePassword';
    
  constructor(private http: HttpClient) { }

    getOtp(mobileNo: string): Observable<IOtp>{
      return this.http.get<IOtp>(this._urlOtp+mobileNo);                
    }
  

    verifyOtp(verifyOtpPost: IVerifyOtpPost): Observable<IVerifyOtp>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<IVerifyOtp>(this._urlverifyOtp, verifyOtpPost , httpOptions);
    }
    submitNewPassword(ISubmitNewPasswordPost: ISubmitNewPasswordPost): Observable<ISubmitNewPassword>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<ISubmitNewPassword>(this._urlSubmitnewPassword,ISubmitNewPasswordPost, httpOptions);
    }

    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error.");
    }

}
