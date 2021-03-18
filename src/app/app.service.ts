import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
    constructor() {

    }

    getEnvUrl() {
        const appHost = ' http://localhost:4200/'

        const urls = {
            baseUrl: appHost
        }

        return urls
    }

    appEndPoint() {
        const endPoints = {
            userInfodata: this.getEnvUrl().baseUrl + 'localstub/data/userinfo.json',
            getAdmindata: this.getEnvUrl().baseUrl + 'localstub/data/admin.json',
            // API http://localhost:3000/api/account/login
            loginAPI: this.getEnvUrl().baseUrl + 'api/account/login',
            testAPI: this.getEnvUrl().baseUrl + 'api/account/test',
            testServerList: this.getEnvUrl().baseUrl + 'localstub/data/serverlist.json',
        }
        return endPoints;
    }
}