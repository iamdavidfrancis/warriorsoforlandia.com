import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setItem<T>(key: string, value: T): Observable<T> {
    return from(localforage.setItem(key, value));
  }

  public getItem<T>(key: string): Observable<T | null> {
    return from(localforage.getItem<T>(key));
  }

  public removeItem(key: string): Observable<void> {
    return from(localforage.removeItem(key));
  }
}
