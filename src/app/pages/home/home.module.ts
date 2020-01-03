import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { ChartsModule } from 'ng2-charts';
import { HomeRoutingModule } from './home-routing.module';
import { DeliverySketchComponent } from './delivery-sketch/delivery-sketch.component';
import { UsersSketchComponent } from './users-sketch/users-sketch.component';
import { OrdersSketchComponent } from './orders-sketch/orders-sketch.component';
import { HomeComponent } from './home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeMaterialModule } from './home.materail';
import { DashboardSketchComponent } from './dashboard-sketch/dashboard-sketch.component';
import { AdminOfferComponent, UpdateOfferComponent, DeleteOfferComponent } from './offers-sketch/admin-offer/admin-offer.component';
import { AdminTimeslotComponent, UpdateTimeslotComponent, DeleteTimeslotComponent } from './timeslot-sketch/admin-timeslot/admin-timeslot.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminProductComponent, DeleteProductComponent, UpdateProductComponent } from './products-sketch/admin-product/admin-product.component';
import { OrdersCountComponent } from './orders-count/orders-count.component';
import { AnalysisSketchComponent } from './analysis-sketch/analysis-sketch.component';
import { FilterPipeOffer } from './offers-sketch/offer-filter';
import {  FilterPipeProduct } from './products-sketch/product-filter';

import { OffersSketchComponent } from './offers-sketch/offers-sketch.component';
import { TimeslotSketchComponent } from './timeslot-sketch/timeslot-sketch.component';
import { ProductsSketchComponent } from './products-sketch/products-sketch.component';
import { OfferSketchService } from './offers-sketch/offers-sketch-service';
import { ProductSketchService } from './products-sketch/products-sketch-service';
import { TimeslotSketchService } from './timeslot-sketch/timeslot-sketch.service';

@NgModule({
  declarations: [DeliverySketchComponent,
    UsersSketchComponent,
    OrdersSketchComponent,
    
    HomeComponent,
    DashboardSketchComponent,
    AdminOfferComponent,
    UpdateOfferComponent,
    AdminTimeslotComponent,
    DeleteOfferComponent,
    UpdateTimeslotComponent,
    DeleteTimeslotComponent,
    
    
    AdminProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    OrdersCountComponent,
    AnalysisSketchComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    FilterPipeOffer,
    FilterPipeProduct,
    
    OffersSketchComponent,
    TimeslotSketchComponent,
    ProductsSketchComponent
  ],
  entryComponents: [
    UpdateOfferComponent,
    DeleteOfferComponent,
    UpdateTimeslotComponent,
    DeleteTimeslotComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    OrdersCountComponent, AnalysisSketchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, ChartsModule

  ],
  providers: [AuthGuardGuard,
    OfferSketchService,
    ProductSketchService,
    TimeslotSketchService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
