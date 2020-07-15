import { Component, OnInit, OnDestroy } from '@angular/core';

import { Animal } from '../shared/animal.model';
import {AnimalListService} from './animal-list.service';
import {animate} from '@angular/animations';
import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit, OnDestroy {
  animals: Observable<{animals: Animal[]}>;
  private aniChangeSub: Subscription;

  constructor(
    private alService: AnimalListService, 
    private loggingService: LoggingService,
    private store: Store<{animalList: {animals: Animal[] } }>
    ) { }

  ngOnInit(){
    this.animals = this.store.select('animalList');
    // this.animals = this.alService.getAnimals();
    // this.aniChangeSub = this.alService.animalsChanged
    //   .subscribe(
    //     (animals: Animal[]) => {
    //     this.animals = animals;
    //     }
    //   );
      this.loggingService.printLog('Hello from AnimalListComponent ngOnInit');
  }

  onEditAnimal(index: number) {
    this.alService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    // this.aniChangeSub.unsubscribe;
  }


}
