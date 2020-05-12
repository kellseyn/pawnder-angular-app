import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {  Shelter } from '../shelter.model';
import { Router, ActivatedRoute } from '@angular/router';
import {ShelterService} from '../shelter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit, OnDestroy {
  shelters: Shelter[];
  subscription: Subscription;

  constructor(private shelterService: ShelterService,
              private router: Router,
              private route: ActivatedRoute) {

}

  ngOnInit() {
    this.subscription = this.shelterService.sheltersChanged
      .subscribe(
        (shelters: Shelter[]) => {
          this.shelters = shelters;
        }
      )
    this.shelters = this.shelterService.getShelters();
  }

  onNewShelter(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
