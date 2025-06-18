import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  { path: '', component: NewsComponent },
  
];

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    TranslateModule
  ],
})
export class NewsModule {}