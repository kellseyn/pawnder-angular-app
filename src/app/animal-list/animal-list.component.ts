import { Component, OnInit } from '@angular/core';

import { Animal } from '../shared/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Houdini', 'M', 2 , 'He is neutered but likes to escape'),
    new Animal('Sassy', 'F', 4, 'Just like her name says, she is very sassy')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
