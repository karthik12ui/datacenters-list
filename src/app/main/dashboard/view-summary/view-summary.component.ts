import { Component, OnInit } from '@angular/core';
import { APIResCodes } from 'src/app/layout-shared/services/error-message.constant';
import { DashboardService } from '../dashboard.service';
import { TableListModel } from '../view-list/view-list.model';

@Component({
  selector: 'app-view-summary',
  templateUrl: './view-summary.component.html',
  styleUrls: ['./view-summary.component.scss']
})
export class ViewSummaryComponent implements OnInit {
  pageContent: any;
  apiData = new Array<TableListModel>();
  modelDetails: any;
  displayTable = false;
  constructor(public dashboardService: DashboardService) {
    this.pageContent = this.dashboardService.pageContent.strategyAndConsult;
    this.modelDetails = this.dashboardService.getServerInLocalSession();
    this.callServersList();
  }

  ngOnInit() {
  }

  callServersList() {
    const data = {
    }
    this.dashboardService.testAPI()
    .subscribe(res => {
      this.serversListSuccess(res);
    },
    err => {
      this.serversListError(err);
    })
  }

  serversListSuccess(success) {
    if(!!success.serviceStatus && !!success.serviceStatus.statusCode &&
      success.serviceStatus.statusCode === APIResCodes.success) {
       this.apiData = success.data.list;
       this.displayTable = true;
    }
  }


  serversListError(error) {

  }

}
