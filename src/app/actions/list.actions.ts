import {createAction, props} from '@ngrx/store';
import { List } from '../models/list.model';

export const loadAllListsActionCreator = createAction(
    '[Lists View] Load All Lists'
);

export const allListsLoadedActionCreator = createAction(
    '[Lists View] All Lists Loaded',
    props<{lists: List[]}>()
);

export const selectListActionCreator = createAction(
    '[Lists View] SelectList',
    props<{id: number}>()
);