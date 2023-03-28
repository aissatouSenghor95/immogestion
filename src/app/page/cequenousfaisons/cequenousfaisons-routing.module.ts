import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CequenousfaisonsComponent } from './cequenousfaisons.component';

const routes: Routes = [{ path: '', component: CequenousfaisonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CequenousfaisonsRoutingModule { }
