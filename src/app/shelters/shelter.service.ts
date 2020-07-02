import {Shelter} from './shelter.model';
import { Injectable} from '@angular/core';
import { Animal} from '../shared/animal.model';
import { AnimalListService } from '../animal-list/animal-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class ShelterService {
  sheltersChanged = new Subject<Shelter[]>();
  shelterSelected = new Subject<Shelter>();

  private shelters: Shelter[] = [];

  constructor(private alService: AnimalListService) {}

  setShelters(shelters: Shelter[]) {
    this.shelters = shelters;
    this.sheltersChanged.next(this.shelters.slice());
  }

  getShelters() {
    return this.shelters.slice();
  }

  getShelter(index: number) {
    return this.shelters[index];
  }

  addAnimalsToAnimalList(animals: Animal[]) {
    this.alService.addAnimals(animals);
  }

  addShelter(shelter: Shelter) {
      this.shelters.push(shelter);
      this.sheltersChanged.next(this.shelters.slice());
  }

  updateShelter(index: number, newShelter: Shelter) {
    this.shelters[index] = newShelter;
    this.sheltersChanged.next(this.shelters.slice());
  }

  deleteShelter(index: number) {
    this.shelters.splice(index, 1);
    this.sheltersChanged.next(this.shelters.slice());
  }
}
