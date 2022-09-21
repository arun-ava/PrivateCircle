import { Component, OnInit } from '@angular/core';
import { ListDataService } from './services/list.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private listDataService: ListDataService) {}
  ngOnInit(): void {
    this.listDataService.getListData$();
  }

  

  
}
