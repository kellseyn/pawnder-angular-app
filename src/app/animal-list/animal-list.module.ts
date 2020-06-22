import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalListRoutingModule } from './animal-list-routing.module';


@NgModule({
    declarations:[
        AnimalListComponent,
        AnimalEditComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule,
        AnimalListRoutingModule
    ],
    exports: [
        AnimalListComponent,
        AnimalEditComponent
    ]
})
export class AnimalListModule {}