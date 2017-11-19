import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setItem<T>(key: string, value: T): Observable<T> {
    return Observable.fromPromise(localforage.setItem(key, value));
  }

  public getItem<T>(key: string): Observable<T> {
    return Observable.fromPromise(localforage.getItem(key));
  }

  public removeItem(key: string): Observable<void> {
    return Observable.fromPromise(localforage.removeItem(key));
  }
}
