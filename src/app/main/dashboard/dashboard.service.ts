import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { AppService } from 'src/app/app.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { reject } from 'q';
@Injectable()
export class DashboardService {
    pageContent: any;
    constructor(
      public httpClient: HttpClient,
      public layoutSharedService: LayoutSharedService,
      public appService: AppService
    ) {

    }
  // -----------------------------------------------------------------------------------------------------
    // @ reslove methods
    // -----------------------------------------------------------------------------------------------------
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((reslove) => {
            Promise.all([
                this.getPageContentData(),
            ]). then(
                () => {
                    reslove();
                },
                reject
            );
        });
    }

    getPageContentData(): Promise<any> {
        return new Promise((resolve) => {
            this.httpClient.get('api/rayonsoft-services')
                .subscribe((response: any) => {
                    this.pageContent = response;
                    resolve(response);
                }, reject);
        });
    }
    testAPI(): Observable<any> {
      return this.httpClient.get(this.appService.appEndPoint().testServerList,
     this.layoutSharedService.httpOptions);
  }

  setServerInLocalSession(data) {
    sessionStorage.setItem('serverDetails', JSON.stringify(data));
   }
   getServerInLocalSession() {
    const data = sessionStorage.getItem('serverDetails');
    let profileInSession;
    if (!!data && data !== null) {
     profileInSession = JSON.parse(data);
    } else {
        profileInSession = null;
    }
    return profileInSession;
   }
}
