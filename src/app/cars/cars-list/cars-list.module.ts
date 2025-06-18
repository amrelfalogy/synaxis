import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [CarsListComponent],
  exports: [CarsListComponent],
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
})
export class CarsListModule {}