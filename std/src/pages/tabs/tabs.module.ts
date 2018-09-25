import { CDict } from './../../business/CDict';

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsRoutingModule } from './tabs.router.module';
import { TabsComponent } from './tabs';
import { HomeModule } from './home.module';
import { WebSocketService} from "../../business/WebSocketService";
import { SubModule } from "./sub.module";
import { RankModule } from '../rank/rank.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsRoutingModule,
        HomeModule,
        SubModule,
        RankModule
    ],
    declarations: [
        TabsComponent
    ],
    providers : [
        CDict,
        WebSocketService
    ]
})
export class TabsModule {}
