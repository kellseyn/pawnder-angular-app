import { Component, OnInit } from '@angular/core';
import {Shelter} from './shelter.model';
import {ShelterService} from './shelter.service';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.css'],
  providers: [ShelterService]
})
export class SheltersComponent implements OnInit {
  selectedShelter: Shelter;

  constructor() { }

  ngOnInit(): void {
  }

}
