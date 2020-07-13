import { Action } from '@ngrx/store';
import { Animal } from '../shared/animal.model';

const initialState = {
    animals: [
        new Animal('Pocky', 'M', 4, 'https://cdn.discordapp.com/attachments/583439033737412625/731160511525158932/IMG_20200710_094936.jpg', 'Living my best life with my parents, not for adoption, just attention.')
    ]
};

export function animalListReducer(state = initialState, action: Action) {
    switch(action.type) {
        case 'ADD_ANIMAL': 
            return {
                ...state,
                animals: [...state.animals, action]
            };
    }
}