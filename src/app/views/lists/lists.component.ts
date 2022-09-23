import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { listsFeatureSelector, selectedListSelector } from '../../selectors/list.selector';
import { MatTableDataSource } from '@angular/material/table';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  // datasource!: MatTableDataSource<List[]>;
  datasource!: any;
  datasource2!: any;
  displayedColumns = ['date', 'name'];
  constructor(private store: Store) { }

  ngOnInit(): void {

    this.datasource = this.store.select(listsFeatureSelector);
    // .subscribe((val) => {
    //   this.datasource2 = val;
    //   console.log('feature selector value is ', val);
    // })
  }

}
