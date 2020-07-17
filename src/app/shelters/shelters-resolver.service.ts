import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Shelter } from './shelter.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as SheltersActions from '../shelters/store/shelter.actions';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ShelterResolverService implements Resolve<Shelter[]> {
    constructor(private store: Store<fromApp.AppState>, private actions$: Actions) {}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('shelters').pipe(
        take(1),
        map(sheltersState => {
            return sheltersState.shelters;
        }),
        switchMap(shelters => {
            if (shelters.length === 0) {
                this.store.dispatch(new SheltersActions.FetchShelters());
                return this.actions$.pipe(
                    ofType(SheltersActions.SET_SHELTERS), 
                    take(1)
                );
            } else {
                return of(shelters);
            }
        })
    );
       
}
}