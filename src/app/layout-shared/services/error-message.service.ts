import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router, Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { promise } from 'protractor';
import { RayonsoftErrorMessageItems } from './error-message.constant';
import { LayoutSharedService } from './layout-shared.service';
import { NotificationsDisplayType, NotificationsType } from '../notification-alerts/notification-alert.enums';
import { appUrlRoutings } from 'src/app/app.constant';

@Injectable()
export class ErrorMessageService {
  errorMessages: any;
  navigateToErrorPage: boolean;
  constructor(
    public httpClient: HttpClient,
    public errorMessageItems: RayonsoftErrorMessageItems,
    public layoutSharedService: LayoutSharedService
  ) {
      this.navigateToErrorPage = false;
      this.errorMessages = this.errorMessageItems.getAll();
  }
  resetLocalStorage() {
    localStorage.removeItem('Errorpage');
  }
  // On API failure
  onAPIFailure(errCode, errorInfo, type) {
    this.resetLocalStorage();

    const data = {
      Message: {
        code: errCode
      }
    }
    this.onSuccessVerifyErrorMessages(data, errorInfo, type);
  }

  onSuccessCheckErrorFromAPI(res) {
    this.resetLocalStorage();
    const errorData = [];
    if(res.length > 0) {
      res.map(li => {
        if(!!li.errorDesc && li.errorDesc !== null && li.errorDesc !== '') {
            const errorDataFormat = {
              NotifyParam: 'alert-danger',
              NotifyBackgroundColor: 'bg-danger',
              NotifyType: 'solid',
              Message: li.errorDesc,
              Id: Math.floor(Math.random() * 105)
            };
            errorData.push(errorDataFormat);
        }
      });
    }
    return errorData;
  }
  onSuccessVerifyErrorMessages(data, errorInfo, type) {
      this.resetLocalStorage();
      const errorData = [];
      if(!!data.Message && data.Message !== null) {
        const message = data.Message;
        const filteredList = this.errorMessages.filter(em => em.Code === message.code);
        if(!!filteredList && filteredList!== null && filteredList.length > 0) {
          const NotifyTypeForConst = filteredList[0].ErrorType;
          switch (NotifyTypeForConst) {
            case NotificationsDisplayType.ErrorPage:
              this.navigateToErrorPage = true;
              filteredList[0].ErrorInfo = errorInfo;
              filteredList[0].ErrorPageTypes = type;
              sessionStorage.setItem('Errorpage', JSON.stringify(filteredList[0]));
              this.layoutSharedService.navigateInApp(appUrlRoutings.errorPage);
              break;
              case NotificationsDisplayType.Notification:
              if(filteredList[0].NotifyFormat === NotificationsType.solid) {
                const errorDataFormat = {
                  NotifyParam: 'alert-' + filteredList[0].NotifyFormatColor,
                  NotifyBackgroundColor: 'color-bg-' + filteredList[0].NotifyFormatColor,
                  NotifyType: NotificationsType.solid,
                  Message: filteredList[0].Message,
                  Id: Math.floor(Math.random() * 103)
                };
                errorData.push(errorDataFormat);
              } else if(filteredList[0].NotifyFormat === NotificationsType.notifyAlert) {
                const errorDataFormat = {
                  NotifyParam: 'alert-' + filteredList[0].NotifyFormatColor,
                  NotifyBackgroundColor: 'color-bg-' + filteredList[0].NotifyFormatColor,
                  NotifyType: NotificationsType.notifyAlert,
                  Message: filteredList[0].Message,
                  Url: filteredList[0].Url,
                  Id: Math.floor(Math.random() * 103)
                };
                errorData.push(errorDataFormat);
              }
              break;
          }
        }
      }
      return errorData;
  }
}
