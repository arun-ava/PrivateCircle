import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectedListDescriptionsSelector } from 'src/app/selectors/list.selector';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {

  descriptions!: Observable<string[] | undefined>;
  constructor(private store: Store) { 
  }

  ngOnInit(): void {
    this.descriptions = this.store.select(selectedListDescriptionsSelector);
  }

}
