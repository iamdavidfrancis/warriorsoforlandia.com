import { CardDataService } from './../../common/core/services/card-data.service';
import { CardData } from './../../common/interfaces/card-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public card: CardData;
  public cardImageUrl: string;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    this.card = {
      id: '8C0E9017-4BEB-4B89-9E5D-018ADC73D8AF',
      name: 'Divine Intervention',
      set: {
        name: 'Curse of the White Witch',
        code: 'CWW',
        year: '2015'
      },
      type: 'Inspiration'
    };

    this.cardImageUrl = this.cardDataService.getCardImageUrl(this.card, true);
  }

}
