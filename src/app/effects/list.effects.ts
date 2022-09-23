import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ListDataService } from "../services/list.data.service";
import { concatMap, map, tap} from 'rxjs';
import { ListActions } from "../actions/list.action.types";

@Injectable()
export class ListEffects {

    loadList = createEffect(() => 
        this.action$.pipe(
            ofType(ListActions.loadAllListsActionCreator),
            concatMap(action => this.listDataService.getListData$()),
            map(result => {console.log('effect loaded'); return ListActions.allListsLoadedActionCreator({lists: result})}),
        ), 
    );

    constructor(private action$: Actions, private listDataService: ListDataService) { }
    
}   