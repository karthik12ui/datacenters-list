import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NavbarMenu } from '../navbar.model';
import { NavbarMenuItems } from '../navbar.items';

@Injectable()
export class SideNavbarService {
    pageContent: any;
    constructor(
      public httpClient: HttpClient,
      private location:Location,
      private router:Router
    ) {

    }

    public getSidenavMenuItems():Array<NavbarMenu> {
        return NavbarMenuItems;
    }
    public expandActiveSubMenu(menu:Array<NavbarMenu>){
        const url = this.location.path();
        const routerLink = decodeURIComponent(url);
        const activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if(activeMenuItem[0]){
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId !== 0) {
                const parentMenuItem = menu.filter(item => item.id === menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    public toggleMenuItem(menuId){
        const menuItem = document.getElementById('menu-item-'+menuId);
        const subMenu = document.getElementById('sub-menu-'+menuId);
        if(subMenu){
            if(subMenu.classList.contains('show')){
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else{
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }

    public closeOtherSubMenus(menu:Array<NavbarMenu>, menuId){
        const currentMenuItem = menu.filter(item => item.id === menuId)[0];
        menu.forEach(item => {
            if((item.id !== menuId && item.parentId === currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId) ){
                const subMenu = document.getElementById('sub-menu-'+item.id);
                const menuItem = document.getElementById('menu-item-'+item.id);
                if(subMenu){
                    if(subMenu.classList.contains('show')){
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    }

    public closeAllSubMenus(){
        NavbarMenuItems.forEach(item => {
            const subMenu = document.getElementById('sub-menu-'+item.id);
            const menuItem = document.getElementById('menu-item-'+item.id);
            if(subMenu){
                if(subMenu.classList.contains('show')){
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    }
}
