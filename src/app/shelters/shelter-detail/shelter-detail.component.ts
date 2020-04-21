import { Component, OnInit, Input } from '@angular/core';
import {  Shelter } from '../shelter.model';
import {ShelterService} from '../shelter.service';

@Component({
  selector: 'app-shelter-detail',
  templateUrl: './shelter-detail.component.html',
  styleUrls: ['./shelter-detail.component.css']
})
export class ShelterDetailComponent implements OnInit {
  @Input() shelter: Shelter;

  constructor(private shelterService: ShelterService) { }

  ngOnInit(): void {
  }

  onAddToAnimalList() {
    this.shelterService.addAnimalsToAnimalList(this.shelter.animals);
  }
}
