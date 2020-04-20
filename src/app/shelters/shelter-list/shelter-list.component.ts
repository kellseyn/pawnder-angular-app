import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  Shelter } from '../shelter.model';
import {ShelterService} from '../shelter.service';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[];

  constructor(private shelterService: ShelterService) {

}

  ngOnInit() {
    this.shelters = this.shelterService.getShelters();
  }
}
