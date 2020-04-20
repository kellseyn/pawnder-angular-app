import { Component, OnInit } from '@angular/core';

import { Animal } from '../shared/animal.model';
import {AnimalListService} from './animal-list.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private alService: AnimalListService) { }

  ngOnInit(){
    this.animals = this.alService.getAnimals();
  }


}
