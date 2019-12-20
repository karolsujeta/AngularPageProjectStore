import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './components/contact/contact.component';
import { ClientDataComponent } from './components/client-data/client-data.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/page.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ClientDataComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      store: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
