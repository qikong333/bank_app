import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from "./sub";
import { ChangePasswordComponent } from './../member/changepassword';

const routes: Routes = [
  {
    path: '',
    component: SubComponent
  },
  {
    path: 'mine/modify',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubRoutingModule {}
