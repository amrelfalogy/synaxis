import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CeoComponent } from './profiles/ceo/ceo.component';
import { ProjectsManagerComponent } from './profiles/projects-manager/projects-manager.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownDirective } from './directives/dropdown.directive';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BranchManagerComponent } from './profiles/branch-manager/branch-manager.component';
import { SwEngineerComponent } from './profiles/sw-engineer/sw-engineer.component';
import { AddPropertyComponent } from './properties/add-property/add-property/add-property.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details/property-details.component';
import { AddAdComponent } from './add-ad/add-ad.component';
import { CarDetailsComponent } from './cars/car-details/car-details/car-details.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CartComponent,
    ComingSoonComponent,
    CeoComponent,
    ProjectsManagerComponent,
    BranchManagerComponent,
    SwEngineerComponent,
    ContactComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    DropdownDirective,
    AddAdComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
