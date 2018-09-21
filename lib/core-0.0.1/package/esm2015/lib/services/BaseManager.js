/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CCore } from './CCore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from "../config.service";
/** @type {?} */
export const environment = {
    apiBase: 'http://bank.532t.com'
};
export class BaseManager {
    /**
     * @param {?} http
     * @param {?} cCore
     * @param {?} configService
     */
    constructor(http, cCore, configService) {
        this.http = http;
        this.cCore = cCore;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    new() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let ret = yield this.list({ id: '-1' });
            for (const field of Object.keys(ret['data'])) {
                if (field.indexOf('ID') != -1) {
                    ret['data'][field] = ret['data'][field] || '';
                }
            }
            return ret;
        });
    }
    /**
     * @return {?}
     */
    getWsUrl() {
        /** @type {?} */
        var baseurl = (localStorage.getItem('hostUrl') || environment.apiBase);
        return "ws://" + baseurl.replace("http://", "") + ":8089/android";
    }
    /**
     * @param {?} param
     * @return {?}
     */
    page(param) {
        return this.post(this.getPathByEntityName() + "/page", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    save(param) {
        return this.post(this.getPathByEntityName() + "/save", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    get(param) {
        return this.post(this.getPathByEntityName() + "/get", { 'id': param });
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getBy(param) {
        return this.post(this.getPathByEntityName() + "/getby", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    list(param) {
        return this.post(this.getPathByEntityName() + "/list", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    delete(param) {
        return this.post(this.getPathByEntityName() + "/delete", { "id": param });
    }
    /**
     * @param {?} param
     * @return {?}
     */
    has(param) {
        return this.post(this.getPathByEntityName() + "/has", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    sum(param) {
        return this.post(this.getPathByEntityName() + "/sum", param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    count(param) {
        return this.post(this.getPathByEntityName() + "/count", param);
    }
    /**
     * @return {?}
     */
    getPathByEntityName() {
        return this.getEntityName().toLowerCase();
    }
    /**
     * @return {?}
     */
    getEntityName() {
        return this.constructor.name.replace("Manager", "");
    }
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} loading
     * @return {?}
     */
    post(url, body, loading = false) {
        url = this.configService.getApiBase() + '/service/' + url;
        return this.http.post(url, body, { withCredentials: true }).toPromise().then(res => {
            return res;
        }).catch(err => {
            switch (err.status) {
                case 400:
                    this.cCore.toast('请求参数错误！');
                    break;
                case 401:
                    this.cCore.toast('您没有权限！');
                    break;
                case 403:
                    this.cCore.toast('服务器禁止访问！');
                    break;
                case 404:
                    this.cCore.toast('相关资源找不到！');
                    break;
                case 500:
                    this.cCore.toast('服务器出错啦！');
                    break;
                case 503:
                    this.cCore.toast('服务器离家出走啦！');
                    break;
                default:
                    break;
            }
        });
    }
}
BaseManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BaseManager.ctorParameters = () => [
    { type: HttpClient },
    { type: CCore },
    { type: ConfigService }
];
if (false) {
    /** @type {?} */
    BaseManager.prototype.http;
    /** @type {?} */
    BaseManager.prototype.cCore;
    /** @type {?} */
    BaseManager.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL0Jhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRWhELGFBQWEsV0FBVyxHQUFHO0lBQ3ZCLE9BQU8sRUFBRSxzQkFBc0I7Q0FDbEMsQ0FBQztBQUdGLE1BQU07Ozs7OztJQUdGLFlBQW1CLElBQWdCLEVBQVEsS0FBWSxFQUFTLGFBQTRCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7S0FDM0Y7Ozs7SUFDSyxHQUFHOzs7WUFDTCxJQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pEO2FBQ0o7WUFDRCxPQUFPLEdBQUcsQ0FBQzs7S0FDZDs7OztJQUNELFFBQVE7O1FBQ0osSUFBSSxPQUFPLEdBQUcsQ0FBQyxZ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b0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUM1QixNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFDNUIsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQzNCLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUM3QixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtTQUNKLENBQUMsQ0FBQzs7OztZQWxGVixVQUFVOzs7O1lBUEYsVUFBVTtZQUZWLEtBQUs7WUFHTixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NvcmUgfSBmcm9tICcuL0NDb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gICAgYXBpQmFzZTogJ2h0dHA6Ly9iYW5rLjUzMnQuY29tJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNldXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEFwaUJhc2UoKSArICcvc2VydmljZS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBuZXcoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGF3YWl0IHRoaXMubGlzdCh7IGlkOiAnLTEnIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMocmV0WydkYXRhJ10pKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pbmRleE9mKCdJRCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbJ2RhdGEnXVtmaWVsZF0gPSByZXRbJ2RhdGEnXVtmaWVsZF0gfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGdldFdzVXJsKCkge1xyXG4gICAgICAgIHZhciBiYXNldXJsID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3N0VXJsJykgfHwgZW52aXJvbm1lbnQuYXBpQmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIGJhc2V1cmwucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIikgKyBcIjo4MDg5L2FuZHJvaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3BhZ2VcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZShwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9zYXZlXCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGdldChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9nZXRcIiwgeyAnaWQnOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGdldEJ5KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2dldGJ5XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGxpc3QocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvbGlzdFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvZGVsZXRlXCIsIHsgXCJpZFwiOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGhhcyhwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9oYXNcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc3VtKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3N1bVwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBjb3VudChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9jb3VudFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXRoQnlFbnRpdHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eU5hbWUoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGl0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZS5yZXBsYWNlKFwiTWFuYWdlclwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRBcGlCYXNlKCkgKyAnL3NlcnZpY2UvJyArIHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfor7fmsYLlj4LmlbDplJnor6/vvIEnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ+aCqOayoeacieadg+mZkO+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfmnI3liqHlmajnpoHmraLorr/pl67vvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgn55u45YWz6LWE5rqQ5om+5LiN5Yiw77yBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ+acjeWKoeWZqOWHuumUmeWVpu+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfmnI3liqHlmajnprvlrrblh7rotbDllabvvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==