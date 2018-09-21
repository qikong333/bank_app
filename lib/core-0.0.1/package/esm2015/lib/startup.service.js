/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
/** @type {?} */
const ROOT_CONFIG = './assets/json/config.json';
export class StartupService {
    /**
     * @param {?} httpClient
     * @param {?} configService
     */
    constructor(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    loadBaseConfig() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(ROOT_CONFIG).subscribe((res) => {
                this.configService.setApiBase(res.apiBase);
                this.configService.setWsUrl(res.wsUrl);
                resolve(res);
            }, (err) => {
                resolve(null);
            });
        });
    }
}
StartupService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
StartupService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ StartupService.ngInjectableDef = i0.defineInjectable({ factory: function StartupService_Factory() { return new StartupService(i0.inject(i1.HttpClient), i0.inject(i2.ConfigService)); }, token: StartupService, providedIn: "root" });
if (false) {
    /** @type {?} */
    StartupService.prototype.httpClient;
    /** @type {?} */
    StartupService.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFydHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFakQsTUFBTSxXQUFXLEdBQUcsMkJBQTJCLENBQUM7QUFLaEQsTUFBTTs7Ozs7SUFDSixZQUNVLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGtCQUFhLEdBQWIsYUFBYTtLQUNuQjs7OztJQUVKLGNBQWM7UUFDWixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDeEMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2QsRUFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmLENBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUNWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFJPT1RfQ09ORklHID0gJy4vYXNzZXRzL2pzb24vY29uZmlnLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkQmFzZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwQ2xpZW50LmdldChST09UX0NPTkZJRykuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldEFwaUJhc2UocmVzLmFwaUJhc2UpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFdzVXJsKHJlcy53c1VybCk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==