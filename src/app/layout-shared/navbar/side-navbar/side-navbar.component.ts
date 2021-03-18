import { Component, OnInit, Input } from '@angular/core';
import { SideNavbarService } from './side-navbar.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  @Input() menuItems;
  @Input() menuParentId;
  parentMenu:Array<any>;
  constructor(private sidenavMenuService: SideNavbarService ) { }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }

  onClick(menuId){
    this.sidenavMenuService.toggleMenuItem(menuId);
    this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
  }

}
