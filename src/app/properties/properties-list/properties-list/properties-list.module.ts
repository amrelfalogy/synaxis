import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './properties-list.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [PropertiesListComponent],
  exports: [PropertiesListComponent],
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
})
export class PropertiesListModule {}