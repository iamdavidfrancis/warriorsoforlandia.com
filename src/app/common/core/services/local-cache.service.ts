import { Constants } from './../constants';
import { Observable, from, map, mergeMap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import isString from 'lodash-es/isString';
import isNumber from 'lodash-es/isNumber';
import isDate from 'lodash-es/isDate';

@Injectable()
export class LocalCacheService {
  constructor(private localStorage: LocalStorageService) { }

  public generateCacheKey(constant: string, unique?: string): string {
    let val = `wcache.${constant}`;
    if (unique) {
      val += `.${unique}`;
    }
    return val;
  }

  /**
   * Cache or use result from observable
   *
   * If cache key does not exist or is expired, observable supplied in argument is returned and result cached
   *
   * @param key
   * @param observable
   * @param expires
   * @returns {Observable<T>}
   */
  public observable<T>(key: string, observable: Observable<T>, expires: number = Constants.Instance.cache.defaultExpires): Observable<T> {
    // TODO: Investigate using a service worker to load data in the background.
    // Only use cache if the setting is true
    if (Constants.Instance.cache.useCache) {
      // Check if the item is in local storage, then check if it is expired,
      // then either return the cached value or save the returned value and return it.
      return this.localStorage.getItem<CacheStorageRecord>(key)
        .pipe(
          map<CacheStorageRecord | null, CacheStorageRecord | null>((val: CacheStorageRecord | null) => {
            if (val) {
              return ((new Date(val.expires)).getTime() > Date.now() ? val : null) as CacheStorageRecord | null;
            }
            return null as CacheStorageRecord | null;
          }),
          mergeMap((val: CacheStorageRecord | null) => {
            if (!isEmpty(val)) {
              return from([val!.value as T]);
            } else {
              return observable.pipe(mergeMap((value: T) => this.value(key, value, expires))); // Set the value
            }
          })
        );
    } else {
      return observable;
    }
  }

  /**
   * Cache supplied value until expiry
   *
   * @param key
   * @param value
   * @param expires
   * @returns {Observable<T>}
   */
  public value<T>(key: string, value: T, expires: number|string|Date = Constants.Instance.cache.defaultExpires): Observable<T> {
    const _expires = this.sanitizeAndGenerateDateExpiry(expires);

    return this.localStorage.setItem(key, {
      expires: _expires,
      value: value
    }).pipe(map(val => val.value));
  }

  /**
   *
   * @param key
   * @returns {Observable<null>}
   */
  expire(key: string): Observable<void> {
    return this.localStorage.removeItem(key);
  }

  /**
   *
   * @param expires
   * @returns {Date}
   */
  private sanitizeAndGenerateDateExpiry(expires: string|number|Date): Date {
    const expiryDate: Date = this.expiryToDate(expires);

    if (expiryDate.getTime() <= Date.now()) {
      return new Date(Date.now() + Constants.Instance.cache.defaultExpires);
    }

    return expiryDate;
  }

  /**
   *
   * @param expires
   * @returns {Date}
   */
  private expiryToDate(expires: number|string|Date): Date {
    if (isNumber(expires)) {
      return new Date(Date.now() + Math.abs(<number>expires) * 1000);
    }
    if (isString(expires)) {
      return new Date(<string>expires);
    }
    if (isDate(expires)) {
      return <Date>expires;
    }

    return new Date();
  }
}

interface CacheStorageRecord {
  expires: Date;
  value: any;
}
