import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { DashboardService } from '../dashboard.service';
import { viewListConst } from './view-list.constant';
import { TiteListModel } from './view-list.model';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  @ViewChild('viewDetail') viewDetail;
  pageContent: any;
  title = new Array<TiteListModel>();
  modelDetails =  new TiteListModel();
  constructor(public dashboardService: DashboardService,
    public layoutSharedService: LayoutSharedService,
    private dialog: MatDialog) {
    this.pageContent = this.dashboardService.pageContent.strategyAndConsult;
    this.appendId();
  }

  ngOnInit() {
  }

  appendId() {
    const list = viewListConst.tile;
    this.title = new Array<TiteListModel>();
    list.forEach((li, index) => {
      const tile = new TiteListModel()
       tile.id = index;
       tile.bgColor = li.bgColor ? li.bgColor : null;
       tile.text = li.text ? li.text : null;
       tile.icon = li.icon ? li.icon : null;
       tile.title = li.title ? li.title : null;
       tile.region = li.region ? li.region : null;
       tile.location = li.location ? li.location : null;
       tile.zones = li.zones ? li.zones : null;
       tile.usage = li.usage ? li.usage : null;
       tile.content = li.content ? li.content : null;
       this.title.push(tile);
    });
  }

  viewDetailsList(item) {
    this.modelDetails = item;
    this.openDialog(this.viewDetail);
  }

  viewDetailsInPage() {
    this.closeDialog();
    this.dashboardService.setServerInLocalSession(this.modelDetails);
    const link = '/dashboard/view-summary';
    this.layoutSharedService.navigateInApp(link);
  }
  // ========================================================================================
// Open Dialog
// ========================================================================================
openDialog(templateRef: TemplateRef<any>) {
  this.dialog.open(templateRef, { disableClose: true });
}

closeDialog() {
  this.dialog.closeAll();
}
}
