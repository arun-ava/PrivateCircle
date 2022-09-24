import { createReducer, on } from "@ngrx/store";
import { TableActions } from "../actions/table.action.types";
import { Table } from '../models/table.model';

export const initialState:Table = {
    filter: '',
};

export const tableReducer = createReducer(
    initialState,
    on(TableActions.setFilterActionCreator, (state, {filter, type}) => {
        return {
            ...state,
            filter: filter,
        };
    }),
);
