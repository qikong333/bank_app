import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule} from '@ngx-translate/core';

import { LoginComponent } from "./login";
import { MemberManager,CCore } from "core";
import { WebSocketService } from "../../business/WebSocketService";
import { CDict } from "../../business/CDict";
import { RoleFunctionManager } from "../../business/RoleFunctionManager";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule
    ],
    declarations: [LoginComponent],
    providers : [
        WebSocketService,
        MemberManager,
        RoleFunctionManager,
        CCore,
        CDict
    ]
})
export class LoginModule {}

