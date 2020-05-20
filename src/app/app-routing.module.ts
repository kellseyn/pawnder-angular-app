import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SheltersComponent} from './shelters/shelters.component';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {SplashComponent} from './splash/splash.component';
import { ShelterStartComponent } from './shelters/shelter-start/shelter-start.component';
import { ShelterDetailComponent } from './shelters/shelter-detail/shelter-detail.component';
import { ShelterEditComponent } from './shelters/shelter-edit/shelter-edit.component';
import {ShelterResolverService} from './shelters/shelters-resolver.service';

const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'shelters', component: SheltersComponent, children: [
        { path: '', component: ShelterStartComponent },
        { path: 'new', component: ShelterEditComponent},
        { path: ':id', component: ShelterDetailComponent, resolve: [ShelterResolverService]},
        { path: ':id/edit', component: ShelterEditComponent, resolve: [ShelterResolverService]}

    ] },
    { path: 'animals', component: AnimalListComponent }
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}