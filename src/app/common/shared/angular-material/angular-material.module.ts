import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule
} from '@angular/material/toolbar';

import {
  MatIconModule,
} from '@angular/material/icon';

import {
  MatButtonModule,
} from '@angular/material/button';

import {
  MatMenuModule,
} from '@angular/material/menu';

import {
  MatCardModule,
} from '@angular/material/card';

import {
  MatSidenavModule,
} from '@angular/material/sidenav';

import {
  MatGridListModule,
} from '@angular/material/grid-list';

import {
  MatFormFieldModule,
} from '@angular/material/form-field';

import {
  MatInputModule,
} from '@angular/material/input';

import {
  MatOptionModule,
} from '@angular/material/core';

import {
  MatSelectModule,
} from '@angular/material/select';

import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule { }
