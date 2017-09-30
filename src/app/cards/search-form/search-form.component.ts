import { CardDataService } from './../../common/core/services/card-data.service';
import { CardSearch, Set, Type } from './../../common/interfaces/card-models';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public sets: Array<Set>;
  public types: Array<Type>;

  private loadingSets = true;
  private loadingTypes = true;

  @Input() public searchModel: CardSearch;
  @Output() public search: EventEmitter<CardSearch> = new EventEmitter<CardSearch>();

  private setSubscription: Subscription;
  private typeSubscription: Subscription;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    this.setSubscription = this.cardDataService.getSets().subscribe(sets => {
      this.sets = sets; // .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
      this.loadingSets = false;
    });
    this.typeSubscription = this.cardDataService.getTypes().subscribe(types => {
      this.types = types;
      this.loadingTypes = false;
    });
  }

  ngOnDestroy() {
    this.setSubscription.unsubscribe();
    this.typeSubscription.unsubscribe();
  }

  public onSubmit(): void {
    this.search.emit(this.searchModel);
    console.log(this.searchModel);
  }
}
