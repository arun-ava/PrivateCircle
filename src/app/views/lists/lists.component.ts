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
    name: 'List Name',
    entityCount: 'No. of Entities',
    actions: 'Actions'
  };
  displayedColumns = [...this.dataColumns, 'entityCount', 'actions', 'details'];
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(processedListsSelector).subscribe((val: List[]) => {
      this.matdatasource = new MatTableDataSource<List[]>(val.map((valinner: List) => {
        let res: any = {};
        this.dataColumns.forEach((col : string) => {
          res[col] = (valinner as any)[col]; // todo: remove any
        });
        res.actions = valinner?.actions;
        res['entityCount'] = valinner.details?.length > 0 ? valinner.details.length : '';
        res['id'] = valinner.id; // TODO: Filter without using matdatasource to remove id
        return res;
      })); 
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
