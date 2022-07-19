import { Constants } from './../../common/core/constants';
import { Subscription } from 'rxjs';
import { CardSearch, CardResults, CardData } from './../../common/interfaces/card-models';
import { CardDataService } from './../../common/core/services/card-data.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public results: CardResults;
  public search: CardSearch;
  public searching: boolean;
  public error: any;

  public gridColumns = 4;

  public pageIndex = 0;
  public pageSize = this.gridColumns * 3;
  public pageSizeOptions = [ 3, 6, 12, 24, 48 ];

  private searchSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(
    private cardDataService: CardDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.doResize(window.innerWidth);

    this.search = {
      name: '',
      type: '',
      set: '',
      artist: '',
      sortOrder: '',
      textSearch: '',
    };

    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.search = {
        name: params['name'],
        type: params['type'],
        set: params['set'],
        artist: params['artist'],
        sortOrder: params['sort'],
        textSearch: params['abilities'],
      };

      this.pageIndex = params['page'] ? parseInt(params['page']) : 0;
      this.pageSize = params['pageSize'] ? parseInt(params['pageSize']) : this.gridColumns * 3;

      this.searchInternal();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  // Make the grid responsize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.doResize((event.target as Window).innerWidth);
  }

  private doResize(innerWidth: number) {
    if (innerWidth < 480) {
      this.gridColumns = 1;
    } else if (innerWidth < 980) {
      this.gridColumns = 2;
    } else {
      this.gridColumns = 4;
    }

    this.pageSize = this.gridColumns * 3;
  }

  public performSearch(search: CardSearch, pageIndex: number): void {
    this.router.navigate(['cards'], {
      queryParams: {
        name: search.name,
        type: search.type,
        set: search.set,
        artist: search.artist,
        sort: search.sortOrder,
        page: pageIndex,
        pageSize: this.pageSize,
        abilities: search.textSearch,
      }
    });
  }

  public handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.performSearch(this.search, this.pageIndex);
  }

  private searchInternal() {
    if (!this.shouldPerformSearch()) {
      return;
    }

    this.error = null;
    this.searching = true;

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    this.search.usePaging = true;
    this.search.pageSize = this.pageSize;
    this.search.page = this.pageIndex;

    this.searchSubscription = this.cardDataService.searchCards(this.search).subscribe({ 
      next: data => {
        this.results = data;
        this.searching = false;
      }, 
      error: error => {
        this.searching = false;
        this.error = error;
      }
    });
  }

  public getCardImage(card: CardData) {
    return this.cardDataService.getCardImageUrl(card, true);
  }

  private shouldPerformSearch(): boolean {
    if (this.search.name || this.search.type || this.search.set || this.search.artist) {
      return true;
    }

    return Constants.Instance.cards.performEmptySearch;
  }
}
