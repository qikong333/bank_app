(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@ionic/angular'), require('@ionic/storage')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/core', '@angular/common/http', '@ionic/angular', '@ionic/storage'], factory) :
    (factory((global.core = {}),global.ng.core,global.ng.common.http,null,null));
}(this, (function (exports,i0,i1,angular,storage) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        CoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
        return CoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreComponent = /** @class */ (function () {
        function CoreComponent() {
        }
        /**
         * @return {?}
         */
        CoreComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CoreComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-core',
                        template: "\n    <p>\n      core works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        CoreComponent.ctorParameters = function () { return []; };
        return CoreComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [CoreComponent],
                        exports: [CoreComponent]
                    },] },
        ];
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConfigService = /** @class */ (function () {
        function ConfigService() {
        }
        /**
         * @param {?} apiBase
         * @return {?}
         */
        ConfigService.prototype.setApiBase = /**
         * @param {?} apiBase
         * @return {?}
         */
            function (apiBase) {
                this._apiBase = apiBase;
            };
        /**
         * @return {?}
         */
        ConfigService.prototype.getApiBase = /**
         * @return {?}
         */
            function () {
                return this._apiBase;
            };
        /**
         * @param {?} wsUrl
         * @return {?}
         */
        ConfigService.prototype.setWsUrl = /**
         * @param {?} wsUrl
         * @return {?}
         */
            function (wsUrl) {
                this._wsUrl = wsUrl;
            };
        /**
         * @return {?}
         */
        ConfigService.prototype.getWsUrl = /**
         * @return {?}
         */
            function () {
                return this._wsUrl;
            };
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ConfigService.ctorParameters = function () { return []; };
        /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(); }, token: ConfigService, providedIn: "root" });
        return ConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        StartupService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: ConfigService }
            ];
        };
        /** @nocollapse */ StartupService.ngInjectableDef = i0.defineInjectable({ factory: function StartupService_Factory() { return new StartupService(i0.inject(i1.HttpClient), i0.inject(ConfigService)); }, token: StartupService, providedIn: "root" });
        return StartupService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CCore = /** @class */ (function () {
        function CCore(loadingCtrl, toastCtrl, platform, alertCtrl, storage$$1) {
            this.loadingCtrl = loadingCtrl;
            this.toastCtrl = toastCtrl;
            this.platform = platform;
            this.alertCtrl = alertCtrl;
            this.storage = storage$$1;
        }
        /**
         * @param {?} host
         * @return {?}
         */
        CCore.prototype.setHost = /**
         * @param {?} host
         * @return {?}
         */
            function (host) {
                this.storage.set('Host', host);
            };
        /**
         * @return {?}
         */
        CCore.prototype.getHost = /**
         * @return {?}
         */
            function () {
                return this.storage.get('Host');
            };
        /**
         * @param {?} member
         * @return {?}
         */
        CCore.prototype.setCurrentMember = /**
         * @param {?} member
         * @return {?}
         */
            function (member) {
                this.storage.set('currentMember', JSON.stringify(member));
            };
        /**
         * @return {?}
         */
        CCore.prototype.getCurrentMember = /**
         * @return {?}
         */
            function () {
                return this.storage.get('currentMember');
            };
        /**
         * @param {?} menus
         * @return {?}
         */
        CCore.prototype.setMenus = /**
         * @param {?} menus
         * @return {?}
         */
            function (menus) {
                this.storage.set('menus', JSON.stringify(menus));
            };
        /**
         * @return {?}
         */
        CCore.prototype.getMenus = /**
         * @return {?}
         */
            function () {
                return this.storage.get('menus');
            };
        /**
         * @param {?} member
         * @return {?}
         */
        CCore.prototype.setCurrentPassword = /**
         * @param {?} member
         * @return {?}
         */
            function (member) {
                this.storage.set('currentPassword', JSON.stringify(member));
            };
        /**
         * @return {?}
         */
        CCore.prototype.getCurrentPassword = /**
         * @return {?}
         */
            function () {
                return this.storage.get('currentPassword');
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        CCore.prototype.isNull = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (obj == "" || obj == null || obj == undefined || obj == "[]" || obj == [] || obj == 'function String() { [native code] }') {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} ret
         * @return {?}
         */
        CCore.prototype.fail = /**
         * @param {?} ret
         * @return {?}
         */
            function (ret) {
                if (ret['code'] == 0) {
                    // this.alert(ret['msg']);
                    return true;
                }
                return false;
            };
        /**
         * @param {?} datas
         * @param {?} id
         * @return {?}
         */
        CCore.prototype.hasNode = /**
         * @param {?} datas
         * @param {?} id
         * @return {?}
         */
            function (datas, id) {
                for (var i = 0; i < datas.length; i++) {
                    if (id == datas[i].ID) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} objs
         * @param {?} obj
         * @return {?}
         */
        CCore.prototype.hasObj = /**
         * @param {?} objs
         * @param {?} obj
         * @return {?}
         */
            function (objs, obj) {
                for (var i = 0; i < objs.length; i++) {
                    if (objs[i]['ID'] == obj['ID']) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} content
         * @return {?}
         */
        CCore.prototype.loading = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                return __awaiter(this, void 0, void 0, function () {
                    var option, loading;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                option = {
                                    content: content,
                                    showBackdrop: true
                                };
                                return [4 /*yield*/, this.loadingCtrl.create(option)];
                            case 1:
                                loading = _a.sent();
                                return [4 /*yield*/, loading.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            };
        /**
         * @param {?} title
         * @param {?=} subtitle
         * @return {?}
         */
        CCore.prototype.alert = /**
         * @param {?} title
         * @param {?=} subtitle
         * @return {?}
         */
            function (title, subtitle) {
                if (subtitle === void 0) {
                    subtitle = '';
                }
                return __awaiter(this, void 0, void 0, function () {
                    var alert;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    header: title,
                                    subHeader: subtitle,
                                    buttons: ['确定']
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} title
         * @param {?} ok
         * @param {?=} cancle
         * @param {?=} message
         * @return {?}
         */
        CCore.prototype.confirm = /**
         * @param {?} title
         * @param {?} ok
         * @param {?=} cancle
         * @param {?=} message
         * @return {?}
         */
            function (title, ok, cancle, message) {
                if (cancle === void 0) {
                    cancle = function () { };
                }
                if (message === void 0) {
                    message = '';
                }
                return this.alertCtrl.create({
                    header: title,
                    message: message,
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                cancle();
                            }
                        },
                        {
                            text: '确定',
                            handler: function () {
                                ok();
                            }
                        }
                    ]
                });
            };
        /**
         * @param {?} message
         * @param {?=} duration
         * @return {?}
         */
        CCore.prototype.toast = /**
         * @param {?} message
         * @param {?=} duration
         * @return {?}
         */
            function (message, duration) {
                if (duration === void 0) {
                    duration = 1000;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.toastCtrl.create({
                                    message: message,
                                    duration: duration
                                })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} epc
         * @return {?}
         */
        CCore.prototype.writeEpc = /**
         * @param {?} epc
         * @return {?}
         */
            function (epc) {
                //alert(epc)
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.scan.postMessage();
                }
                if (this.platform.is('android')) {
                    window["CNative"].writeEpc(epc);
                }
            };
        //扫描
        /**
         * @param {?} flag
         * @param {?} scanFromObj
         * @return {?}
         */
        CCore.prototype.scanc = /**
         * @param {?} flag
         * @param {?} scanFromObj
         * @return {?}
         */
            function (flag, scanFromObj) {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.scan.postMessage();
                }
                if (this.platform.is('android')) {
                    window["CNative"].scan(flag, scanFromObj);
                }
            };
        /**
         * @param {?} flag
         * @return {?}
         */
        CCore.prototype.scan = /**
         * @param {?} flag
         * @return {?}
         */
            function (flag) {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.scan.postMessage();
                }
                if (this.platform.is('android')) {
                    window["CNative"].scan(flag);
                }
            };
        /**
         * @return {?}
         */
        CCore.prototype.getTid = /**
         * @return {?}
         */
            function () {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.getTid.postMessage();
                }
                if (this.platform.is('android')) {
                    return window["CNative"].getTid();
                }
            };
        /**
         * @return {?}
         */
        CCore.prototype.getEpcs = /**
         * @return {?}
         */
            function () {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.getEpcs.postMessage();
                }
                if (this.platform.is('android')) {
                    return window["CNative"].getEpcs();
                }
            };
        /**
         * @param {?} flag
         * @return {?}
         */
        CCore.prototype.startRead = /**
         * @param {?} flag
         * @return {?}
         */
            function (flag) {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.startRead.postMessage();
                }
                if (this.platform.is('android')) {
                    return window["CNative"].startRead(flag);
                }
            };
        /**
         * @param {?} flag
         * @return {?}
         */
        CCore.prototype.setPower = /**
         * @param {?} flag
         * @return {?}
         */
            function (flag) {
                if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
                    window["webkit"].messageHandlers.setPower.postMessage();
                }
                if (this.platform.is('android')) {
                    return window["CNative"].setPower(flag);
                }
            };
        /**
         * @param {?} t
         * @return {?}
         */
        CCore.prototype.transDate = /**
         * @param {?} t
         * @return {?}
         */
            function (t) {
                /** @type {?} */
                var date = new Date(t);
                /** @type {?} */
                var day = date.getDate();
                /** @type {?} */
                var monthIndex = date.getMonth();
                /** @type {?} */
                var year = date.getFullYear();
                /** @type {?} */
                var minutes = date.getMinutes();
                /** @type {?} */
                var hours = date.getHours();
                /** @type {?} */
                var seconds = date.getSeconds();
                /** @type {?} */
                var myFormattedDate = year + "-" + (monthIndex + 1) + "-" + day;
                return myFormattedDate;
            };
        /**
         * @return {?}
         */
        CCore.prototype.getNow = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var date = new Date();
                /** @type {?} */
                var day = date.getDate();
                /** @type {?} */
                var monthIndex = date.getMonth();
                /** @type {?} */
                var year = date.getFullYear();
                /** @type {?} */
                var minutes = date.getMinutes();
                /** @type {?} */
                var hours = date.getHours();
                /** @type {?} */
                var seconds = date.getSeconds();
                /** @type {?} */
                var myFormattedDate = year + "-" + (monthIndex + 1) + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
                return myFormattedDate;
            };
        /**
         * @return {?}
         */
        CCore.prototype.getNowDate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var date = new Date();
                /** @type {?} */
                var day = date.getDate();
                /** @type {?} */
                var month = date.getMonth() + 1;
                /** @type {?} */
                var year = date.getFullYear();
                if (month < 10) {
                    /** @type {?} */
                    var myFormattedDate = year + "-" + "0" + month + "-" + day;
                }
                else {
                    /** @type {?} */
                    var myFormattedDate = year + "-" + month + "-" + day;
                }
                return myFormattedDate;
            };
        /**
         * @return {?}
         */
        CCore.prototype.getLastYearDate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var date = new Date();
                /** @type {?} */
                var day = date.getDate();
                /** @type {?} */
                var month = date.getMonth() + 1;
                /** @type {?} */
                var year = date.getFullYear() - 1;
                if (month < 10) {
                    /** @type {?} */
                    var myFormattedDate = year + "-" + "0" + month + "-" + day;
                }
                else {
                    /** @type {?} */
                    var myFormattedDate = year + "-" + month + "-" + day;
                }
                return myFormattedDate;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isScanSubmit = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == 'btn_submit') {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isScanCancel = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == 'btn_cancel') {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isScanCode = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value != 'btn_submit' && value != 'btn_cancel' && value != "btn_increase_power" && value != "btn_reduced_power") {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isNextPage = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == "btn_next_page") {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isScanAdd = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == "btn_add") {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isIncreasePower = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == "btn_increase_power") {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.isReducedPower = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == "btn_reduced_power") {
                    return true;
                }
                return false;
            };
        /**
         * @param {?} printCode
         * @param {?} content
         * @return {?}
         */
        CCore.prototype.scrollTo = /**
         * @param {?} printCode
         * @param {?} content
         * @return {?}
         */
            function (printCode, content) {
                /** @type {?} */
                var yOffset = document.getElementById(printCode).offsetTop;
                content.scrollTo(0, yOffset, 300);
            };
        /**
         * 设置服务器地址到缓存
         * @param url
         */
        /**
         * 设置服务器地址到缓存
         * @param {?} url
         * @return {?}
         */
        CCore.prototype.setHostToStorage = /**
         * 设置服务器地址到缓存
         * @param {?} url
         * @return {?}
         */
            function (url) {
                localStorage.setItem('hostUrl', url);
            };
        /**
         * 从缓存获取服务器地址
         */
        /**
         * 从缓存获取服务器地址
         * @return {?}
         */
        CCore.prototype.getHostByStorage = /**
         * 从缓存获取服务器地址
         * @return {?}
         */
            function () {
                return localStorage.getItem('hostUrl') || '';
            };
        /**
         * 域名校验
         * @param value
         */
        /**
         * 域名校验
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.validateDomain = /**
         * 域名校验
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var regx = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
                return regx.test(value);
            };
        /**
         * IP地址校验
         * @param value
         */
        /**
         * IP地址校验
         * @param {?} value
         * @return {?}
         */
        CCore.prototype.validateIp4 = /**
         * IP地址校验
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var regx = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/;
                return regx.test(value);
            };
        /**
         * @param {?} id
         * @param {?} arr
         * @return {?}
         */
        CCore.prototype.getDictName = /**
         * @param {?} id
         * @param {?} arr
         * @return {?}
         */
            function (id, arr) {
                for (var i = 0; i < arr.length; i++) {
                    if (id == arr[i]['ID']) {
                        return arr[i]['name'];
                    }
                }
            };
        /**
         * @param {?} direction
         * @param {?} module
         * @return {?}
         */
        CCore.prototype.changePower = /**
         * @param {?} direction
         * @param {?} module
         * @return {?}
         */
            function (direction, module) {
                var _this = this;
                /** @type {?} */
                var powerPosition = 15;
                this.storage.get(module + "Power").then(function (res) {
                    if (!_this.isNull(res)) {
                        powerPosition = res;
                    }
                    if (_this.isIncreasePower(direction)) {
                        if (powerPosition > 20) {
                            _this.toast("功率已设定到最大值");
                        }
                        else {
                            powerPosition = powerPosition + 5;
                        }
                    }
                    if (_this.isReducedPower(direction)) {
                        if (powerPosition < 15) {
                            _this.toast("功率已设定到最小值");
                        }
                        else {
                            powerPosition = powerPosition - 5;
                        }
                    }
                    /** @type {?} */
                    var powerArray = [{ "power": 10, "msg": "当前为小功率" }, { "power": 15, "msg": "当前为中功率" }, { "power": 20, "msg": "当前为大功率" }, { "power": 25, "msg": "当前为特大功率" }];
                    for (var i = 0; i < powerArray.length; i++) {
                        if (powerPosition == powerArray[i]['power']) {
                            _this.toast(powerArray[i]['msg']);
                        }
                    }
                    _this.setPower(powerPosition);
                    _this.storage.set(module + "Power", powerPosition);
                });
            };
        CCore.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        CCore.ctorParameters = function () {
            return [
                { type: angular.LoadingController },
                { type: angular.ToastController },
                { type: angular.Platform },
                { type: angular.AlertController },
                { type: storage.Storage }
            ];
        };
        return CCore;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var environment = {
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
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, ret, _b, _c, field;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, this.list({ id: '-1' })];
                            case 1:
                                ret = _d.sent();
                                try {
                                    for (_b = __values(Object.keys(ret['data'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        field = _c.value;
                                        if (field.indexOf('ID') != -1) {
                                            ret['data'][field] = ret['data'][field] || '';
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return))
                                            _a.call(_b);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
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
                if (loading === void 0) {
                    loading = false;
                }
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        BaseManager.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: CCore },
                { type: ConfigService }
            ];
        };
        return BaseManager;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MemberManager = /** @class */ (function (_super) {
        __extends(MemberManager, _super);
        function MemberManager(http, cCore, configService) {
            var _this = _super.call(this, http, cCore, configService) || this;
            _this.http = http;
            _this.cCore = cCore;
            _this.configService = configService;
            return _this;
        }
        /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        MemberManager.prototype.login = /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
            function (username, password) {
                return this.post("member/login", { username: username, password: password }, true);
            };
        /**
         * @return {?}
         */
        MemberManager.prototype.getCurrentMember = /**
         * @return {?}
         */
            function () {
                return this.post("member/getCurrentMember", {});
            };
        /**
         * @param {?} code
         * @return {?}
         */
        MemberManager.prototype.getMyDepartmentMembers = /**
         * @param {?} code
         * @return {?}
         */
            function (code) {
                return this.post('member/getmydepartmentmembers', { 'code': code });
            };
        /**
         * @param {?} params
         * @return {?}
         */
        MemberManager.prototype.changePassword = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                return this.post("member/changePassword", params);
            };
        //刷卡得到借用人
        /**
         * @param {?} params
         * @return {?}
         */
        MemberManager.prototype.getBy = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                return this.post('member/getby', params);
            };
        /**
         * @param {?} code
         * @return {?}
         */
        MemberManager.prototype.quickLogin = /**
         * @param {?} code
         * @return {?}
         */
            function (code) {
                return this.post("member/quicklogin", { code: code });
            };
        /**
         * @param {?} memberID
         * @return {?}
         */
        MemberManager.prototype.getMyupDepartment = /**
         * @param {?} memberID
         * @return {?}
         */
            function (memberID) {
                return this.post('member/getmyupdepartment', { memberID: memberID });
            };
        MemberManager.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        MemberManager.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: CCore },
                { type: ConfigService }
            ];
        };
        return MemberManager;
    }(BaseManager));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CoreService = CoreService;
    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;
    exports.StartupService = StartupService;
    exports.ConfigService = ConfigService;
    exports.environment = environment;
    exports.BaseManager = BaseManager;
    exports.CCore = CCore;
    exports.MemberManager = MemberManager;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvcmUvbGliL2NvcmUuc2VydmljZS50cyIsIm5nOi8vY29yZS9saWIvY29yZS5jb21wb25lbnQudHMiLCJuZzovL2NvcmUvbGliL2NvcmUubW9kdWxlLnRzIiwibmc6Ly9jb3JlL2xpYi9jb25maWcuc2VydmljZS50cyIsIm5nOi8vY29yZS9saWIvc3RhcnR1cC5zZXJ2aWNlLnRzIixudWxsLCJuZzovL2NvcmUvbGliL3NlcnZpY2VzL0NDb3JlLnRzIiwibmc6Ly9jb3JlL2xpYi9zZXJ2aWNlcy9CYXNlTWFuYWdlci50cyIsIm5nOi8vY29yZS9saWIvc2VydmljZXMvTWVtYmVyTWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvcmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY29yZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29yZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2FwaUJhc2U6IHN0cmluZztcclxuICBwcml2YXRlIF93c1VybCA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0QXBpQmFzZShhcGlCYXNlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hcGlCYXNlID0gYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcGlCYXNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRXc1VybCh3c1VybCk6IHZvaWQge1xyXG4gICAgdGhpcy5fd3NVcmwgPSB3c1VybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXc1VybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dzVXJsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFJPT1RfQ09ORklHID0gJy4vYXNzZXRzL2pzb24vY29uZmlnLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkQmFzZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwQ2xpZW50LmdldChST09UX0NPTkZJRykuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldEFwaUJhc2UocmVzLmFwaUJhc2UpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFdzVXJsKHJlcy53c1VybCk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSwgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDQ29yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcclxuICAgICAgICBwcml2YXRlIHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxyXG4gICAgICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgcHJpdmF0ZSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcclxuICAgICAgICBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVxyXG4gICAgKSB7IH1cclxuICAgIHB1YmxpYyBzZXRIb3N0KGhvc3QpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdIb3N0JywgaG9zdCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SG9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCgnSG9zdCcpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEN1cnJlbnRNZW1iZXIobWVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnY3VycmVudE1lbWJlcicsIEpTT04uc3RyaW5naWZ5KG1lbWJlcikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEN1cnJlbnRNZW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ2N1cnJlbnRNZW1iZXInKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRNZW51cyAobWVudXMpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdtZW51cycsIEpTT04uc3RyaW5naWZ5KG1lbnVzKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0TWVudXMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KCdtZW51cycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudFBhc3N3b3JkKG1lbWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ2N1cnJlbnRQYXNzd29yZCcsIEpTT04uc3RyaW5naWZ5KG1lbWJlcikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEN1cnJlbnRQYXNzd29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCgnY3VycmVudFBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgICBpc051bGwob2JqKSB7XHJcbiAgICAgICAgaWYgKG9iaiA9PSBcIlwiIHx8IG9iaiA9PSBudWxsIHx8IG9iaiA9PSB1bmRlZmluZWQgfHwgb2JqID09IFwiW11cIiB8fCBvYmogPT0gW10gfHwgb2JqID09ICdmdW5jdGlvbiBTdHJpbmcoKSB7IFtuYXRpdmUgY29kZV0gfScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZhaWwocmV0KSB7XHJcbiAgICAgICAgaWYgKHJldFsnY29kZSddID09IDApIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5hbGVydChyZXRbJ21zZyddKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNOb2RlKGRhdGFzLCBpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlkID09IGRhdGFzW2ldLklEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzT2JqKG9ianMsIG9iaikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob2Jqc1tpXVsnSUQnXSA9PSBvYmpbJ0lEJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKG9wdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFsZXJ0KHRpdGxlOiBzdHJpbmcsIHN1YnRpdGxlOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0aXRsZSxcclxuICAgICAgICAgICAgc3ViSGVhZGVyOiBzdWJ0aXRsZSxcclxuICAgICAgICAgICAgYnV0dG9uczogWyfDp8Khwq7DpcKuwponXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25maXJtKHRpdGxlOiBzdHJpbmcsIG9rOiBGdW5jdGlvbiwgY2FuY2xlOiBGdW5jdGlvbiA9ICgpID0+IHsgfSwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0aXRsZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfDpcKPwpbDpsK2wognLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2xlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfDp8Khwq7DpcKuwponLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2soKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIHRvYXN0KG1lc3NhZ2U6IHN0cmluZywgZHVyYXRpb246IG51bWJlciA9IDEwMDApIHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0LnByZXNlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUVwYyhlcGM6IHN0cmluZykge1xyXG4gICAgICAgIC8vYWxlcnQoZXBjKVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zY2FuLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wiQ05hdGl2ZVwiXS53cml0ZUVwYyhlcGMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vw6bCicKrw6bCj8KPXHJcbiAgICBzY2FuYyhmbGFnLCBzY2FuRnJvbU9iajogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLnNjYW4ucG9zdE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJDTmF0aXZlXCJdLnNjYW4oZmxhZywgc2NhbkZyb21PYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjYW4oZmxhZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zY2FuLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wiQ05hdGl2ZVwiXS5zY2FuKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFRpZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuZ2V0VGlkLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tcIkNOYXRpdmVcIl0uZ2V0VGlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0RXBjcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuZ2V0RXBjcy5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLmdldEVwY3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSZWFkKGZsYWc6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zdGFydFJlYWQucG9zdE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W1wiQ05hdGl2ZVwiXS5zdGFydFJlYWQoZmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0UG93ZXIoZmxhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLnNldFBvd2VyLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tcIkNOYXRpdmVcIl0uc2V0UG93ZXIoZmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zRGF0ZSh0KSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0KTtcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgKG1vbnRoSW5kZXggKyAxKSArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIHJldHVybiBteUZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE5vdygpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIChtb250aEluZGV4ICsgMSkgKyBcIi1cIiArIGRheSArIFwiIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbiAgICAgICAgcmV0dXJuIG15Rm9ybWF0dGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3dEYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgXCIwXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RZZWFyRGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgLSAxO1xyXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyBcIjBcIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBteUZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTY2FuU3VibWl0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09ICdidG5fc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1NjYW5DYW5jZWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gJ2J0bl9jYW5jZWwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlzU2NhbkNvZGUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT0gJ2J0bl9zdWJtaXQnICYmIHZhbHVlICE9ICdidG5fY2FuY2VsJyAmJiB2YWx1ZSAhPSBcImJ0bl9pbmNyZWFzZV9wb3dlclwiICYmIHZhbHVlICE9IFwiYnRuX3JlZHVjZWRfcG93ZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc05leHRQYWdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwiYnRuX25leHRfcGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1NjYW5BZGQodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5fYWRkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlzSW5jcmVhc2VQb3dlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcImJ0bl9pbmNyZWFzZV9wb3dlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1JlZHVjZWRQb3dlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcImJ0bl9yZWR1Y2VkX3Bvd2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhwcmludENvZGUsIGNvbnRlbnQpIHtcclxuICAgICAgICBsZXQgeU9mZnNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByaW50Q29kZSkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnRlbnQuc2Nyb2xsVG8oMCwgeU9mZnNldCwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIMOowq7CvsOnwr3CrsOmwpzCjcOlworCocOlwpnCqMOlwpzCsMOlwp3CgMOlwojCsMOnwrzCk8Olwq3CmFxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBzZXRIb3N0VG9TdG9yYWdlKHVybCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob3N0VXJsJywgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIMOkwrvCjsOnwrzCk8Olwq3CmMOowo7Ct8Olwo/ClsOmwpzCjcOlworCocOlwpnCqMOlwpzCsMOlwp3CgFxyXG4gICAgICovXHJcbiAgICBnZXRIb3N0QnlTdG9yYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9zdFVybCcpIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogw6XCn8Kfw6XCkMKNw6bCoMKhw6nCqsKMXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVEb21haW4odmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVneCA9IC9bYS16QS1aMC05XVstYS16QS1aMC05XXswLDYyfShcXC5bYS16QS1aMC05XVstYS16QS1aMC05XXswLDYyfSkrXFwuPy87XHJcbiAgICAgICAgcmV0dXJuIHJlZ3gudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJUMOlwpzCsMOlwp3CgMOmwqDCocOpwqrCjFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlSXA0KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlZ3ggPSAvXigoMjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KSgkfCg/IVxcLiQpXFwuKSl7NH0kLztcclxuICAgICAgICByZXR1cm4gcmVneC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaWN0TmFtZShpZCwgYXJyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlkID09IGFycltpXVsnSUQnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycltpXVsnbmFtZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlUG93ZXIoZGlyZWN0aW9uLCBtb2R1bGUpIHtcclxuICAgICAgICB2YXIgcG93ZXJQb3NpdGlvbjogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQobW9kdWxlICsgXCJQb3dlclwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc051bGwocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHJlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbmNyZWFzZVBvd2VyKGRpcmVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3dlclBvc2l0aW9uID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KFwiw6XCisKfw6fCjsKHw6XCt8Kyw6jCrsK+w6XCrsKaw6XCiMKww6bCnMKAw6XCpMKnw6XCgMK8XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3dlclBvc2l0aW9uID0gcG93ZXJQb3NpdGlvbiArIDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVkdWNlZFBvd2VyKGRpcmVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3dlclBvc2l0aW9uIDwgMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KFwiw6XCisKfw6fCjsKHw6XCt8Kyw6jCrsK+w6XCrsKaw6XCiMKww6bCnMKAw6XCsMKPw6XCgMK8XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3dlclBvc2l0aW9uID0gcG93ZXJQb3NpdGlvbiAtIDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwb3dlckFycmF5ID0gW3sgXCJwb3dlclwiOiAxMCwgXCJtc2dcIjogXCLDpcK9wpPDpcKJwo3DpMK4wrrDpcKwwo/DpcKKwp/Dp8KOwodcIiB9LCB7IFwicG93ZXJcIjogMTUsIFwibXNnXCI6IFwiw6XCvcKTw6XCicKNw6TCuMK6w6TCuMKtw6XCisKfw6fCjsKHXCIgfSwgeyBcInBvd2VyXCI6IDIwLCBcIm1zZ1wiOiBcIsOlwr3Ck8OlwonCjcOkwrjCusOlwqTCp8OlworCn8Onwo7Ch1wiIH0sIHsgXCJwb3dlclwiOiAyNSwgXCJtc2dcIjogXCLDpcK9wpPDpcKJwo3DpMK4wrrDp8KJwrnDpcKkwqfDpcKKwp/Dp8KOwodcIiB9XVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvd2VyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3dlclBvc2l0aW9uID09IHBvd2VyQXJyYXlbaV1bJ3Bvd2VyJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KHBvd2VyQXJyYXlbaV1bJ21zZyddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFBvd2VyKHBvd2VyUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KG1vZHVsZSArIFwiUG93ZXJcIiwgcG93ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDQ29yZSB9IGZyb20gJy4vQ0NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIi4uL2NvbmZpZy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgICBhcGlCYXNlOiAnaHR0cDovL2JhbmsuNTMydC5jb20nXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXNlTWFuYWdlciB7XHJcbiAgICAvLyBwcml2YXRlIGJhc2V1cmwgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0QXBpQmFzZSgpICsgJy9zZXJ2aWNlLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQscHVibGljIGNDb3JlOiBDQ29yZSwgcHVibGljIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuICAgIGFzeW5jIG5ldygpIHtcclxuICAgICAgICBsZXQgcmV0ID0gYXdhaXQgdGhpcy5saXN0KHsgaWQ6ICctMScgfSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhyZXRbJ2RhdGEnXSkpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmluZGV4T2YoJ0lEJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldFsnZGF0YSddW2ZpZWxkXSA9IHJldFsnZGF0YSddW2ZpZWxkXSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZ2V0V3NVcmwoKSB7XHJcbiAgICAgICAgdmFyIGJhc2V1cmwgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvc3RVcmwnKSB8fCBlbnZpcm9ubWVudC5hcGlCYXNlKTtcclxuICAgICAgICByZXR1cm4gXCJ3czovL1wiICsgYmFzZXVybC5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIlwiKSArIFwiOjgwODkvYW5kcm9pZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2UocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvcGFnZVwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBzYXZlKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3NhdmVcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2dldFwiLCB7ICdpZCc6IHBhcmFtIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QnkocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvZ2V0YnlcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgbGlzdChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9saXN0XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZShwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9kZWxldGVcIiwgeyBcImlkXCI6IHBhcmFtIH0pO1xyXG4gICAgfVxyXG4gICAgaGFzKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2hhc1wiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBzdW0ocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvc3VtXCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGNvdW50KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2NvdW50XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGdldFBhdGhCeUVudGl0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5TmFtZSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW50aXR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnJlcGxhY2UoXCJNYW5hZ2VyXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEFwaUJhc2UoKSArICcvc2VydmljZS8nICsgdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8Oowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsMOpwpTCmcOowq/Cr8OvwrzCgScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgnw6bCgsKow6bCssKhw6bCnMKJw6bCncKDw6nCmcKQw6/CvMKBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwpzCjcOlworCocOlwpnCqMOnwqbCgcOmwq3CosOowq7Cv8OpwpfCrsOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDp8KbwrjDpcKFwrPDqMK1woTDpsK6wpDDpsKJwr7DpMK4wo3DpcKIwrDDr8K8woEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgnw6bCnMKNw6XCisKhw6XCmcKow6XCh8K6w6nClMKZw6XClcKmw6/CvMKBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwpzCjcOlworCocOlwpnCqMOnwqbCu8Olwq7CtsOlwofCusOowrXCsMOlwpXCpsOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJhc2VNYW5hZ2VyIH0gZnJvbSAnLi9CYXNlTWFuYWdlcic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDQ29yZSB9IGZyb20gXCIuL0NDb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW1iZXJNYW5hZ2VyIGV4dGVuZHMgQmFzZU1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQscHVibGljIGNDb3JlOiBDQ29yZSwgcHVibGljIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoaHR0cCwgY0NvcmUsIGNvbmZpZ1NlcnZpY2UpO1xuICAgIH1cblxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9sb2dpblwiLCB7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0sIHRydWUpO1xuICB9XG5cbiAgZ2V0Q3VycmVudE1lbWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL2dldEN1cnJlbnRNZW1iZXJcIiwge30pO1xuICB9XG5cbiAgZ2V0TXlEZXBhcnRtZW50TWVtYmVycyhjb2RlOnN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnbWVtYmVyL2dldG15ZGVwYXJ0bWVudG1lbWJlcnMnLCB7ICdjb2RlJzogY29kZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKHBhcmFtczogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9jaGFuZ2VQYXNzd29yZFwiLCBwYXJhbXMpO1xuICB9XG4gIC8vw6XCiMK3w6XCjcKhw6XCvsKXw6XCiMKww6XCgMKfw6fClMKow6TCusK6XG4gIGdldEJ5KHBhcmFtcyl7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnbWVtYmVyL2dldGJ5JyxwYXJhbXMpO1xuICB9XG4gIHF1aWNrTG9naW4oY29kZSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvcXVpY2tsb2dpblwiLCB7IGNvZGU6IGNvZGUgfSk7XG4gIH1cbiAgZ2V0TXl1cERlcGFydG1lbnQobWVtYmVySUQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCdtZW1iZXIvZ2V0bXl1cGRlcGFydG1lbnQnLCB7IG1lbWJlcklEOiBtZW1iZXJJRCB9KTtcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiSHR0cENsaWVudCIsInN0b3JhZ2UiLCJMb2FkaW5nQ29udHJvbGxlciIsIlRvYXN0Q29udHJvbGxlciIsIlBsYXRmb3JtIiwiQWxlcnRDb250cm9sbGVyIiwiU3RvcmFnZSIsInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MEJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFB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QUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJO3dCQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM3SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNULEtBQUssQ0FBQyxDQUFDO3dCQUFDLEtBQUssQ0FBQzs0QkFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLE1BQU07d0JBQzlCLEtBQUssQ0FBQzs0QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO3dCQUN4RCxLQUFLLENBQUM7NEJBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsU0FBUzt3QkFDakQsS0FBSyxDQUFDOzRCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsU0FBUzt3QkFDakQ7NEJBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQUMsU0FBUzs2QkFBRTs0QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDbkUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsU0FBUztxQkFDOUI7b0JBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5QjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFBRSxF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