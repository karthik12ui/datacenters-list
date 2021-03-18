import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LayoutSharedModule } from '../layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';


export const routes = [
  {
    path: '',
    component: SharedComponent, children: [
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
        data: {breadcrumb: 'Page not found'},
      },
      {
        path: 'error-page',
        component: ErrorPageComponent,
        data: {breadcrumb: 'error-page'},
      },
      {
        path: 'not-authorized',
        component: NotAuthorizedComponent,
        data: {breadcrumb: 'Not Authorized'},
      }
    ]
  }
];
@NgModule({
  declarations: [SharedComponent,
    NotAuthorizedComponent,
    ErrorPageComponent,
    PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RayonsoftSharedModule,
    LayoutSharedModule
  ],
  providers:[]
})
export class SharedModule { }
