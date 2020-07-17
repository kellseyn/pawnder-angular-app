import { Shelter } from '../shelter.model';
import * as SheltersActions from './shelter.actions';

export interface State {
    shelters: Shelter[];
}

const initialState: State = {
    shelters: []
};


export function shelterReducer(
    state = initialState, 
    action: SheltersActions.SheltersActions
    ) {
    switch (action.type) {
        case SheltersActions.SET_SHELTERS:
            return {
                ...state,
                shelters: [...action.payload]
            };
        default:
            return state;
    }
}