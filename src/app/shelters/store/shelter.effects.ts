import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as SheltersActions from './shelter.actions';
import { Shelter } from '../shelter.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShelterEffects {
    @Effect()
    fetchShelters = this.actions$.pipe(
        ofType(SheltersActions.FETCH_SHELTERS),
        switchMap(() => {
            return this.http
            .get<Shelter[]>(
                'https://pawnder-angular-app.firebaseio.com/shelters.json?',
            );
        }),
        map(shelters => {
            return shelters.map(shelter => {
                return {
                    ...shelter, 
                    animals: shelter.animals ? shelter.animals : []
                };
            });
        }),
        map(shelters => {
            return new SheltersActions.SetShelters(shelters);
        }),
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}