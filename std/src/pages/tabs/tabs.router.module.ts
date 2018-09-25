
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs';
import { HomeComponent } from './home';
import { SubComponent } from "./sub";
import { RankListComponent } from '../rank/list';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'sub-page/:pageID',
                component: SubComponent,
                outlet: 'sub-page'
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomeComponent
            },
            {
                path: 'rank',
                outlet: 'rank',
                component: RankListComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabsRoutingModule {}
