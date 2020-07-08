import {Injectable } from '@angular/core';
import { Animal } from '../shared/animal.model'
import { AnimalListService } from './animal-list.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AnimalListResolverService implements Resolve<Animal[]>{
    constructor(private dataStorageService: DataStorageService, private alService: AnimalListService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const animals = this.alService.getAnimals();
        if (animals.length === 0) {
            return this.dataStorageService.fetchAnimals();

        } else {
            return animals;
        }
    }
}