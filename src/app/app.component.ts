import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListActions } from './actions/list.action.types';
import { TableActions } from './actions/table.action.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedView!: number;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(ListActions.loadAllListsActionCreator());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.dispatch( TableActions.setFilterActionCreator({filter: filterValue.trim().toLowerCase()}));
  }
}
