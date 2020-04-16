import { Component, OnInit } from '@angular/core';
import {Shelter} from './shelter.model';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.css']
})
export class SheltersComponent implements OnInit {
  selectedShelter: Shelter;

  constructor() { }

  ngOnInit(): void {
  }

}
