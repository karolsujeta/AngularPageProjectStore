import { ClientData } from './../models/page.model'
import { Action } from '@ngrx/store'


export const ADD_CLIENT = '[CLIENT] Add'

export class AddClient implements Action {
    readonly type = ADD_CLIENT;

    constructor(public payload: ClientData) { }
}

export type Actions = AddClient