import { CardDataService } from './../../common/core/services/card-data.service';
import { CardData } from './../../common/interfaces/card-models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  private cardDataSubscription: Subscription;
  public card: CardData;
  public cardThumbUrl: string;
  public cardImageUrl: string;
  public loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private cardDataService: CardDataService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.loading = true;
      const id = params['id'];

      if (this.cardDataSubscription) {
        this.cardDataSubscription.unsubscribe();
      }

      this.cardDataService.getCard(id).subscribe(card => {
        this.card = card;
        this.loading = false;
        this.cardThumbUrl = this.cardDataService.getCardImageUrl(card, true);
        this.cardImageUrl = this.cardDataService.getCardImageUrl(card);
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    if (this.cardDataSubscription) {
      this.cardDataSubscription.unsubscribe();
    }
  }

}
