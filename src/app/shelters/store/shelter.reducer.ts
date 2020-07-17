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
        case SheltersActions.ADD_SHELTER:
            return {
                ...state,
                shelters: [...state.shelters, action.payload]
            };
        case SheltersActions.UPDATE_SHELTER:
            const updatedShelter = { 
                ...state.shelters[action.payload.index],
                ...action.payload.newShelter
            };

            const updatedShelters = [...state.shelters];
            updatedShelters[action.payload.index] = updatedShelter;
            return {
                ...state,
                shelters: updatedShelters
            };
        case SheltersActions.DELETE_SHELTER:
            return {
                ...state,
                shelters: state.shelters.filter((shelter, index) => {
                    return index !== action.payload;
                })
            };
        default:
            return state;
    }
}