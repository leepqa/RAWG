import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  private readonly API_KEY = '91d8740264754797974b146729857469';


  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newReq = req.clone({
      params: req.params.set('key', this.API_KEY)
    })

    return next.handle(newReq);
  }
}


