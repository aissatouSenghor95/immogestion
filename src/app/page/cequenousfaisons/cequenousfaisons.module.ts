import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CequenousfaisonsRoutingModule } from './cequenousfaisons-routing.module';
import { CequenousfaisonsComponent } from './cequenousfaisons.component';
import { CardComponent } from './card/card.component';
import { TeamComponent } from './team/team.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CequenousfaisonsComponent,
    CardComponent,
    TeamComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CequenousfaisonsRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class CequenousfaisonsModule { }
