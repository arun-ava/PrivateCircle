import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListActions } from './actions/list.action.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(ListActions.loadAllListsActionCreator());
  }

}
