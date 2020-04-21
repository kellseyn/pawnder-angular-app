import {Animal} from '../shared/animal.model';
import {EventEmitter} from '@angular/core';

export class AnimalListService {
  animalsChanged = new EventEmitter<Animal[]>();
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

  getAnimals() {
    return this.animals.slice();
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
    this.animalsChanged.emit(this.animals.slice());
  }

  addAnimals(animals: Animal[]) {
    // for (let animal of animals){
    //   this.addAnimal(animal);
    // }
    this.animals.push(...animals);
    this.animalsChanged.emit(this.animals.slice());

  }
}