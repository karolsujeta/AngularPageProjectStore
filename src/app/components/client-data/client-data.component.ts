import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

import * as StoreActions from './../../store/actions/page.actions';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addClient(name, surname, age, email) {
    this.store.dispatch(new StoreActions.AddClient({ name: name, surname: surname, age: age, email: email }))
  }
}
