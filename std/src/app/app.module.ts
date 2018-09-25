import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { SharedModule } from 'shared';
import { CoreModule, StartupService,CCore } from 'core'
import { RoleFunctionManager } from "../business/RoleFunctionManager";
import { HomeManager} from "../business/HomeManager";


export function StartupServiceFactory(
    startupService: StartupService
): Function {
    return () => {
        return startupService.loadBaseConfig();
    };
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        IonicStorageModule.forRoot({
            name: '__mydb',
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        }),
        IonicModule.forRoot({
            backButtonText: '',
            mode: 'ios'
        }),
        CoreModule,
        SharedModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        StartupService,
        CCore,
        RoleFunctionManager,
        HomeManager,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
