import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './property/property.component';
import { SharedModule } from '../shared/shared.module';
import { TypePropertyComponent } from './type-property/type-property.component';
import { MatTabsModule } from '@angular/material/tabs';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    AboutComponent,
    PropertyComponent,
    TypePropertyComponent,
    GalleryComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
