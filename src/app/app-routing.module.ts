import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserinformationComponent } from './pages/userinformation/userinformation.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-information', pathMatch: 'full'},
  { path: 'user-information', component: UserinformationComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-information', component: UserinformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
