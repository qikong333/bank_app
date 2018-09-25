import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SubComponent } from "./sub";
import { ChangePasswordComponent } from './../member/changepassword';
import { DictManager } from "../../business/DictManager";
import { SubRoutingModule } from "./sub.router.module";
import { SharedModule } from 'shared';
import { CCore,MemberManager } from 'core';

@NgModule({
    declarations : [
        SubComponent,
        ChangePasswordComponent
      ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        SubRoutingModule
    ],
    entryComponents : [],
    providers : [ DictManager,CCore,MemberManager ]
})

export class SubModule {} 
