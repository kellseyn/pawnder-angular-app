import { Action } from '@ngrx/store';
import { Animal } from '../../shared/animal.model';

export const ADD_ANIMAL = '[Animal List] Add Animal';
export const ADD_ANIMALS = '[Animal List] Add Animals';
export const UPDATE_ANIMAL = '[Animal List] Update Animal';
export const DELETE_ANIMAL = '[Animal List] Delete Animal';
export const START_EDIT = '[Animal List] Start Edit';
export const STOP_EDIT = '[Animal List] Stop Edit';

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