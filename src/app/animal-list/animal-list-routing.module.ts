import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AnimalListComponent } from './animal-list.component';

const routes: Routes = [
    { path: 'animals', component: AnimalListComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnimalListRoutingModule {}