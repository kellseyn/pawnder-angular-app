import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SheltersComponent} from './shelters/shelters.component';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {SplashComponent} from './splash/splash.component';

const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'shelters', component: SheltersComponent },
    { path: 'animals', component: AnimalListComponent }
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}