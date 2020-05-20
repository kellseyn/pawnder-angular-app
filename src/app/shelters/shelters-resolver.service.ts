import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Shelter } from './shelter.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ShelterService } from './shelter.service';


@Injectable({providedIn: 'root'})
export class ShelterResolverService implements Resolve<Shelter[]> {
    constructor(private dataStorageService: DataStorageService, private shelterService: ShelterService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const shelters = this.shelterService.getShelters();
        if (shelters.length === 0) {
            return this.dataStorageService.fetchShelters();

        } else {
            return shelters;
        }
    }
}