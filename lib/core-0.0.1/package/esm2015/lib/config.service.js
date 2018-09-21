/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfigService {
    constructor() { }
    /**
     * @param {?} apiBase
     * @return {?}
     */
    setApiBase(apiBase) {
        this._apiBase = apiBase;
    }
    /**
     * @return {?}
     */
    getApiBase() {
        return this._apiBase;
    }
    /**
     * @param {?} wsUrl
     * @return {?}
     */
    setWsUrl(wsUrl) {
        this._wsUrl = wsUrl;
    }
    /**
     * @return {?}
     */
    getWsUrl() {
        return this._wsUrl;
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype._apiBase;
    /** @type {?} */
    ConfigService.prototype._wsUrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNO0lBSUosaUJBQWdCOzs7OztJQUVULFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzs7OztJQUduQixVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUFHaEIsUUFBUSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBR2YsUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzs7OztZQXRCdEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfYXBpQmFzZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3dzVXJsIDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzZXRBcGlCYXNlKGFwaUJhc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FwaUJhc2UgPSBhcGlCYXNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFwaUJhc2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlCYXNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFdzVXJsKHdzVXJsKTogdm9pZCB7XHJcbiAgICB0aGlzLl93c1VybCA9IHdzVXJsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdzVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fd3NVcmw7XHJcbiAgfVxyXG59XHJcbiJdfQ==