import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

import { SubPage } from "./sub.page";

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'sub-page/:pageID',
                component: SubPage,
                outlet: 'sub-page'
            },{
                path: 'sub-page/:pageID',
                component: SubPage,
                outlet: 'sub-page'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
