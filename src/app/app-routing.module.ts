import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CeoComponent } from './profiles/ceo/ceo.component';
import { ProjectsManagerComponent } from './profiles/projects-manager/projects-manager.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profiles/ceo', component: CeoComponent },
  { path: 'profiles/projects-manager', component: ProjectsManagerComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
