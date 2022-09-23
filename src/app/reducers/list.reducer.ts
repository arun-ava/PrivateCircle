import { createReducer, on } from "@ngrx/store";
import { ListActions } from "../actions/list.action.types";
import { List } from "../models/list.model";

export const initialState:Readonly<List[]> = [];

export const listReducer = createReducer(
    initialState,
    on(ListActions.allListsLoadedActionCreator, (state, {lists, type}) => {
        console.log('allListsLoadedActionCreator', lists, type);
        return [...state, ...lists];
    }),
);
