import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  
  
  { path: '', component: LoginComponent},
  { path:'home', loadChildren: 'src/app/pages/home/home.module#HomeModule'},
    // children:[
    //  { path: '', component: LoginComponent},
    //  { path:'forgot',component: ForgotPasswordComponent }
    // ]},
    
  
    
    
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
