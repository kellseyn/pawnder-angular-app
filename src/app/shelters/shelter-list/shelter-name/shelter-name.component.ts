import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Shelter} from '../../shelter.model';
import {ShelterService} from '../../shelter.service';


@Component({
  selector: 'app-shelter-name',
  templateUrl: './shelter-name.component.html',
  styleUrls: ['./shelter-name.component.css']
})
export class ShelterNameComponent implements OnInit {
  @Input() shelter: Shelter;

  constructor(private shelterService: ShelterService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.shelterService.shelterSelected.emit(this.shelter);
  }

}
