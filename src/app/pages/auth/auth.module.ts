import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './auth.material.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule} from './auth-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password/forgot-password.service';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
  ],
  entryComponents: [ForgotPasswordComponent],
  // exports:[LoginComponent,UserComponent,ForgotPasswordComponent],

  imports: [

    CustomMaterialModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [LoginService, 
    ForgotPasswordService,
  ]
})
export class AuthModule { }
