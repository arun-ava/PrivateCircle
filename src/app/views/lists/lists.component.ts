import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { processedListsSelector, selectedListDescriptionsSelector } from '../../selectors/list.selector';
import { Observable, filter } from 'rxjs';
import { List } from '../../models/list.model';
import { ListActions } from 'src/app/actions/list.action.types';
import { tableFeatureSelector, tableFilterSelector } from '../../selectors/table.selector';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  datasource!: Observable<List[]>;
  matdatasource!: MatTableDataSource<List[]>;
  dataColumns = ['date', 'name'];
  displayedHeaders : { [key: string]: string } = {
    date: 'Date',
    name: 'Name',
  };
  displayedColumns = [...this.dataColumns, 'actions']
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(processedListsSelector).subscribe((val) => {
      this.matdatasource = new MatTableDataSource<List[]>(val as any); // todo: remove any
    })

    this.store.select(tableFilterSelector).subscribe((val) => {
      this.matdatasource.filter = val; // todo: filtering only for displayed columns
    });
  }

  handleRowClick($event: any, row: List) {
    this.store.dispatch(ListActions.selectListActionCreator({
      id: row.id
    }));
  }


}
