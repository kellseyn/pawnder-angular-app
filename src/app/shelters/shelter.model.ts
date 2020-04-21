import { Animal } from '../shared/animal.model';

export class Shelter {
  public name: string;
  public location: string;
  public phoneNumber: string;
  public imagePath: string;
  public animals: Animal[];

  constructor(name: string, location: string, phoneNumber: string, imagePath: string, animals: Animal[]) {
    this.name = name;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.imagePath = imagePath;
    this.animals = animals;
  }

}
