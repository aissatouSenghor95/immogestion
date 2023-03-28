import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ImgDirective } from './img.directive';


@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ImgDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ImgDirective

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
