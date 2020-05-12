import { Component, OnInit } from '@angular/core';
import {  Shelter } from '../shelter.model';
import {ShelterService} from '../shelter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-shelter-detail',
  templateUrl: './shelter-detail.component.html',
  styleUrls: ['./shelter-detail.component.css']
})
export class ShelterDetailComponent implements OnInit {
  shelter: Shelter;
  id: number;

  constructor(private shelterService: ShelterService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.shelter = this.shelterService.getShelter(this.id);
        }
      );
  }

  onAddToAnimalList() {
    this.shelterService.addAnimalsToAnimalList(this.shelter.animals);
  }

  onEditShelter(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteShelter() {
    this.shelterService.deleteShelter(this.id);
  }
}
