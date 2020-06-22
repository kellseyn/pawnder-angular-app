import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalListRoutingModule } from './animal-list-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        AnimalListComponent,
        AnimalEditComponent
    ],
    imports: [
        RouterModule, 
        SharedModule,
        FormsModule,
        AnimalListRoutingModule
    ],
    exports: [
        AnimalListComponent,
        AnimalEditComponent
    ]
})
export class AnimalListModule {}