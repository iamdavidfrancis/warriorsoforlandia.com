import {Component, NgModule} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, RouterModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule { }
