import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { ErrorPageTypes } from 'src/app/layout-shared/services/error-message.constant';
import { appUrlRoutings } from 'src/app/app.constant';
export class ErrorCodeType {
  hasFailureAPIErrorCode: boolean;
  hasSuccessAPIErrorCode: boolean;
}
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  errorDetails: any;
  displayError: boolean;
  errorcodeType = {} as ErrorCodeType
  constructor(public layoutSharedService: LayoutSharedService) {
    this.errorcodeType.hasFailureAPIErrorCode = false;
    this.errorcodeType.hasSuccessAPIErrorCode = false;
    this.displayError = false;
    const errorInfoLocal: any = sessionStorage.getItem('ErrorPage');
    const errorInfo = JSON.parse(errorInfoLocal);
    if(!!errorInfo && errorInfo !== null && !!errorInfo.Code && errorInfo.Code !== null) {
      this.errorDetails = errorInfo;
      switch(this.errorDetails.ErrorPageTypes) {
        case ErrorPageTypes.failureError:
          this.errorcodeType.hasFailureAPIErrorCode = true;
          break;
        case ErrorPageTypes.successError:
            this.errorcodeType.hasSuccessAPIErrorCode = true;
          break;
        case ErrorPageTypes.constMessage:
          this.errorcodeType.hasFailureAPIErrorCode = false;
          this.errorcodeType.hasSuccessAPIErrorCode = false;
          break;
      }
      this.displayError = true;
    } else {
      this.layoutSharedService.navigateInApp(appUrlRoutings.initi);
    }
   }

  ngOnInit() {
  }

}