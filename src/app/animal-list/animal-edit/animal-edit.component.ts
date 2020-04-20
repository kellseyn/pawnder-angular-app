import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import {Animal} from '../../shared/animal.model';
import {AnimalListService} from '../animal-list.service';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('ageInput') ageInputRef: ElementRef;
  @ViewChild('genderInput') genderInputRef: ElementRef;
  @ViewChild('bioInput') bioInputRef: ElementRef;
  @ViewChild('imgPathInput') imgPathInputRef: ElementRef;

  constructor(private alService: AnimalListService) { }

  ngOnInit(): void {
  }

  onAddAnimal() {
    const animalName = this.nameInputRef.nativeElement.value;
    const animalAge = this.ageInputRef.nativeElement.value;
    const animalGender = this.genderInputRef.nativeElement.value;
    const animalBio = this.bioInputRef.nativeElement.value;
    const animalImgPath = this.imgPathInputRef.nativeElement.value;
    const newAnimal = new Animal(animalName, animalGender, animalAge, animalImgPath, animalBio);
    this.alService.addAnimal(newAnimal);
  }

}
