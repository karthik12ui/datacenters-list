import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SideNavbarComponent } from './navbar/side-navbar/side-navbar.component';
import { MainNavbarComponent } from './navbar/main-navbar/main-navbar.component';
import { NotificationAlertsComponent } from './notification-alerts/notification-alerts.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutSharedService } from './services/layout-shared.service';
import { ErrorMessageService } from './services/error-message.service';
import { UserMenuComponent } from './tool-bar/user-menu/user-menu.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ChildMenuItemsComponent } from './navbar/main-navbar/child-menu-items/child-menu-items.component';
import { SideNavbarService } from './navbar/side-navbar/side-navbar.service';
import { JoinOurComponent } from './join-our/join-our.component';
import { ImageContentComponent } from './sections/image-content/image-content.component';
import { RayonsoftErrorMessageItems } from './services/error-message.constant';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    SideNavbarComponent,
    MainNavbarComponent,
    NotificationAlertsComponent,
    PageBannerComponent,
    ToolBarComponent,
    UserMenuComponent,
    FooterComponent,
    SocialIconsComponent,
    ChildMenuItemsComponent,
    JoinOurComponent,
    ImageContentComponent
  ],
  providers: [
    LayoutSharedService,
    ErrorMessageService,
    SideNavbarService,
    RayonsoftErrorMessageItems
  ],
  imports: [
    CommonModule,
    RayonsoftSharedModule
  ],
  exports: [
    AnnouncementsComponent,
    SideNavbarComponent,
    MainNavbarComponent,
    NotificationAlertsComponent,
    PageBannerComponent,
    ToolBarComponent,
    UserMenuComponent,
    FooterComponent,
    SocialIconsComponent,
    ChildMenuItemsComponent,
    JoinOurComponent,
    ImageContentComponent
  ],
})
export class LayoutSharedModule { }
