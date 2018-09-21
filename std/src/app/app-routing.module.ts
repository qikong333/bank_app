import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: '../pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: '../pages/member/login.module#LoginPageModule' },
   { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  {
      path:'',
      redirectTo:'/app',
      pathMatch:'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
