import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { SharedModule } from '../shared/shared.module';
// import {AnimalListResolverService} from './animal-list-resolver.service';
import { LoggingService } from '../logging.service';


@NgModule({
    declarations:[
        AnimalListComponent,
        AnimalEditComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AnimalListComponent, 
        // resolve: [AnimalListResolverService]
    },
    ]), 
        SharedModule,
        FormsModule,
        
    ],
    // providers: [LoggingService]
   
})
export class AnimalListModule {}