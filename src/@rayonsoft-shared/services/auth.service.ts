import { Injectable, Inject } from '@angular/core';

@Injectable()
export class GlobalAuthService {
constructor(
) {
}
public setToken(token) {
    if(!!token && token !== null && token !== '') {
        localStorage.setItem('getAccess_token', token);
    }
}
public getToken() {
    const token =  localStorage.getItem('getAccess_token');
    if(!!token && token !== null && token !== '') {
       return token;
    } else {
        return null
    }
}
public deleteToken() {
    localStorage.removeItem('getAccess_token');
}
}
