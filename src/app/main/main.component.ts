import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SideNavbarService } from '../layout-shared/navbar/side-navbar/side-navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav:any;
  public sidenavMenuItems: any;
  public showBackToTop: boolean
  constructor(public router: Router,
    private sidenavMenuService: SideNavbarService ) {
    this.showBackToTop = false;
    this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
   }

  ngOnInit() {
  }

  @HostListener('window:scroll') onWindowScroll() {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
  }

  public scrollToTop(){
    const scrollDuration = 200;
    const scrollStep = -window.pageYOffset  / (scrollDuration / 20);
    const scrollInterval = setInterval(()=>{
      if(window.pageYOffset !== 0){
         window.scrollBy(0, scrollStep);
      }
      else{
        clearInterval(scrollInterval);
      }
    },10);
    if(window.innerWidth <= 768){
      setTimeout(() => { window.scrollTo(0,0) });
    }
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidenav.close();
        setTimeout(() => {
          window.scrollTo(0,0);
        });
      }
    });
  }
}
