import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CeoComponent } from './profiles/ceo/ceo.component';
import { ProjectsManagerComponent } from './profiles/projects-manager/projects-manager.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownDirective } from './directives/dropdown.directive';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BranchManagerComponent } from './profiles/branch-manager/branch-manager.component';
import { SwEngineerComponent } from './profiles/sw-engineer/sw-engineer.component';
import { AddPropertyComponent } from './properties/add-property/add-property/add-property.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list/properties-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details/property-details.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    CartComponent,
    ComingSoonComponent,
    CeoComponent,
    ProjectsManagerComponent,
    BranchManagerComponent,
    SwEngineerComponent,
    AboutComponent,
    ContactComponent,
    AddPropertyComponent,
    PropertiesListComponent,
    PropertyDetailsComponent,
    TeamComponent,
    NewsComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
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
