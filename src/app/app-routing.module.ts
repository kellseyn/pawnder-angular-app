import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from './splash/splash.component';


const appRoutes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'shelters', loadChildren: () => import('./shelters/shelters.module').then(m => m.SheltersModule)
    // './shelters/shelters.module.ts#SheltersModule' 
  }
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {

}