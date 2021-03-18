import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { ErrorMessageService } from 'src/app/layout-shared/services/error-message.service';
import { RayonsoftErrorMessageItems, ErrorMessageAPiCodes } from 'src/app/layout-shared/services/error-message.constant';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {

  notAuthDetails: any;
  constructor(public layoutSharedService: LayoutSharedService,
              public errorMessageService: ErrorMessageService,
              public errorMessageItems: RayonsoftErrorMessageItems) {
                const errorList = this.errorMessageItems.getAll();
                const filterByNonAuth = errorList.filter(em => em.Code === ErrorMessageAPiCodes.NOTAUTH);
                this.notAuthDetails = filterByNonAuth[0];
              }

  ngOnInit() {
  }


}
