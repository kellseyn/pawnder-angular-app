import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ShelterService } from '../shelter.service';
import { Shelter } from '../shelter.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';

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
              private shelterService: ShelterService,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

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
      // const newShelter = new Shelter(
      //   this.shelterForm.value['name'],
      //   this.shelterForm.value['location'],
      //   this.shelterForm.value['phoneNumber'],
      //   this.shelterForm.value['imagePath'],
      //   this.shelterForm.value['animals']);

      if (this.editMode) {
        this.shelterService.updateShelter(this.id, this.shelterForm.value);
      } else {
        this.shelterService.addShelter(this.shelterForm.value);
      }
      this.onCancel();
  }

  onAddAnimal() {
    (<FormArray>this.shelterForm.get('animals')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'gender': new FormControl(null, Validators.required),
        'age': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'imgPath': new FormControl(null, Validators.required),
        'bio': new FormControl(null, Validators.required)
      })
    )
  }

  onDeleteAnimal(index: number) {
    (<FormArray>this.shelterForm.get('animals')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let shelterName = '';
    let shelterImagePath = '';
    let shelterLocation = '';
    let shelterPhoneNumber = '';
    let shelterAnimals = new FormArray([]);


    if (this.editMode) {
      // const shelter = this.shelterService.getShelter(this.id);
      this.store.select('shelters').pipe(map(shelterState => {
        return shelterState.shelters.find((shelter, index) => {
          return index === this.id;
        })
      })).subscribe(shelter => {
        shelterName = shelter.name;
      shelterImagePath = shelter.imagePath;
      shelterLocation = shelter.location;
      shelterPhoneNumber = shelter.phoneNumber;
      if (shelter['animals']) {
        for (let animal of shelter.animals) {
          shelterAnimals.push(
            new FormGroup({
              'name': new FormControl(animal.name, Validators.required),
              'gender': new FormControl(animal.gender, Validators.required),
              'age': new FormControl(animal.age, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'imgPath': new FormControl(animal.imgPath, Validators.required),
              'bio': new FormControl(animal.bio, Validators.required)
            })
          )
        }
      }
      })
      
    }
    this.shelterForm = new FormGroup({
      'name': new FormControl(shelterName, Validators.required),
      'imagePath': new FormControl(shelterImagePath, Validators.required),
      'location': new FormControl(shelterLocation, Validators.required),
      'phoneNumber': new FormControl(shelterPhoneNumber, Validators.required),
      'animals': shelterAnimals
    });
  }

  get controls() {
    return (<FormArray>this.shelterForm.get('animals')).controls;
  }
}
