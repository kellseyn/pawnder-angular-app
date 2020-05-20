import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Shelter } from './shelter.model';
import { DataStorageService } from '../shared/data-storage.service';


@Injectable({providedIn: 'root'})
export class ShelterResolverService implements Resolve<Shelter[]> {
    constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchShelters();
    }
}