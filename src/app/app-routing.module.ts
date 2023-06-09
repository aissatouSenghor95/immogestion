import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassWordComponent } from './page/home/auth/forget-pass-word/forget-pass-word.component';
import { DetailPropertyComponent } from './page/detail-property/detail-property.component';
import { FaqComponent } from './page/faq/faq.component';
import { ListBienComponent } from './page/list-bien/list-bien.component';
import { NavComponent } from './page/DashHome/nav/nav.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) }, { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'forgot', component: ForgetPassWordComponent },
  { path: 'detailproperty', component: DetailPropertyComponent },
  { path: 'listebien', component: ListBienComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'dashboard', component: NavComponent },
  { path: 'contact', loadChildren: () => import('./page/contact/contact.module').then(m => m.ContactModule) },
  { path: 'about', loadChildren: () => import('./page/about/about.module').then(m => m.AboutModule) },
  { path: 'cequenousfaisons', loadChildren: () => import('./page/cequenousfaisons/cequenousfaisons.module').then(m => m.CequenousfaisonsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
