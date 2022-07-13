import { CardDataService } from './../../common/core/services/card-data.service';
import { CardSearch, Set, Type, SortOrder } from './../../common/interfaces/card-models';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public sets: Array<Set>;
  public types: Array<Type>;
  public sort: Array<SortOrder>;

  public loadingSets = true;
  public loadingTypes = true;
  public isMobile = false;

  @Input() public searchModel: CardSearch;
  @Output() public search: EventEmitter<CardSearch> = new EventEmitter<CardSearch>();

  private setSubscription: Subscription;
  private typeSubscription: Subscription;
  private breakpointsSub: Subscription;

  constructor(private cardDataService: CardDataService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setSubscription = this.cardDataService.getSets().subscribe(sets => {
      this.sets = sets; // .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
      this.loadingSets = false;
    });
    this.typeSubscription = this.cardDataService.getTypes().subscribe(types => {
      this.types = types;
      this.loadingTypes = false;
    });

    this.breakpointsSub = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });

    this.sort = [
      { display: 'Card Name', value: 'NameAscending' },
      { display: 'Card Name Descending', value: 'NameDescending' },
      { display: "Collector's Number", value: 'CollectorsNumberAscending' },
      { display: "Collector's Number Descending", value: 'CollectorsNumberDescending' },
    ]
  }

  ngOnDestroy() {
    this.setSubscription.unsubscribe();
    this.typeSubscription.unsubscribe();
    this.breakpointsSub.unsubscribe();
  }

  public onSubmit(): void {
    this.search.emit(this.searchModel);
  }
}
