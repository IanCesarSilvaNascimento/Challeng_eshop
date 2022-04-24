/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-shadow */
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (product: any) => {
    return <Action>{ type: ActionTypes.Add, payload: product };
}

export const Remove = (product: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: product };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}