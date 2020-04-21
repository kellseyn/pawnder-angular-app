import {Shelter} from './shelter.model';
import {EventEmitter} from '@angular/core';
import { Animal} from '../shared/animal.model';

export class ShelterService {
  shelterSelected = new EventEmitter<Shelter>();

  private shelters: Shelter[] = [
    new Shelter(
      'Coit North Veterinary Hospital',
      'Plano, Tx',
      '(214) 618-8282',
      'http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/ac/15/c6b1aed2-ef80-438d-9c6e-7fef6b81c8f4.jpg',
      [
        new Animal(
          'Fred',
          'M',
          3,
          'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQyMjQ5L29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjA5NDkyNTY4fQ.3z_FT-T0oIcWknK_FxSe7UaeLs0yCBd80Gp4X_y650I/img.jpg',
          'I am cross-eyed but a fluff of love')
      ])
  ];

  getShelters() {
    return this.shelters.slice();
  }
}
