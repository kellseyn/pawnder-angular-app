import { Action } from '@ngrx/store';
import { Animal } from '../../shared/animal.model';

export const ADD_ANIMAL = 'ADD_ANIMAL';

export class AddAnimal implements Action {
    readonly type = ADD_ANIMAL;
    payload: Animal;
}
