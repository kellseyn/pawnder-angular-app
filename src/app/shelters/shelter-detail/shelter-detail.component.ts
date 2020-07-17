import { Component, OnInit } from '@angular/core';
import {  Shelter } from '../shelter.model';
import {ShelterService} from '../shelter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';

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
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.pipe(map(params => {
      return +params['id'];
    }), switchMap(id => {
      this.id = id;
      return this.store.select('shelters');
    }),
    map(sheltersState => {
      return sheltersState.shelters.find((shelter, index) => {
        return index === this.id;
      });
    })
  )
    .subscribe(shelter => {
            this.shelter = shelter;
          
      });
  }

  onAddToAnimalList() {
    this.shelterService.addAnimalsToAnimalList(this.shelter.animals);
  }

  onEditShelter(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteShelter() {
    this.shelterService.deleteShelter(this.id);
    this.router.navigate(['/shelters']);
  }
}
