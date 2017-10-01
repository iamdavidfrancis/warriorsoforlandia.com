import { Component, OnInit } from '@angular/core';
import { Constants } from '../../common/core/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public siteTitle = Constants.Instance.siteTitle;

  constructor() { }

  ngOnInit() {
  }

}
