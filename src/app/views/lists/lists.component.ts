import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { listsFeatureSelector } from '../../selectors/list.selector';
import { Observable } from 'rxjs';
import { List } from '../../models/list.model';
import { ListActions } from 'src/app/actions/list.action.types';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  datasource!: Observable<List[]>;
  dataColumns = ['date', 'name'];
  displayedHeaders : { [key: string]: string } = {
    date: 'Date',
    name: 'Name',
  };
  displayedColumns = [...this.dataColumns, 'actions']
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.datasource = this.store.select(listsFeatureSelector);
  }

  handleRowClick($event: any, row: List) {
    console.log('event: any, row:', $event, row);
    this.store.dispatch(ListActions.selectListActionCreator({
      id: row.id
    }));
  }

}
