import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { List } from "../models/list.model";

@Injectable({
    providedIn: 'root'
})
export class ListDataService {

    private readonly server_url = 'http://localhost:3000/'

    constructor(private _httpClient:  HttpClient) {
    }

    getListData$() {
        this._httpClient.get(this.server_url+'list').subscribe((data: List[]) => {
            console.log('list data', data);
        })
    }

    
}