import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './splash/splash.component';


const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'shelters', loadChildren: './shelters/shelters.module.ts' }
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}