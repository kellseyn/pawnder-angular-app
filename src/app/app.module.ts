import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SplashComponent } from './splash/splash.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { animalListReducer } from './animal-list/store/animal-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    FooterComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({animalList: animalListReducer}),
    SharedModule,
    CoreModule,
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
