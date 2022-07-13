import { Constants } from './../../../core/constants';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() title: string;

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'].currentValue === changes['title'].previousValue) {
      return;
    }

    let displayString = this.title;
    if (displayString !== Constants.Instance.siteTitle) {
      if (displayString) {
        displayString += ' - ';
      }
      displayString += Constants.Instance.siteTitle;
    }
    this.titleService.setTitle(displayString);

  }
}
