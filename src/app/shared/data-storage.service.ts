import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Shelter } from '../shelters/shelter.model';

import { ShelterService } from '../shelters/shelter.service';
import { AuthService } from '../auth/auth.service';


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private shelterService: ShelterService, 
        private authService: AuthService
        ) {}

    storeShelters() {
        const shelters = this.shelterService.getShelters();
        return this.http
        .put('https://pawnder-angular-app.firebaseio.com/shelters.json', 
        shelters
        )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchShelters() {
            return this.http
            .get<Shelter[]>(
                'https://pawnder-angular-app.firebaseio.com/shelters.json?',
            )
            .pipe(
                map(shelters => {
                    return shelters.map(shelter => {
                        return {
                            ...shelter, 
                            animals: shelter.animals ? shelter.animals : []
                        };
                    });
                }),
                tap(shelters => {
                    this.shelterService.setShelters(shelters);        

                })
            );
    }
}