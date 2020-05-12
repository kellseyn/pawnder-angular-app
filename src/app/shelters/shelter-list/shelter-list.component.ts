import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  Shelter } from '../shelter.model';
import { Router, ActivatedRoute } from '@angular/router';
import {ShelterService} from '../shelter.service';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.css']
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[];

  constructor(private shelterService: ShelterService,
              private router: Router,
              private route: ActivatedRoute) {

}

  ngOnInit() {
    this.shelterService.sheltersChanged
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
}
