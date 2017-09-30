import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './../common/shared/angular-material/angular-material.module';

import { SharedComponentsModule } from './../common/shared/components/shared-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  declarations: [HomeComponent, AboutComponent]
})
export class HomeModule { }
