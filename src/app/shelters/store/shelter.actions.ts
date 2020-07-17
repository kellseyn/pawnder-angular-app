import { Action } from '@ngrx/store';

import { Shelter } from '../shelter.model';

export const SET_SHELTERS = '[Shelters] Set Shelters';

export class SetShelters implements Action {
    readonly type = SET_SHELTERS;

    constructor(public payload: Shelter[]) {}
}

export type SheltersActions = SetShelters;