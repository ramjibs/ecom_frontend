import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef,MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserDashboardService } from './dashboard-sketch.service';
import { UserDashboard, SearchUserResults } from './dashboard-sketch';
import { OrdersCountComponent } from '../orders-count/orders-count.component';
import {AnalysisSketchComponent} from '../analysis-sketch/analysis-sketch.component';
@Component({
  selector: 'app-dashboard-sketch',
  templateUrl: './dashboard-sketch.component.html',
  styleUrls: ['./dashboard-sketch.component.css'],
  providers: [UserDashboardService, SearchUserResults]
})
export class DashboardSketchComponent implements OnInit {

  dashboard: any[];
  searchResults: any[];
  userSketch: UserDashboard[];
  constructor(
    private router: Router,
    private userDashboardService: UserDashboardService,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) {

    this.userDashboardService.getDashboard()
      .subscribe(Response => {
        this.dashboard = Response;
        console.log(this.dashboard);
      }
      );

    


  }


  ngOnInit() {
  }
  title = "DashBoard";
  date = new FormControl(new Date());
  panelOpenState = false;

  getSearchResults():void{
    this.userDashboardService.getSearchUserResults()
      .subscribe(Response => {
        this.searchResults = Response;
        console.log(this.searchResults);
      })
  }
  getOrderDetails(): void {
    
    this.bottomSheet.open(OrdersCountComponent,{
      panelClass:'bottomSheetStyle',
      data: { reqData:  'orderDetails'}
    });
  }
  getPendingOrderDetails():void{
    this.bottomSheet.open(OrdersCountComponent,{
      panelClass:'bottomSheetStyle',
      data: { reqData:  'pendingOrderDetails'}
    });
  }
  getDeliveredOrderDetails(): void {
    
    this.bottomSheet.open(OrdersCountComponent,{
      panelClass:'bottomSheetStyle',
      data: { reqData:  'deliveredOrderDetails'}
    });
  }
  getUserDetails(): void {
    this.bottomSheet.open(OrdersCountComponent,{
      panelClass:'bottomSheetStyle',
      data: { reqData:  'userDetails'}
    });
  }
  getAnalysisDetails():void{
    {
     this.dialog.open(AnalysisSketchComponent, {
        width: '250%'
      });
  }
  }
}
