import { CardDetailsComponent } from './card-details/card-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: ':id', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
