import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Shelter} from '../../shelter.model';


@Component({
  selector: 'app-shelter-name',
  templateUrl: './shelter-name.component.html',
  styleUrls: ['./shelter-name.component.css']
})
export class ShelterNameComponent implements OnInit {
  @Input() shelter: Shelter;
  @Output() shelterSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.shelterSelected.emit();
  }

}
