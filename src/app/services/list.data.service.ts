import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { List } from "../models/list.model";
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListDataService {

    private readonly server_url = 'http://localhost:3000/'

    constructor(private _httpClient:  HttpClient) {
    }

    getListData$(): Observable<List[]> {
        return this._httpClient.get(this.server_url+'list').pipe(map((val, index) => {
            return (val as Array<any>).map((jsonval) => {
                return {
                    id: jsonval.id,
                    name: jsonval.name,
                    selected: jsonval['selected'],
                    actions: jsonval.actions,
                    details: jsonval.details,
                    date: jsonval.date,
                } as List
            });
            
        }));
    }

    
}