import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { SheltersComponent } from './shelters/shelters.component';
import { ShelterListComponent } from './shelters/shelter-list/shelter-list.component';
import { ShelterDetailComponent } from './shelters/shelter-detail/shelter-detail.component';
import { ShelterNameComponent } from './shelters/shelter-list/shelter-name/shelter-name.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalEditComponent } from './animal-list/animal-edit/animal-edit.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    SheltersComponent,
    ShelterListComponent,
    ShelterDetailComponent,
    ShelterNameComponent,
    AnimalListComponent,
    AnimalEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
