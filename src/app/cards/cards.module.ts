import { SharedComponentsModule } from './../common/shared/components/shared-components.module';
import { AngularMaterialModule } from './../common/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardsRoutingModule } from './cards-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
    FormsModule
  ],
  declarations: [SearchPageComponent, CardDetailsComponent, SearchFormComponent]
})
export class CardsModule { }
