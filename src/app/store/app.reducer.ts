import * as fromAnimalList from '../animal-list/store/animal-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromShelters from '../shelters/store/shelter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    animalList: fromAnimalList.State;
    auth: fromAuth.State;
    shelters: fromShelters.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    animalList: fromAnimalList.animalListReducer,
    auth: fromAuth.authReducer,
    shelters: fromShelters.shelterReducer
};