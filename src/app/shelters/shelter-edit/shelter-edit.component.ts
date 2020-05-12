import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

  private initForm() {
    let shelterName = '';
    let shelterImagePath = '';
    let shelterLocation = '';
    let shelterPhoneNumber = '';


    if (this.editMode) {
      const shelter = this.shelterService.getShelter(this.id);
      shelterName = shelter.name;
      shelterImagePath = shelter.imagePath;
      shelterLocation = shelter.location;
      shelterPhoneNumber = shelter.phoneNumber;
    }
    this.shelterForm = new FormGroup({
      'name': new FormControl(shelterName),
      'imagePath': new FormControl(shelterImagePath),
      'location': new FormControl(shelterLocation),
      'phoneNumber': new FormControl(shelterPhoneNumber)
    });
  }
}
