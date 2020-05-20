import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShelterService } from '../shelters/shelter.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private shelterService: ShelterService) {}

    storeShelters() {
        const shelters = this.shelterService.getShelters();
        return this.http.put('https://pawnder-angular-app.firebaseio.com/shelters.json', 
        shelters
        )
        .subscribe(response => {
            console.log(response);
        });
    }
}