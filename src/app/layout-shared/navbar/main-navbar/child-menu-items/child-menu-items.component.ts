import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChildMenuItemsTitles } from './child-menu-constant';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';

@Component({
  selector: 'app-child-menu-items',
  templateUrl: './child-menu-items.component.html',
  styleUrls: ['./child-menu-items.component.scss']
})
export class ChildMenuItemsComponent implements OnInit {
  @Input() subChildMenu;
  @Input() menuType;
  @Input() parentMenuId;
  displayBannerTitle: any;
  @ViewChild('childMenu', {static: true}) public childMenu;
  constructor(public layoutSharedService: LayoutSharedService) { }

  ngOnInit() {
    const lengthOfMenu = this.subChildMenu.length;
    if(lengthOfMenu > 0) {
      const getFlexVlaue = this.flexValueForLength(lengthOfMenu);
      this.subChildMenu.forEach(item => {
        item.FlexValue = getFlexVlaue;
      });
    }
    if(!! this.parentMenuId && this.parentMenuId !== null) {
      const getBannerTitleById = ChildMenuItemsTitles.filter(li => li.id === this.parentMenuId);
      if(getBannerTitleById.length>0) {
        this.displayBannerTitle = getBannerTitleById[0];
      }
    }
  }

  navigateInApp(id, link) {
    console.log(link, 'link');
    if(!!link && link !== null && link !== '') {
      this.layoutSharedService.navigateInApp(link);
    }
  }

  flexValueForLength(length) {
    let flexvalue: any;
    switch (length) {
      case 2:
      flexvalue = '50';
      break;
      case 3:
        flexvalue = '33.33';
      break;
      case 4:
        flexvalue = '25';
      break;
      case 5:
        flexvalue = '20';
      break;
      case 2:
        flexvalue = '16.6';
      break;
      default:
        flexvalue = '100';
    }
    return flexvalue;
  }

}
