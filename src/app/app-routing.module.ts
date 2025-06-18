import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactComponent } from './contact/contact.component';
import { CeoComponent } from './profiles/ceo/ceo.component';
import { ProjectsManagerComponent } from './profiles/projects-manager/projects-manager.component';
import { BranchManagerComponent } from './profiles/branch-manager/branch-manager.component';
import { SwEngineerComponent } from './profiles/sw-engineer/sw-engineer.component';
import { AddPropertyComponent } from './properties/add-property/add-property/add-property.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details/property-details.component';
import { CarDetailsComponent } from './cars/car-details/car-details/car-details.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { preload: true }
  },
 {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
    
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profiles/ceo', component: CeoComponent },
  { path: 'profiles/projects-manager', component: ProjectsManagerComponent },
  { path: 'profiles/sw-engineer', component: SwEngineerComponent },
  { path: 'profiles/branch-manager', component: BranchManagerComponent },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  { path: 'properties/add', component: AddPropertyComponent },
  { path: 'properties/list',
    loadChildren: () => import('./properties/properties-list/properties-list/properties-list.module')
    .then(m => m.PropertiesListModule)
  },

  { path: 'properties/details/:id', component: PropertyDetailsComponent },

  { path: 'cars/list',
    loadChildren: () => import('./cars/cars-list/cars-list.module')
    .then(m => m.CarsListModule)
  },
    
  { path: 'cars/details/:id', component: CarDetailsComponent}, 

  { path: 'jobs/list',
    loadChildren: () => import('./jobs/jobs-list/jobs-list.module')
    .then(m => m.JobsListModule)
  },

 

  { path: 'coming-soon', component: ComingSoonComponent },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
