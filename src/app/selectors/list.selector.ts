import { createSelector, createFeatureSelector } from '@ngrx/store';
import { List } from '../models/list.model';
import { tableFeatureSelector } from './table.selector';

export const listsFeatureSelector = createFeatureSelector<List[]>('lists');

export const processedListsSelector = createSelector(
    listsFeatureSelector,
    tableFeatureSelector,
    (lists, table) => {
        return lists;
        // todo: implement this as it offers more flexibility than display columns
        // return lists.filter((valouter) => {
        //     Object.entries(valouter).filter((valinner) => {
        //         return valinner.toString().toLowerCase().indexOf(table.filter) !== -1
        //     })
        // })
    }
);

export const selectedListDescriptionsSelector  = createSelector(
    listsFeatureSelector,
    (lists) => {
        return lists.find((val) => {
            return val.selected === true;
        })?.details;
    }
);