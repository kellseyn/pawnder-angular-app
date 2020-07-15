import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Animal} from '../../shared/animal.model';
import {AnimalListService} from '../animal-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AnimalListActions from '../store/animal-list.actions';
import * as fromAnimalList from '../store/animal-list.reducer';

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

  constructor(
    private alService: AnimalListService, 
    private store: Store<fromAnimalList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('animalList').subscribe(stateData => {
      if (stateData.editedAnimalIndex > -1) {
        this.editMode = true;
        this.editedAnimal = stateData.editedAnimal;
        this.alForm.setValue({
          name: this.editedAnimal.name,
          gender: this.editedAnimal.gender,
          age: this.editedAnimal.age,
          imgPath: this.editedAnimal.imgPath,
          bio: this.editedAnimal.bio,
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onAddAnimal(form: NgForm) {
    const value = form.value;
    const newAnimal = new Animal(value.name, value.gender, value.age, value.imgPath, value.bio);
    if (this.editMode) {
      // this.alService.updateAnimal(this.editedAnimalIndex, newAnimal);
      this.store.dispatch(
        new AnimalListActions.UpdateAnimal({
          index: this.editedAnimalIndex, 
          animal: newAnimal
        })
      );
    } else {
      // this.alService.addAnimal(newAnimal);
      this.store.dispatch(new AnimalListActions.AddAnimal(newAnimal));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.alForm.reset();
    this.editMode = false;
    this.store.dispatch(new AnimalListActions.StopEdit());
  }

  onDelete() {
    // this.alService.deleteAnimal(this.editedAnimalIndex);
    this.store.dispatch(
      new AnimalListActions.DeleteAnimal(this.editedAnimalIndex)
    );
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new AnimalListActions.StopEdit());
  }
}
