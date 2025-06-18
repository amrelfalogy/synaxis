import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './jobs-list.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [JobsListComponent],
  exports: [JobsListComponent],
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
})
export class JobsListModule {}