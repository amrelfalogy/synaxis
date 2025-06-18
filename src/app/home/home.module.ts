import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PropertiesListModule } from '../properties/properties-list/properties-list/properties-list.module';
import { CarsListModule } from '../cars/cars-list/cars-list.module';
import { JobsListModule } from '../jobs/jobs-list/jobs-list.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    TranslateModule,
    PropertiesListModule,
    CarsListModule,
    JobsListModule
   
  ],
})
export class HomeModule {}