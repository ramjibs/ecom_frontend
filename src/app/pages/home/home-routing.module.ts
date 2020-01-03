import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { DeliverySketchComponent } from './delivery-sketch/delivery-sketch.component';
import { OrdersSketchComponent } from './orders-sketch/orders-sketch.component';
import { UsersSketchComponent } from './users-sketch/users-sketch.component';
import { DashboardSketchComponent } from './dashboard-sketch/dashboard-sketch.component';
import { OffersSketchComponent } from './offers-sketch/offers-sketch.component';
import { ProductsSketchComponent } from './products-sketch/products-sketch.component';
import { TimeslotSketchComponent } from './timeslot-sketch/timeslot-sketch.component';

const routes: Routes = [

  
    
    {path: '', component: HomeComponent,

    children: [
      { path: 'dashboard', component: DashboardSketchComponent }, 
      { path: 'offers', component: OffersSketchComponent },
      { path: 'products', component: ProductsSketchComponent },
      { path: 'timeslots', component: TimeslotSketchComponent },
      { path: 'deliveryDetails', component: DeliverySketchComponent },
      { path: 'orderDetails', component: OrdersSketchComponent },
      { path: 'userDetails', component: UsersSketchComponent }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
