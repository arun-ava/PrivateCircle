import { createReducer, on } from "@ngrx/store";
import { ListActions } from "../actions/list.action.types";
import { List } from "../models/list.model";

export const initialState:List[] = [];

export const listReducer = createReducer(
    initialState,
    on(ListActions.allListsLoadedActionCreator, (state, {lists, type}) => {
        return [...state, ...lists];
    }),
    on(ListActions.selectListActionCreator, (state, {id, type}) => {
        return [...state].map((val: List, idx) => {
            return val.id === id ? {
                ...val,
                selected: true
            } : {
                ...val,
                selected: false
            };
        });
    }),
);
