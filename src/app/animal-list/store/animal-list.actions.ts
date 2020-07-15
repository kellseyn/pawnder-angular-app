import { Action } from '@ngrx/store';
import { Animal } from '../../shared/animal.model';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMALS = 'ADD_ANIMALS';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';

export class AddAnimal implements Action {
    readonly type = ADD_ANIMAL;
    

    constructor(public payload: Animal) {}
}

export class AddAnimals implements Action {
    readonly type = ADD_ANIMALS;

    constructor(public payload: Animal[]) {}
}

export class UpdateAnimal implements Action {
    readonly type = UPDATE_ANIMAL;

    constructor(public payload: {index: number, animal: Animal}) {}
}

export class DeleteAnimal implements Action {
    readonly type = DELETE_ANIMAL;

    constructor(public payload: number) {}
}

export type AnimalListActions = AddAnimal | AddAnimals | UpdateAnimal | DeleteAnimal;