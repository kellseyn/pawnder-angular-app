import { Action } from '@ngrx/store';
import { Animal } from '../../shared/animal.model';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMALS = 'ADD_ANIMALS';

export class AddAnimal implements Action {
    readonly type = ADD_ANIMAL;
    

    constructor(public payload: Animal) {}
}

export class AddAnimals implements Action {
    readonly type = ADD_ANIMALS;

    constructor(public payload: Animal[]) {}
}

export type AnimalListActions = AddAnimal | AddAnimals;