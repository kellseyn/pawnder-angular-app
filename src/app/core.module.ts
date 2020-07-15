import { NgModule } from '@angular/core';
import { ShelterService } from './shelters/shelter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        ShelterService, 
        {
          provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptorService, 
          multi: true
        }
    ]
})
export class CoreModule {}