import { NgModule } from '@angular/core';
import { AnimalListService } from './animal-list/animal-list.service';
import { ShelterService } from './shelters/shelter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        AnimalListService, 
        ShelterService, 
        {
          provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptorService, 
          multi: true
        }
    ]
})
export class CoreModule {}