import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheltersComponent } from './shelters.component';
import { AuthGuard } from '../auth/auth.guard';
import { ShelterStartComponent } from './shelter-start/shelter-start.component';
import { ShelterEditComponent } from './shelter-edit/shelter-edit.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import {ShelterResolverService} from './shelters-resolver.service';

const routes: Routes = [
    { path: 'shelters', 
    component: SheltersComponent, 
    canActivate: [AuthGuard], 
    children: [
        { path: '', component: ShelterStartComponent },
        { path: 'new', component: ShelterEditComponent},
        { path: ':id', component: ShelterDetailComponent, resolve: [ShelterResolverService]},
        { path: ':id/edit', component: ShelterEditComponent, resolve: [ShelterResolverService]}

    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SheltersRoutingModule {}