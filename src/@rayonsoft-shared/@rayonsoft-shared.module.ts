import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSharedModule } from './components/angular-shared/angular-shared.module';
import { HttpLoaderModule } from './components/http-loader/http-loader.module';
import { LazyLoaderModule } from './components/lazy-loader/lazy-loader.module';
import { AppHttpInterceptor } from './services/app-interceptor.service';
import { InitialAppSpinnerService } from './services/initial-app-spinner.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgLineStyleComponent } from './components/svg-line-style/svg-line-style.component';
import { SvgGridStyleComponent } from './components/svg-grid-style/svg-grid-style.component';
import { PageClipComponent } from './components/page-clip/page-clip.component';
import { GlobalAuthService } from './services/auth.service';
@NgModule({
  exports: [
    AngularSharedModule,
    HttpLoaderModule,
    LazyLoaderModule,
    SvgLineStyleComponent,
    SvgGridStyleComponent,
    PageClipComponent,
    BreadcrumbComponent
  ],
  declarations: [BreadcrumbComponent,
    SvgLineStyleComponent,
    SvgGridStyleComponent,
    PageClipComponent],
  imports: [
    CommonModule,
    AngularSharedModule,
    HttpLoaderModule,
    LazyLoaderModule,
  ],
  providers: [ InitialAppSpinnerService, AppHttpInterceptor, GlobalAuthService]
})
export class RayonsoftSharedModule { }
