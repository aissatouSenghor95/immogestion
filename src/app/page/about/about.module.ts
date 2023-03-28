import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team/team.component';
import { ContactaboutComponent } from './contactabout/contactabout.component';
import { AventureComponent } from './aventure/aventure.component';
import { GalleryaboutComponent } from './galleryabout/galleryabout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    TeamComponent,
    ContactaboutComponent,
    AventureComponent,
    GalleryaboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
