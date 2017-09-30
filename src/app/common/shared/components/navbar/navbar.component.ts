import {Component, NgModule} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdButtonModule, MdMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {}

@NgModule({
  imports: [MdButtonModule, MdMenuModule, RouterModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule { }
