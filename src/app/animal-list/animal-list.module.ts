import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';


@NgModule({
    declarations:[
        AnimalListComponent,
        AnimalEditComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        ReactiveFormsModule,
        
    ],
    exports: [
        AnimalListComponent,
        AnimalEditComponent
    ]
})
export class AnimalListModule {}