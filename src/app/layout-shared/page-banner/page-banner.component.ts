import { Component, OnInit, Input } from '@angular/core';
import { NavbarMenuItems } from '../navbar/navbar.items';
import { LayoutSharedService } from '../services/layout-shared.service';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() mainTitle: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() image: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() enableQuickNav: string;
  @Input() gridStrokeColor: string;
  @Input() lineStrokeColor: string;
  parentMenu: any;
  constructor(public layoutSharedService: LayoutSharedService) { }

  ngOnInit() {
    this.parentMenu = NavbarMenuItems.filter(li => li.parentId === 0);
  }

  navigateInApp(link) {
    if(!!link && link !== null && link !== '') {
      this.layoutSharedService.navigateInApp(link)
    }
  }

}
