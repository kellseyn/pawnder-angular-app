import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {SplashComponent} from './splash/splash.component';

import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'auth', component: AuthComponent}
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}