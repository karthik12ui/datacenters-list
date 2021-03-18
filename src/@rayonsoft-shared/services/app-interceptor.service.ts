import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { GlobalAuthService } from './auth.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    private totalAPICalls;
    public HttpLoader: any;

constructor(
        @Inject(DOCUMENT) private document: any,
        private globalAuthService :GlobalAuthService
) {
    this.totalAPICalls = 0;
    this.HttpLoader = document.getElementById('httpLoader');
}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalAPICalls++;
    if (!!this.HttpLoader && this.HttpLoader !== null && this.HttpLoader !== ''){
        this.HttpLoader.style.display = 'block';
    }
    const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    const getToken = this.globalAuthService.getToken();
    if(getToken !== null) {
        headersConfig['Authorization'] = `bearer ${getToken}`
    }
    const _request = request.clone({setHeaders: headersConfig});
    return next.handle(_request).pipe(
        tap(res => {
            if (res instanceof HttpResponse) {
                this.updateReq();
            }
        }),
        catchError(err => {
            this.updateReq();
            throw err;
        })
    );
}

private updateReq() {
    this.totalAPICalls--;
    if (this.totalAPICalls === 0) {
        if (!!this.HttpLoader && this.HttpLoader !== null && this.HttpLoader !== '') {
            this.HttpLoader.style.display = 'none';
        }
    }
}
}
