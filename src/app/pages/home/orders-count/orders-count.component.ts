import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA } from '@angular/material';

import { OrderDetailsService } from './orders-count.service';
import { OrderDetails } from './orders-count';

@Component({
  selector: 'app-orders-count',
  templateUrl: './orders-count.component.html',
  styleUrls: ['./orders-count.component.css'],
  providers: [OrderDetailsService]
})
export class OrdersCountComponent implements OnInit {

  orderDetails: OrderDetails[];
  pendingOrderDetails:OrderDetails[];
  deliveredOrderDetails:OrderDetails[];
  userDetails:any[];
  displayedColumns: string[] = ['OrderID', 'Date', 'UserName', 'Quantity', 'Address'];
  displayedUserColumns : string[] = ['UserName','EmailID','PhoneNo','Wallet','Ordered','Rejected','Scheduled']
  dataSource: MatTableDataSource<OrderDetails>;
  passedData:boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private router: Router,
    private orderDetailsService: OrderDetailsService,
    private bottomSheetRef: MatBottomSheetRef<OrdersCountComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    
  ) {
    console.log('before constructor');
    console.log(this.data.reqData);
    // if(this.data.reqData in ('orderDetails','pendingOrderDetails'))
    if(this.data.reqData=='orderDetails'){
      this.passedData=true;
      console.log('after constructor');
      this.orderDetailsService.getOrderDetails()
      .subscribe(Response => {
        this.orderDetails = Response;

        this.dataSource = new MatTableDataSource(this.orderDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      }
      );
    }
    else if(this.data.reqData=='pendingOrderDetails')
    {
      this.passedData=true;
      this.orderDetailsService.getPendingOrderDetails()
      .subscribe(Response => {
        this.pendingOrderDetails = Response;
        this.dataSource = new MatTableDataSource(this.pendingOrderDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      }
      );
    }
    else if(this.data.reqData=='deliveredOrderDetails'){
      this.passedData=true;
      this.orderDetailsService.getDeliveredOrderDetails()
      .subscribe(Response=>{
        this.deliveredOrderDetails = Response;
        this.dataSource = new MatTableDataSource(this.deliveredOrderDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      })
    }
    else if(this.data.reqData=='userDetails'){
      this.passedData=false;
      this.orderDetailsService.getUserDetails()
      .subscribe(Response=>{
        this.deliveredOrderDetails = Response;
        this.dataSource = new MatTableDataSource(this.deliveredOrderDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      })
    }
      
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
