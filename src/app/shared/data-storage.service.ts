import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Shelter } from '../shelters/shelter.model';
import { AnimalListService} from '../animal-list/animal-list.service';
import { ShelterService } from '../shelters/shelter.service';
import { AuthService } from '../auth/auth.service';
import { Animal } from '../shared/animal.model';


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private shelterService: ShelterService, 
        private alService: AnimalListService,
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


    storeAnimals() {
        const animals = this.alService.getAnimals();
        return this.http
        .put('https://pawnder-angular-app.firebaseio.com/animals.json', 
        animals
        )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchAnimals() {
            return this.http
            .get
            <Animal[]>
            (
                'https://pawnder-angular-app.firebaseio.com/animals.json?'
            )
          
            .pipe(
                map(animals => {
                    return animals.map(animal => {
                        return {
                            ...animal, 
                        };
                    });
                }),
                tap(animals => {
                    this.alService.setAnimals(animals);        

                })
            );
    }
}