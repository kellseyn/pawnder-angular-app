import {Shelter} from './shelter.model';

export class ShelterService {

  private shelters: Shelter[] = [
    new Shelter('Coit North Veterinary Hospital',
      'Plano, Tx',
      '(214) 618-8282',
      'http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/ac/15/c6b1aed2-ef80-438d-9c6e-7fef6b81c8f4.jpg')
  ];

  getShelters() {
    return this.shelters.slice();
  }
}
