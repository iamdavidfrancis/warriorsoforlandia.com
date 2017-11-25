import { Component, OnInit } from '@angular/core';
import { Constants } from '../../common/core/constants';
import { Router } from '@angular/router';

export interface CardLink {
  name: string;
  id: string;
}

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.scss']
})
export class RestrictedComponent implements OnInit {
  public namedWarriors: Array<CardLink>;
  public singletonCards: Array<CardLink>;

  ngOnInit() {
    this.namedWarriors = Constants.Instance.restrictedLists.namedWarriors;
    this.singletonCards = Constants.Instance.restrictedLists.singletonCards;
  }
}
