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
export var environment = {
    apiBase: 'http://bank.532t.com'
};
var BaseManager = /** @class */ (function () {
    // private baseurl = this.configService.getApiBase() + '/service/';
    function BaseManager(http, cCore, configService) {
        this.http = http;
        this.cCore = cCore;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    BaseManager.prototype.new = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, ret, _b, _c, field;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.list({ id: '-1' })];
                    case 1:
                        ret = _d.sent();
                        try {
                            for (_b = tslib_1.__values(Object.keys(ret['data'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                                field = _c.value;
                                if (field.indexOf('ID') != -1) {
                                    ret['data'][field] = ret['data'][field] || '';
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    BaseManager.prototype.getWsUrl = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var baseurl = (localStorage.getItem('hostUrl') || environment.apiBase);
        return "ws://" + baseurl.replace("http://", "") + ":8089/android";
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.page = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/page", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.save = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/save", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.get = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/get", { 'id': param });
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.getBy = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/getby", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.list = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/list", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.delete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/delete", { "id": param });
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.has = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/has", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.sum = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/sum", param);
    };
    /**
     * @param {?} param
     * @return {?}
     */
    BaseManager.prototype.count = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.post(this.getPathByEntityName() + "/count", param);
    };
    /**
     * @return {?}
     */
    BaseManager.prototype.getPathByEntityName = /**
     * @return {?}
     */
    function () {
        return this.getEntityName().toLowerCase();
    };
    /**
     * @return {?}
     */
    BaseManager.prototype.getEntityName = /**
     * @return {?}
     */
    function () {
        return this.constructor.name.replace("Manager", "");
    };
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} loading
     * @return {?}
     */
    BaseManager.prototype.post = /**
     * @param {?} url
     * @param {?} body
     * @param {?=} loading
     * @return {?}
     */
    function (url, body, loading) {
        var _this = this;
        if (loading === void 0) { loading = false; }
        url = this.configService.getApiBase() + '/service/' + url;
        return this.http.post(url, body, { withCredentials: true }).toPromise().then(function (res) {
            return res;
        }).catch(function (err) {
            switch (err.status) {
                case 400:
                    _this.cCore.toast('请求参数错误！');
                    break;
                case 401:
                    _this.cCore.toast('您没有权限！');
                    break;
                case 403:
                    _this.cCore.toast('服务器禁止访问！');
                    break;
                case 404:
                    _this.cCore.toast('相关资源找不到！');
                    break;
                case 500:
                    _this.cCore.toast('服务器出错啦！');
                    break;
                case 503:
                    _this.cCore.toast('服务器离家出走啦！');
                    break;
                default:
                    break;
            }
        });
    };
    BaseManager.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BaseManager.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CCore },
        { type: ConfigService }
    ]; };
    return BaseManager;
}());
export { BaseManager };
if (false) {
    /** @type {?} */
    BaseManager.prototype.http;
    /** @type {?} */
    BaseManager.prototype.cCore;
    /** @type {?} */
    BaseManager.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL0Jhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRWhELFdBQWEsV0FBVyxHQUFHO0lBQ3ZCLE9BQU8sRUFBRSxzQkFBc0I7Q0FDbEMsQ0FBQzs7SUFJRSxtRUFBbUU7SUFFbkUscUJBQW1CLElBQWdCLEVBQVEsS0FBWSxFQUFTLGFBQTRCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7S0FDM0Y7Ozs7SUFDSyx5QkFBRzs7O0lBQVQ7Ozs7OzRCQUNjLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQTs7d0JBQW5DLEdBQUcsR0FBRyxTQUE2Qjs7NEJBQ3ZDLEtBQW9CLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSw0Q0FBRTtnQ0FBbkMsS0FBSztnQ0FDWixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0NBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2lDQUNqRDs2QkFDSjs7Ozs7Ozs7O3dCQUNELHNCQUFPLEdBQUcsRUFB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QUFHLENBQUM7U0FDZCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1QixNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQzVCLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUM1QixNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtvQkFDM0IsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7b0JBQzdCLE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTTthQUNiO1NBQ0osQ0FBQyxDQUFDOzs7Z0JBbEZWLFVBQVU7Ozs7Z0JBUEYsVUFBVTtnQkFGVixLQUFLO2dCQUdOLGFBQWE7O3NCQUhyQjs7U0FVYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NvcmUgfSBmcm9tICcuL0NDb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gICAgYXBpQmFzZTogJ2h0dHA6Ly9iYW5rLjUzMnQuY29tJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNldXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEFwaUJhc2UoKSArICcvc2VydmljZS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBuZXcoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGF3YWl0IHRoaXMubGlzdCh7IGlkOiAnLTEnIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMocmV0WydkYXRhJ10pKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pbmRleE9mKCdJRCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbJ2RhdGEnXVtmaWVsZF0gPSByZXRbJ2RhdGEnXVtmaWVsZF0gfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGdldFdzVXJsKCkge1xyXG4gICAgICAgIHZhciBiYXNldXJsID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3N0VXJsJykgfHwgZW52aXJvbm1lbnQuYXBpQmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIGJhc2V1cmwucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIikgKyBcIjo4MDg5L2FuZHJvaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3BhZ2VcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZShwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9zYXZlXCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGdldChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9nZXRcIiwgeyAnaWQnOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGdldEJ5KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2dldGJ5XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGxpc3QocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvbGlzdFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvZGVsZXRlXCIsIHsgXCJpZFwiOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGhhcyhwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9oYXNcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc3VtKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3N1bVwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBjb3VudChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9jb3VudFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXRoQnlFbnRpdHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eU5hbWUoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGl0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZS5yZXBsYWNlKFwiTWFuYWdlclwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRBcGlCYXNlKCkgKyAnL3NlcnZpY2UvJyArIHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfor7fmsYLlj4LmlbDplJnor6/vvIEnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ+aCqOayoeacieadg+mZkO+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfmnI3liqHlmajnpoHmraLorr/pl67vvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgn55u45YWz6LWE5rqQ5om+5LiN5Yiw77yBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ+acjeWKoeWZqOWHuumUmeWVpu+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfmnI3liqHlmajnprvlrrblh7rotbDllabvvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==