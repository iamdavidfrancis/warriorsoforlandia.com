import { LocalCacheService } from './local-cache.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Constants } from './../constants';
import { CardResults, CardSearch, CardData, Set, Type } from './../../interfaces/card-models';

@Injectable()
export class CardDataService {

  constructor(private httpClient: HttpClient, private cache: LocalCacheService) { }

  public searchCards(query: CardSearch): Observable<CardResults> {
    const queryUrl = this.buildUrl(Constants.Instance.http.cards.search);
    const cacheKey = this.cache.generateCacheKey('searchCards', JSON.stringify(query));

    const observable = this.httpClient.post<CardResults>(queryUrl, query);

    return this.cache.observable(cacheKey, observable);
  }

  public getCard(id: string): Observable<CardData> {
    const queryUrl = this.buildUrl(Constants.Instance.http.cards.get).replace('{id}', id);
    const cacheKey = this.cache.generateCacheKey('searchCards', id);

    const observable = this.httpClient.get<CardData>(queryUrl);

    return this.cache.observable(cacheKey, observable)
      .map(card => {
        // Format the card ability nicely. Maybe move somewhere else.
        card.ability = card.ability.split('\n').join('<br/>');
        card.flavorText = card.flavorText.split('\n').join('<br/>');

        return card;
      });
  }

  public getSets(): Observable<Array<Set>> {
    const queryUrl = this.buildUrl(Constants.Instance.http.cards.sets);
    const cacheKey = this.cache.generateCacheKey('sets');

    const observable = this.httpClient.get<Array<Set>>(queryUrl);

    return this.cache.observable(cacheKey, observable, Constants.Instance.cache.oneWeekExpires);
  }

  public getTypes(): Observable<Array<Type>> {
    const queryUrl = this.buildUrl(Constants.Instance.http.cards.types);
    const cacheKey = this.cache.generateCacheKey('types');

    const observable = this.httpClient.get<Array<Type>>(queryUrl);

    return this.cache.observable(cacheKey, observable, Constants.Instance.cache.oneWeekExpires);
  }

  public getCardImageUrl(card: CardData, loadThumbnail: boolean = false): string {
    let path = loadThumbnail ? Constants.Instance.http.cards.thumbnail : Constants.Instance.http.cards.image;

    path = path.replace('{{setYear}}', card.set.year);
    path = path.replace('{{type}}', card.type.toLowerCase());
    path = path.replace('{{name}}', this.cleanName(card.name));

    return this.buildUrl(path, true);
  }

  private buildUrl(path: string, staticsUrl: boolean = false): string {
    return (staticsUrl ? Constants.Instance.http.staticsBaseUrl : Constants.Instance.http.baseUrl) + path;
  }

  private cleanName(name: string): string {
    name = name.toLowerCase().trim();
    name = name.split(' ').join('-');
    name = name.split('\'').join('');
    name = name.split('.').join('');
    name = name.split(',').join('');
    name = name.split(':').join('');
    name = name.split('(').join('');
    name = name.split(')').join('');
    return name;
  }
}
