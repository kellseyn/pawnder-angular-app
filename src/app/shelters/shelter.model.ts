export class Shelter {
  public name: string;
  public location: string;
  public phoneNumber: string;
  public imagePath: string;

  constructor(name: string, location: string, phoneNumber: string, imagePath: string) {
    this.name = name;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.imagePath = imagePath;
  }

}
