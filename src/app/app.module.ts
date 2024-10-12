import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent, CartComponent, ComingSoonComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, RouterModule],
  providers: [CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
