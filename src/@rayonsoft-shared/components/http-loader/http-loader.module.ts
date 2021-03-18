import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderComponent } from './http-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HttpLoaderComponent],
  exports: [HttpLoaderComponent]
})
export class HttpLoaderModule { }
