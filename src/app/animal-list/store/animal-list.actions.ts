import { Action } from '@ngrx/store';
import { Animal } from '../../shared/animal.model';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMALS = 'ADD_ANIMALS';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

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

    constructor(public payload: Animal) {}
}

export class DeleteAnimal implements Action {
    readonly type = DELETE_ANIMAL;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload: number) {}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type AnimalListActions = AddAnimal | AddAnimals | UpdateAnimal | DeleteAnimal | StartEdit | StopEdit;