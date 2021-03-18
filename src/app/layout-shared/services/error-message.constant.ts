import { Injectable } from '@angular/core';
import { NotificationsDisplayType, NotificationsType, NotificationsFormatColor } from '../notification-alerts/notification-alert.enums';


export const APIResCodes = {
    success: '0000'
}
export const ErrorPageTypes = {
        constMessage: 'constMessage',
        failureError: 'failureError',
        successError: 'successError'
}
export const ErrorMessageAPiCodes = {
    PAGENOTFOUND: 'PAGE-NOT-FOUND',
    NOTAUTH: 'NOT-AUTHORIZED',
    USERINFO: 'USER-API-ERROR'
}
const ErrorMessages = [
    {
        Code: ErrorMessageAPiCodes.PAGENOTFOUND,
        ErrorType: NotificationsDisplayType.ErrorPage,
        NotifyFormat: NotificationsType.pageNotFoundError,
        NotifyFormatColor: NotificationsFormatColor.primary,
        Message: 'We are sorry, something went wrong with your request. Page does not exists',
    },
    {
        Code: ErrorMessageAPiCodes.NOTAUTH,
        ErrorType: NotificationsDisplayType.ErrorPage,
        NotifyFormat: NotificationsType.pageNotFoundError,
        NotifyFormatColor: NotificationsFormatColor.primary,
        Message: 'We are sorry, you are not authorized to access',
    },
    {
        Code: ErrorMessageAPiCodes.USERINFO,
        ErrorType: NotificationsDisplayType.ErrorPage,
        NotifyFormat: NotificationsType.serviceError,
        NotifyFormatColor: NotificationsFormatColor.primary,
        Message: 'We are sorry, something went wrong with your request. We are unable to get logged in user info',
    },
    {
        Code: 'PF001',
        ErrorType: NotificationsDisplayType.Notification,
        NotifyFormat: NotificationsType.solid,
        NotifyFormatColor: NotificationsFormatColor.primary,
        Message: 'Welcome to Demo application',
    },
    {
        Code: 'PF002',
        ErrorType: NotificationsDisplayType.Notification,
        NotifyFormat: NotificationsType.solid,
        NotifyFormatColor: NotificationsFormatColor.success,
        Message: 'Successfully Added New form',
    },
    {
        Code: 'PF003',
        ErrorType: NotificationsDisplayType.Notification,
        NotifyFormat: NotificationsType.solid,
        NotifyFormatColor: NotificationsFormatColor.danger,
        Message: 'Something went wrong',
    }
]

export interface RayonsoftErrorMessages {
    Code: string;
    Message: string;
    ErrorType: string;
    NotifyFormat?: string;
    NotifyFormatColor?: string;
}
@Injectable()
export class RayonsoftErrorMessageItems {
    getAll():  RayonsoftErrorMessages[] {
        return ErrorMessages;
    }
}