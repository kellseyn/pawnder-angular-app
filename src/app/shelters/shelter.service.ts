import {Shelter} from './shelter.model';
import { Injectable} from '@angular/core';
import { Animal} from '../shared/animal.model';
import { AnimalListService } from '../animal-list/animal-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class ShelterService {
  sheltersChanged = new Subject<Shelter[]>();
  shelterSelected = new Subject<Shelter>();

  private shelters: Shelter[] = [
    new Shelter(
      'Coit North Veterinary Hospital',
      'Plano, Tx',
      '(214) 618-8282',
      'http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/ac/15/c6b1aed2-ef80-438d-9c6e-7fef6b81c8f4.jpg',
      [
        new Animal(
          'Fred',
          'M',
          3,
          'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQyMjQ5L29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjA5NDkyNTY4fQ.3z_FT-T0oIcWknK_FxSe7UaeLs0yCBd80Gp4X_y650I/img.jpg',
          'I am cross-eyed but a fluff of love')
      ]),

    new Shelter(
      'Devine Veterinary Clinic',
      'Devine, Tx',
      '(830) 663-9330',
      'https://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/8b/17/853bea39-46c6-4ff8-9c52-d2d56077b9eb.jpg',
      [
        new Animal(
          'Cassanova',
          'M',
          6,
          'https://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/9c/72/19af48a7-cbae-479b-a380-eaccd5945759.jpg?1418407791000',
          'Resident cat at Devine Vet Clinic, I love when people let me outside'
          )
      ])
  ];

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
