import { LocalStorageService } from './local-storage.service';
import { HttpError } from './../../interfaces/http-error.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      const httpError: HttpError = {
        status: error.status,
        title: '',
        message: '',
        originalError: error
      };

      switch (error.status) {
        case 404:
          httpError.title = 'Not Found';
          httpError.message = 'There was an error processing this request. Please make sure the link is valid.';
          break;
        case 500:
        default:
          httpError.title = 'Unknown';
          httpError.message = 'An unknown error has occurred';
      }

      return throwError(() => httpError);
    }));
  }

}
