import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChangePasswordComponent } from './changepassword';
import { MemberManager, CCore } from 'core';
const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  }
];
@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    MemberManager,
    CCore
]
})
export class ChangePasswordModule {}
