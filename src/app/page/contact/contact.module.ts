import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    ContactComponent,
    FormulaireComponent,
    AdresseComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatCardModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule { }
