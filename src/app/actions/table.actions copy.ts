import {createAction, props} from '@ngrx/store';

export const setFilterActionCreator = createAction(
    '[App Component] Set Table Filter',
    props<{filter: string}>(),
);
