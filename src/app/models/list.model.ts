import { ListActionType } from "./list-action.enum";

export interface List {
    id: number;
    date: string;
    name: string;
    actions: ListActionType[];
    details: string[];
    selected: boolean;
}