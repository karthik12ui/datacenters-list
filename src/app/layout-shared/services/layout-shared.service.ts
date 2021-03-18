import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router, Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { promise } from 'protractor';
import * as CryptoJS from 'crypto-js';
import { secSalt } from '../layout-shared.constant';
@Injectable()
export class LayoutSharedService {
    pageContent: any;
    httpOptions: any;
    constructor(
      public httpClient: HttpClient,
      public router: Router
    ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }),
      }
    }

    navigateInApp(item) {
      this.router.navigate([item])
    }

    hashWithSaltData(data: any) {
      if(!!data && data !== null && data !== '') {
        const key = CryptoJS.enc.Utf8.parse(secSalt.k);
        const iv = CryptoJS.enc.Utf8.parse(secSalt.iv);
        const enc = CryptoJS.AES.encrypt(data, key , {iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
        return enc.toString();
      } else {
        return null;
      }
    }

    dechashWithSaltData(data: any) {
      if(!!data && data !== null && data !== '') {
        const key = CryptoJS.enc.Utf8.parse(secSalt.k);
        const iv = CryptoJS.enc.Utf8.parse(secSalt.iv);
        const dec = CryptoJS.AES.decrypt(data, key , {iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
        return dec.toString(CryptoJS.enc.Utf8);
      } else {
        return null;
      }
    }
}
