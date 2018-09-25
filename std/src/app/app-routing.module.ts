import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path:'',
      redirectTo:'/login',
      pathMatch:'full'
  },
  { path: 'app', loadChildren: '../pages/tabs/tabs.module#TabsModule' },
  { path: 'login', loadChildren: '../pages/member/login.module#LoginModule' },
  { path: 'rank', loadChildren: '../pages/rank/rank.module#RankModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
