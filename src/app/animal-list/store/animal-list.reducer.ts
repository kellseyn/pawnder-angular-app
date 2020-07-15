import { Animal } from '../../shared/animal.model';
import * as AnimalListActions from './animal-list.actions';


export interface State {
    animals: Animal[];
    editedAnimal: Animal;
    editedAnimalIndex: number;
}

export interface AppState {
    animalList: State;
}

const initialState = {
    animals: [new Animal('Pocky', 'M', 4, 'https://cdn.discordapp.com/attachments/583439033737412625/731160511525158932/IMG_20200710_094936.jpg', 'Living my best life with my parents, not for adoption, just attention.')],
    editedAnimal: null,
    editedAnimalIndex: -1
};

export function animalListReducer(
    state: State = initialState, 
    action: AnimalListActions.AnimalListActions
    ) {
    switch(action.type) {
        case AnimalListActions.ADD_ANIMAL: 
            return {
                ...state,
                animals: [...state.animals, action.payload]
            };
        case AnimalListActions.ADD_ANIMALS:
            return {
                ...state,
                animals: [...state.animals, ...action.payload]
            };

        case AnimalListActions.UPDATE_ANIMAL:
            const animal = state.animals[state.editedAnimalIndex];
            const updatedAnimal = {
                ...animal,
                ...action.payload
            };
            const updatedAnimals = [...state.animals];
            updatedAnimals[state.editedAnimalIndex] = updatedAnimal;

            return {
                ...state,
                animals: updatedAnimals,
                editedAnimalIndex: -1,
                editedAnimal: null
            };

        case AnimalListActions.DELETE_ANIMAL:
            return {
                ...state,
                animals: state.animals.filter((ani, aniIndex) => {
                    return aniIndex !== state.editedAnimalIndex;
                }),
                editedAnimalIndex: -1,
                editedAnimal: null
            };
        case AnimalListActions.START_EDIT:
            return {
                ...state,
                editedAnimalIndex: action.payload,
                editedAnimal: {...state.animals[action.payload]}
            };

        case AnimalListActions.STOP_EDIT:
            return {
                ...state,
                editedAnimal: null,
                editedAnimalIndex: -1
            }
        default:
            return state;
    }
}