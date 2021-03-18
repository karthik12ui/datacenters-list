import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { ErrorMessageService } from 'src/app/layout-shared/services/error-message.service';
import { RayonsoftErrorMessageItems, ErrorMessageAPiCodes } from 'src/app/layout-shared/services/error-message.constant';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  pageNotFoundDetails: any;
  constructor(public layoutSharedService: LayoutSharedService,
              public errorMessageService: ErrorMessageService,
              public errorMessageItems: RayonsoftErrorMessageItems) {
                const errorList = this.errorMessageItems.getAll();
                const filterByNonAuth = errorList.filter(em => em.Code === ErrorMessageAPiCodes.PAGENOTFOUND);
                this.pageNotFoundDetails = filterByNonAuth[0];
              }
  ngOnInit() {
  }

}
