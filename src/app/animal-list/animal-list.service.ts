import {Animal} from '../shared/animal.model';

export class AnimalListService {
  private animals: Animal[] = [
    new Animal('Houdini', 'M', 2 , 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46410177/1/?bust=1572306753&width=1080' , 'He is neutered but likes to escape'),
    new Animal('Sassy', 'F', 4, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47616527/1/?bust=1584192336&width=1080' , 'Just like her name says, she is very sassy')
  ];

  getAnimals() {
    return this.animals.slice();
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }
}
