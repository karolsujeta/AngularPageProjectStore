import { Component, OnInit } from '@angular/core';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as StoreActions from './../../store/actions/page.actions';
import { ClientData } from './../../store/models/page.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  stores: Observable<ClientData[]>;

  constructor(private store: Store<AppState>) {
    this.stores = store.select('store');
  }

  ngOnInit() {
  }

}
