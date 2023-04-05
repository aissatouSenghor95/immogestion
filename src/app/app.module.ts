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
import { NavComponent } from './page/DashHome/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './page/DashHome/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardUserComponent } from './page/dashbUser/dashboard-user/dashboard-user.component';
import { NavUserComponent } from './page/dashbUser/nav-user/nav-user.component';
import { DashboardPropComponent } from './page/dashPropr/dashboard-prop/dashboard-prop.component';
import { NavPropComponent } from './page/dashPropr/nav-prop/nav-prop.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardDetailsProComponent } from './page/dashboardDetailsProp/dashboard-details-pro/dashboard-details-pro.component';
import { NavDetailsComponent } from './page/dashboardDetailsProp/nav-details/nav-details.component';
import { DashboardUserPaiementComponent } from './page/dashboardUserPaie/dashboard-user-paiement/dashboard-user-paiement.component';
import { NavPaiementComponent } from './page/dashboardUserPaie/nav-paiement/nav-paiement.component';
import {MatSelectModule} from '@angular/material/select';
import { DashboardUserFactComponent } from './page/dashboardUserFac/dashboard-user-fact/dashboard-user-fact.component';
import { NavFactureComponent } from './page/dashboardUserFac/nav-facture/nav-facture.component';
import { NavProfilUserComponent } from './page/dashProfilUser/nav-profil-user/nav-profil-user.component';
import { DashboardProfilUserComponent } from './page/dashProfilUser/dashboard-profil-user/dashboard-profil-user.component';
import { NavEditUserComponent } from './page/EditUserProfil/nav-edit-user/nav-edit-user.component';
import { EditUserComponent } from './page/EditUserProfil/edit-user/edit-user.component';
import { DashboardAddUserComponent } from './page/dashAddUser/dashboard-add-user/dashboard-add-user.component';
import { NavAddUserComponent } from './page/dashAddUser/nav-add-user/nav-add-user.component';
import { DashboardNotifiComponent } from './page/dashNotifi/dashboard-notifi/dashboard-notifi.component';
import { NavNotifiComponent } from './page/dashNotifi/nav-notifi/nav-notifi.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBienComponent,
    DetailPropertyComponent,
    FaqComponent,
    NavComponent,
    DashboardComponent,
    DashboardUserComponent,
    NavUserComponent,
    DashboardPropComponent,
    NavPropComponent,
    DashboardDetailsProComponent,
    NavDetailsComponent,
    DashboardUserPaiementComponent,
    NavPaiementComponent,
    DashboardUserFactComponent,
    NavFactureComponent,
    NavProfilUserComponent,
    DashboardProfilUserComponent,
    NavEditUserComponent,
    EditUserComponent,
    DashboardAddUserComponent,
    NavAddUserComponent,
    DashboardNotifiComponent,
    NavNotifiComponent,
    
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
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,MatSelectModule,
    MatMenuModule,MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,NgxPaginationModule

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
