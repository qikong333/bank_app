import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { CDict} from "../../business/CDict";
import { DictManager} from "../../business/DictManager";
import { CCore} from "../../business/CCore";
import { WebSocketService} from "../../business/WebSocketService";
import { SubPageModule } from "./sub.page.module";


import { NamedOutletDirective } from "../../directives/named.outlet";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        SubPageModule
    ],
    declarations: [TabsPage,NamedOutletDirective],
    providers : [CCore,CDict,DictManager,WebSocketService]
})
export class TabsPageModule {}
