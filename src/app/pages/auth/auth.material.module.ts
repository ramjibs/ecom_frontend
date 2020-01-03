import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
        MatButtonModule, 
        MatInputModule,
        MatDialogModule,
        MatToolbarModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatIconModule
        
} from '@angular/material';


@NgModule({

  imports: [
  CommonModule, 
  MatButtonModule, 
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatIconModule
  
  ],
  exports: [
  CommonModule, 
  MatButtonModule, 
  MatInputModule,
  MatDialogModule, 
  MatToolbarModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatIconModule
   ],
})
export class CustomMaterialModule { }

