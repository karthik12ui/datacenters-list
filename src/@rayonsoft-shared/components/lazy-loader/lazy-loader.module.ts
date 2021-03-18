import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderComponent } from './lazy-loader.component';
import { AngularSharedModule } from '../angular-shared/angular-shared.module';

@NgModule({
  imports: [
    CommonModule,
    AngularSharedModule
  ],
  declarations: [LazyLoaderComponent],
  exports: [LazyLoaderComponent]
})
export class LazyLoaderModule { }
