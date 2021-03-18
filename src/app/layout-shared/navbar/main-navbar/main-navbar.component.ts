import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from '../../services/layout-shared.service';
import { NavbarMenuItems } from '../navbar.items';
import { NavbarMenu } from '../navbar.model';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public menuItems: any;
  constructor(public layoutSharedService: LayoutSharedService) {

    this.transformMainMenu(NavbarMenuItems)
   }

  ngOnInit() {
  }

  transformMainMenu(menuItems) {
    menuItems.forEach(item => {
        if(item.hasSubMenu) {
          const subMenu = [];
          menuItems.forEach(subItem => {
            if(item.id === subItem.parentId) {
              subMenu.push(subItem);
            }
          })
          item.subChildList = subMenu
        }
    })
    this.menuItems = menuItems;
  }
  openMegaMenu(){
    const pane = document.getElementsByClassName('cdk-overlay-pane');
    // tslint:disable-next-line:only-arrow-functions
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }
    });
  }

  navigateInApp(link) {
    this.layoutSharedService.navigateInApp(link);
  }
}
