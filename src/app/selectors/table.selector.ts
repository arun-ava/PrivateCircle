import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Table } from '../models/table.model';

export const tableFeatureSelector = createFeatureSelector<Table>('table');

export const tableFilterSelector = createSelector(
    tableFeatureSelector,
    (table) => {
        return table.filter;
    }
);
