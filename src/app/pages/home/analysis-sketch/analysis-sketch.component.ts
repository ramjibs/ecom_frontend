import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-analysis-sketch',
  templateUrl: './analysis-sketch.component.html',
  styleUrls: ['./analysis-sketch.component.css']
})
export class AnalysisSketchComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AnalysisSketchComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['1 Apr', '2 Apr', '3 Apr', '4 Apr', '5 Apr', '6 Apr', '7 Apr','8 Apr'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40,88], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 120,132], label: 'Series B'}
  ];

  public doughnutChartLabels = ['Sales1', 'Sales2', 'Sales3', 'Sales4','Sales5','Sales6'];
  public doughnutChartData = [120, 150, 180, 90,40,60];
  public doughnutChartType = 'doughnut';
  ngOnInit() {
  }
  
}
