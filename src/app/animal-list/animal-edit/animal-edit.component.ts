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
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private alService: AnimalListService) { }

  ngOnInit() {
    this.subscription = this.alService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  onAddAnimal(form: NgForm) {
    const value = form.value;
    const newAnimal = new Animal(value.name, value.gender, value.age, value.imgURL, value.bio);
    this.alService.addAnimal(newAnimal);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
