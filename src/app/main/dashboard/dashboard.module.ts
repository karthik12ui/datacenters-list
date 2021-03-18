import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ViewListComponent } from './view-list/view-list.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { DashboardService } from './dashboard.service';
import { RouterModule } from '@angular/router';
import { ViewSummaryComponent } from './view-summary/view-summary.component';
import { SummaryTableComponent } from './view-summary/summary-table/summary-table.component';
export const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
          path: '', redirectTo: 'view-list', pathMatch: 'full'
        },
        {
                path: 'view-list',
                component: ViewListComponent,
                data: {breadcrumb: 'View List'},
        },
        {
          path: 'view-summary',
          component: ViewSummaryComponent,
          data: {breadcrumb: 'View Summary'},
  },
    ],
    resolve:{

      data: DashboardService
    }
  }
];
@NgModule({
  declarations: [ViewListComponent,
    ViewSummaryComponent,
    SummaryTableComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    RayonsoftSharedModule,
    LayoutSharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [DashboardService]
})
export class DashboardModule { }
