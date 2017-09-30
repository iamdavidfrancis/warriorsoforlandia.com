import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './common/core/core.module';

import { AppComponent } from './app.component';
import { NavBarModule } from './common/shared/components/navbar/navbar.component';
import { FooterModule } from './common/shared/components/footer/footer.component';
import { PageHeaderComponent } from './common/shared/components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    NavBarModule,
    FooterModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
