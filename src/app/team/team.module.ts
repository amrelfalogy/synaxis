import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [TeamComponent],
  exports: [TeamComponent],
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
})
export class TeamModule {}