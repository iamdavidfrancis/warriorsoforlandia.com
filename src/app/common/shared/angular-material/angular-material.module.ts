import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
  MdSidenavModule,
  MatGridListModule,
  MdFormFieldModule,
  MdInputModule,
  MdOptionModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdSidenavModule,
    MatGridListModule,
    MdFormFieldModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule
  ]
})
export class AngularMaterialModule { }
