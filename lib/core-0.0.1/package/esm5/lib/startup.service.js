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
var ROOT_CONFIG = './assets/json/config.json';
var StartupService = /** @class */ (function () {
    function StartupService(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    StartupService.prototype.loadBaseConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(ROOT_CONFIG).subscribe(function (res) {
                _this.configService.setApiBase(res.apiBase);
                _this.configService.setWsUrl(res.wsUrl);
                resolve(res);
            }, function (err) {
                resolve(null);
            });
        });
    };
    StartupService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    StartupService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ StartupService.ngInjectableDef = i0.defineInjectable({ factory: function StartupService_Factory() { return new StartupService(i0.inject(i1.HttpClient), i0.inject(i2.ConfigService)); }, token: StartupService, providedIn: "root" });
    return StartupService;
}());
export { StartupService };
if (false) {
    /** @type {?} */
    StartupService.prototype.httpClient;
    /** @type {?} */
    StartupService.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFydHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFakQsSUFBTSxXQUFXLEdBQUcsMkJBQTJCLENBQUM7O0lBTTlDLHdCQUNVLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGtCQUFhLEdBQWIsYUFBYTtLQUNuQjs7OztJQUVKLHVDQUFjOzs7SUFBZDtRQUFBLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDeEMsVUFBQyxHQUFRO2dCQUNQLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZCxFQUNELFVBQUMsR0FBUTtnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZixDQUNGLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTtnQkFDVixhQUFhOzs7eUJBRnRCOztTQVNhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFJPT1RfQ09ORklHID0gJy4vYXNzZXRzL2pzb24vY29uZmlnLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkQmFzZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwQ2xpZW50LmdldChST09UX0NPTkZJRykuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldEFwaUJhc2UocmVzLmFwaUJhc2UpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFdzVXJsKHJlcy53c1VybCk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==