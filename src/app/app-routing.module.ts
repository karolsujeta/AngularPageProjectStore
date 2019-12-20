import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDataComponent } from './components/client-data/client-data.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'addclient', component: ClientDataComponent},
  { path: 'clients', component: ContactComponent },
  { path: '',   redirectTo: '/addclient', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routableComponent = [
  ClientDataComponent, ContactComponent
];
