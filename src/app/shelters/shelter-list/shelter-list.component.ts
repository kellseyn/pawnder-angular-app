import { Component, OnInit } from '@angular/core';
import {  Shelter } from '../shelter.model';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[] = [
    new Shelter('Coit North Veterinary Hospital',
      'Plano, Tx',
      '(214) 618-8282',
      'http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/ac/15/c6b1aed2-ef80-438d-9c6e-7fef6b81c8f4.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
