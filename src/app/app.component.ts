import { Component, ViewEncapsulation } from '@angular/core';
import{ClientDataComponent} from './components/client-data/client-data.component';
import {ContactComponent} from './components/contact/contact.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'store-page-app';
}
