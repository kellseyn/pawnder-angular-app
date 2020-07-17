import { Action } from '@ngrx/store';

import { Shelter } from '../shelter.model';

export const SET_SHELTERS = '[Shelters] Set Shelters';
export const FETCH_SHELTERS = '[Shelters] Fetch Shelters';
export const ADD_SHELTER = '[Shelters] Add Shelter';
export const UPDATE_SHELTER = '[Shelters] Update Shelter';
export const DELETE_SHELTER = '[Shelters] Delete Shelter';
export const STORE_SHELTERS = '[Shelters] Store Shelters';

export class SetShelters implements Action {
    readonly type = SET_SHELTERS;

    constructor(public payload: Shelter[]) {}
}

export class FetchShelters implements Action {
    readonly type = FETCH_SHELTERS;
}

export class AddShelter implements Action {
    readonly type = ADD_SHELTER;

    constructor(public payload: Shelter) {}
}

export class UpdateShelter implements Action {
    readonly type = UPDATE_SHELTER;

    constructor(public payload:  {index: number; newShelter: Shelter}) {}
}

export class DeleteShelter implements Action {
    readonly type = DELETE_SHELTER;

    constructor(public payload: number) {}
}

export class StoreShelters implements Action {
    readonly type = STORE_SHELTERS;
}

export type SheltersActions = SetShelters | FetchShelters | AddShelter | UpdateShelter | DeleteShelter | StoreShelters;