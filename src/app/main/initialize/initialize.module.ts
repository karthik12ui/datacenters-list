import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitializeComponent } from './initialize.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { RouterModule } from '@angular/router';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';

export const routes = [
  {
    path: '',
    component: InitializeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [InitializeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RayonsoftSharedModule,
    LayoutSharedModule
  ]
})
export class InitializeModule { }
