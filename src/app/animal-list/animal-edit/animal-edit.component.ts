import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {Animal} from '../../shared/animal.model';
import {AnimalListService} from '../animal-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') alForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedAnimalIndex: number;
  editedAnimal: Animal;

  constructor(private alService: AnimalListService) { }

  ngOnInit() {
    this.subscription = this.alService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedAnimalIndex = index;
          this.editMode = true;
          this.editedAnimal = this.alService.getAnimal(index);
          this.alForm.setValue({
            name: this.editedAnimal.name,
            gender: this.editedAnimal.gender,
            age: this.editedAnimal.age,
            imgPath: this.editedAnimal.imgPath,
            bio: this.editedAnimal.bio,
            

          })
        }
      );
  }

  onAddAnimal(form: NgForm) {
    const value = form.value;
    const newAnimal = new Animal(value.name, value.gender, value.age, value.imgPath, value.bio);
    if (this.editMode) {
      this.alService.updateAnimal(this.editedAnimalIndex, newAnimal);
    } else {
      this.alService.addAnimal(newAnimal);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.alForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
