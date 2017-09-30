import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './page-content/page-content.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [PageHeaderComponent, PageContentComponent, LoadingIconComponent],
  exports: [
    PageHeaderComponent, PageContentComponent, LoadingIconComponent
  ]
})
export class SharedComponentsModule { }
