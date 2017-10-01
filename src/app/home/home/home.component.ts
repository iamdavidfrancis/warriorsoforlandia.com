import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../common/core/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public siteTitle = Constants.Instance.siteTitle;
  public siteCaption = 'AFO\'s exclusive card game';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public viewCards(): void {
    this.router.navigate(['cards']);
  }

}
