import { ClientData } from './../models/page.model'
import * as PageActions from './../actions/page.actions'

const initialState: ClientData = {
    name: 'Karol',
    surname: 'Sujeta',
    age: 23,
    email: 'karol.sujeta@outlook.com'
}

export function reducer(state: ClientData[] = [initialState], action: PageActions.Actions) {
    switch(action.type){
        case(PageActions.ADD_CLIENT):
        return [...state, action.payload];

        default:
            return state;
    }
}