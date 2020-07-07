import { Animal } from '../shared/animal.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalListService {
  animalsChanged = new Subject<Animal[]>();
  startedEditing = new Subject<number>();

  private animals: Animal[] = [
    new Animal(
      'Houdini',
      'M',
      2 ,
      'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46410177/1/?bust=1572306753&width=1080' ,
      'He is neutered but likes to escape'),
    new Animal(
      'Sassy',
      'F',
      4,
      'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47616527/1/?bust=1584192336&width=1080' ,
      'Just like her name says, she is very sassy')
  ];

  constructor(private alService: AnimalListService){}

  setAnimals(animals: Animal[]){
    this.animals = animals;
    this.animalsChanged.next(this.animals.slice());
  }

  getAnimals() {
    return this.animals.slice();
  }

  getAnimal(index: number) {
    return this.animals[index];
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
    this.animalsChanged.next(this.animals.slice());
  }

  addAnimals(animals: Animal[]) {
    for (let animal of animals){
      this.addAnimal(animal);
    }
    // this.animals.push(...animals);
    // this.animalsChanged.next(this.animals.slice());

  }

  updateAnimal(index: number, newAnimal: Animal) {
    this.animals[index] = newAnimal;
    this.animalsChanged.next(this.animals.slice());
  }

  deleteAnimal(index: number) {
    this.animals.splice(index, 1);
    this.animalsChanged.next(this.animals.slice());
  }
}
