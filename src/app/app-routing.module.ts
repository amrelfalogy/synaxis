import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CeoComponent } from './profiles/ceo/ceo.component';
import { ProjectsManagerComponent } from './profiles/projects-manager/projects-manager.component';
import { BranchManagerComponent } from './profiles/branch-manager/branch-manager.component';
import { SwEngineerComponent } from './profiles/sw-engineer/sw-engineer.component';
import { NewsComponent } from './news/news.component';
import { AddPropertyComponent } from './properties/add-property/add-property/add-property.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list/properties-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details/property-details.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profiles/ceo', component: CeoComponent },
  { path: 'profiles/projects-manager', component: ProjectsManagerComponent },
  { path: 'profiles/sw-engineer', component: SwEngineerComponent },
  { path: 'profiles/branch-manager', component: BranchManagerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'properties/add', component: AddPropertyComponent },
  { path: 'properties/list', component: PropertiesListComponent },
  { path: 'properties/details/:id', component: PropertyDetailsComponent },
  { path: 'team', component: TeamComponent },

  { path: 'coming-soon', component: ComingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
