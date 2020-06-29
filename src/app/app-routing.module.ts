import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './splash/splash.component';


const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'shelters', loadChildren: () => import('./shelters/shelters.module').then(m => m.SheltersModule)},
    { path: 'animal-list', loadChildren: () => import('./animal-list/animal-list.module').then(m => m.AnimalListModule)},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}