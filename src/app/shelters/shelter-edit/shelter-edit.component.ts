import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ShelterService } from '../shelter.service';

@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit {
  id: number;
  editMode = false;
  shelterForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private shelterService: ShelterService) { }

  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.shelterForm);
  }

  onAddAnimal() {
    (<FormArray>this.shelterForm.get('animals')).push(
      new FormGroup({
        'name': new FormControl(),
        'gender': new FormControl(),
        'age': new FormControl(),
        'imgPath': new FormControl(),
        'bio': new FormControl()
      })
    )
  }

  private initForm() {
    let shelterName = '';
    let shelterImagePath = '';
    let shelterLocation = '';
    let shelterPhoneNumber = '';
    let shelterAnimals = new FormArray([]);


    if (this.editMode) {
      const shelter = this.shelterService.getShelter(this.id);
      shelterName = shelter.name;
      shelterImagePath = shelter.imagePath;
      shelterLocation = shelter.location;
      shelterPhoneNumber = shelter.phoneNumber;
      if (shelter['animals']) {
        for (let animal of shelter.animals) {
          shelterAnimals.push(
            new FormGroup({
              'name': new FormControl(animal.name),
              'gender': new FormControl(animal.gender),
              'age': new FormControl(animal.age),
              'imgPath': new FormControl(animal.imgPath),
              'bio': new FormControl(animal.bio)
            })
          )
        }
      }
    }
    this.shelterForm = new FormGroup({
      'name': new FormControl(shelterName),
      'imagePath': new FormControl(shelterImagePath),
      'location': new FormControl(shelterLocation),
      'phoneNumber': new FormControl(shelterPhoneNumber),
      'animals': shelterAnimals
    });
  }

  get controls() {
    return (<FormArray>this.shelterForm.get('animals')).controls;
  }
}
