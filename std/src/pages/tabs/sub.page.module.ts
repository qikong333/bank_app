import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SubPage } from "./sub.page";
import { DictManager } from "../../business/DictManager";
import { SubPageRoutingModule } from "./sub.router.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { SharedModule } from 'shared';

@NgModule({
    declarations: [
        SubPage
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        SubPageRoutingModule
    ],
    entryComponents : [],
    providers : [ DictManager ]
})
export class SubPageModule {}
