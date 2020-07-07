import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';


@NgModule({
    declarations:[
        AnimalListComponent,
        AnimalEditComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AnimalListComponent },
    ]), 
        SharedModule,
        FormsModule,
        
    ],
    // providers: [LoggingService]
   
})
export class AnimalListModule {}