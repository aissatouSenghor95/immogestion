import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './page/home/auth/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPassWordComponent } from './page/home/auth/forget-pass-word/forget-pass-word.component';
import { SignUpComponent } from './page/home/auth/sign-up/sign-up.component';
import { SharedModule } from './shared/shared.module';
import { ListBienComponent } from './page/list-bien/list-bien.component';
import { DetailPropertyComponent } from './page/detail-property/detail-property.component';
import { MatButtonModule } from '@angular/material/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FaqComponent } from './page/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    ListBienComponent,
    DetailPropertyComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    NgxBootstrapIconsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    SharedModule,
    IvyCarouselModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    LoginComponent,
    ForgetPassWordComponent,
    SignUpComponent
  ],
})
export class AppModule { }
