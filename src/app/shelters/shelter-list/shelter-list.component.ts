import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  Shelter } from '../shelter.model';
import {ShelterService} from '../shelter.service';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit {
  @Output() shelterWasSelected = new EventEmitter<Shelter>();
  shelters: Shelter[];

  constructor(private shelterService: ShelterService) {

}

  ngOnInit() {
    this.shelters = this.shelterService.getShelters();
  }

  onShelterSelected(shelter: Shelter) {
    this.shelterWasSelected.emit(shelter);
  }

}
