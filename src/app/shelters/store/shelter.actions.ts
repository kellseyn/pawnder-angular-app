import { Action } from '@ngrx/store';

import { Shelter } from '../shelter.model';

export const SET_SHELTERS = '[Shelters] Set Shelters';
export const FETCH_SHELTERS = '[Shelters] Fetch Shelters';

export class SetShelters implements Action {
    readonly type = SET_SHELTERS;

    constructor(public payload: Shelter[]) {}
}

export class FetchShelters implements Action {
    readonly type = FETCH_SHELTERS;
}

export type SheltersActions = SetShelters;