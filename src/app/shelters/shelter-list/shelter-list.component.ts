import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {  Shelter } from '../shelter.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit, OnDestroy {
  shelters: Shelter[];
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) {

}

  ngOnInit() {
    this.subscription = this.store
      .select('shelters')
      .pipe(map(sheltersState => sheltersState.shelters))
      .subscribe(
        (shelters: Shelter[]) => {
          this.shelters = shelters;
        });
  }

  onNewShelter(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
