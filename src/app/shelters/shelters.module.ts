import { NgModule } from '@angular/core';
import { SheltersComponent } from './shelters.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { ShelterDetailComponent } from './shelter-detail/shelter-detail.component';
import { ShelterNameComponent } from './shelter-list/shelter-name/shelter-name.component';
import { ShelterStartComponent } from './shelter-start/shelter-start.component';
import { ShelterEditComponent } from './shelter-edit/shelter-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    SheltersComponent,
    ShelterListComponent,
    ShelterDetailComponent,
    ShelterNameComponent,
    ShelterStartComponent,
    ShelterEditComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SheltersComponent,
        ShelterListComponent,
        ShelterDetailComponent,
        ShelterNameComponent,
        ShelterStartComponent,
        ShelterEditComponent
    ]
})
export class SheltersModule {}