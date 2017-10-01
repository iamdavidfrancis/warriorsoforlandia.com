import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Input() cssClass: string;

  constructor() { }

  ngOnInit() {
  }

}
