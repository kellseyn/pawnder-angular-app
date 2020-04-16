import { Component, OnInit } from '@angular/core';

import { Animal } from '../shared/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Houdini', 'M', 2 , 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46410177/1/?bust=1572306753&width=1080' , 'He is neutered but likes to escape'),
    new Animal('Sassy', 'F', 4, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47616527/1/?bust=1584192336&width=1080' , 'Just like her name says, she is very sassy')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAnimalAdded(animal: Animal) {
    this.animals.push(animal);
  }
}
