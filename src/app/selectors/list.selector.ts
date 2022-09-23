import { createSelector, createFeatureSelector } from '@ngrx/store';
import { List } from '../models/list.model';

export const listsFeatureSelector = createFeatureSelector<List[]>('lists');

export const selectedListSelector  = createSelector(
    listsFeatureSelector,
    (lists) => {
        return lists.find((val) => {
            return val.selected === true;
        });
    }
);