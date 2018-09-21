import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __awaiter, __generator, __values, __extends } from 'tslib';
import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ CoreService.ngInjectableDef = defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return []; };
    /** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(); }, token: ConfigService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    StartupService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ StartupService.ngInjectableDef = defineInjectable({ factory: function StartupService_Factory() { return new StartupService(inject(HttpClient), inject(ConfigService)); }, token: StartupService, providedIn: "root" });
    return StartupService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CCore = /** @class */ (function () {
    function CCore(loadingCtrl, toastCtrl, platform, alertCtrl, storage) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
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
        if (subtitle === void 0) { subtitle = ''; }
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
        if (cancle === void 0) { cancle = function () { }; }
        if (message === void 0) { message = ''; }
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
        if (duration === void 0) { duration = 1000; }
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
        { type: Injectable },
    ];
    /** @nocollapse */
    CCore.ctorParameters = function () { return [
        { type: LoadingController },
        { type: ToastController },
        { type: Platform },
        { type: AlertController },
        { type: Storage }
    ]; };
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
        { type: Injectable },
    ];
    /** @nocollapse */
    MemberManager.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CCore },
        { type: ConfigService }
    ]; };
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

export { CoreService, CoreComponent, CoreModule, StartupService, ConfigService, environment, BaseManager, CCore, MemberManager };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29yZS9saWIvY29yZS5zZXJ2aWNlLnRzIiwibmc6Ly9jb3JlL2xpYi9jb3JlLmNvbXBvbmVudC50cyIsIm5nOi8vY29yZS9saWIvY29yZS5tb2R1bGUudHMiLCJuZzovL2NvcmUvbGliL2NvbmZpZy5zZXJ2aWNlLnRzIiwibmc6Ly9jb3JlL2xpYi9zdGFydHVwLnNlcnZpY2UudHMiLCJuZzovL2NvcmUvbGliL3NlcnZpY2VzL0NDb3JlLnRzIiwibmc6Ly9jb3JlL2xpYi9zZXJ2aWNlcy9CYXNlTWFuYWdlci50cyIsIm5nOi8vY29yZS9saWIvc2VydmljZXMvTWVtYmVyTWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvcmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY29yZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29yZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2FwaUJhc2U6IHN0cmluZztcclxuICBwcml2YXRlIF93c1VybCA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0QXBpQmFzZShhcGlCYXNlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hcGlCYXNlID0gYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcGlCYXNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRXc1VybCh3c1VybCk6IHZvaWQge1xyXG4gICAgdGhpcy5fd3NVcmwgPSB3c1VybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXc1VybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dzVXJsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFJPT1RfQ09ORklHID0gJy4vYXNzZXRzL2pzb24vY29uZmlnLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkQmFzZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwQ2xpZW50LmdldChST09UX0NPTkZJRykuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldEFwaUJhc2UocmVzLmFwaUJhc2UpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFdzVXJsKHJlcy53c1VybCk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0sIEFsZXJ0Q29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ0NvcmUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcclxuICAgICAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICAgICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VcclxuICAgICkgeyB9XHJcbiAgICBwdWJsaWMgc2V0SG9zdChob3N0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnSG9zdCcsIGhvc3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEhvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ0hvc3QnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TWVtYmVyKG1lbWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ2N1cnJlbnRNZW1iZXInLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TWVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KCdjdXJyZW50TWVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0TWVudXMgKG1lbnVzKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnbWVudXMnLCBKU09OLnN0cmluZ2lmeShtZW51cykpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE1lbnVzICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCgnbWVudXMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRQYXNzd29yZChtZW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdjdXJyZW50UGFzc3dvcmQnLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ2N1cnJlbnRQYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gICAgaXNOdWxsKG9iaikge1xyXG4gICAgICAgIGlmIChvYmogPT0gXCJcIiB8fCBvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkIHx8IG9iaiA9PSBcIltdXCIgfHwgb2JqID09IFtdIHx8IG9iaiA9PSAnZnVuY3Rpb24gU3RyaW5nKCkgeyBbbmF0aXZlIGNvZGVdIH0nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmYWlsKHJldCkge1xyXG4gICAgICAgIGlmIChyZXRbJ2NvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYWxlcnQocmV0Wydtc2cnXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzTm9kZShkYXRhcywgaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBkYXRhc1tpXS5JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc09iaihvYmpzLCBvYmopIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9ianNbaV1bJ0lEJ10gPT0gb2JqWydJRCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZGluZyhjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICBzaG93QmFja2Ryb3A6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZShvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbGVydCh0aXRsZTogc3RyaW5nLCBzdWJ0aXRsZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIHN1YkhlYWRlcjogc3VidGl0bGUsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnw6fCocKuw6XCrsKaJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSh0aXRsZTogc3RyaW5nLCBvazogRnVuY3Rpb24sIGNhbmNsZTogRnVuY3Rpb24gPSAoKSA9PiB7IH0sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnw6XCj8KWw6bCtsKIJyxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnw6fCocKuw6XCrsKaJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyB0b2FzdChtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSAxMDAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdC5wcmVzZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVFcGMoZXBjOiBzdHJpbmcpIHtcclxuICAgICAgICAvL2FsZXJ0KGVwYylcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0ud3JpdGVFcGMoZXBjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL8OmwonCq8Omwo/Cj1xyXG4gICAgc2NhbmMoZmxhZywgc2NhbkZyb21PYmo6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zY2FuLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wiQ05hdGl2ZVwiXS5zY2FuKGZsYWcsIHNjYW5Gcm9tT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY2FuKGZsYWcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0uc2NhbihmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRUaWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldFRpZC5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLmdldFRpZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEVwY3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldEVwY3MucG9zdE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W1wiQ05hdGl2ZVwiXS5nZXRFcGNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UmVhZChmbGFnOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc3RhcnRSZWFkLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tcIkNOYXRpdmVcIl0uc3RhcnRSZWFkKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFBvd2VyKGZsYWc6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zZXRQb3dlci5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLnNldFBvd2VyKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc0RhdGUodCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIChtb250aEluZGV4ICsgMSkgKyBcIi1cIiArIGRheTtcclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXROb3coKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyAobW9udGhJbmRleCArIDEpICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgICAgIHJldHVybiBteUZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93RGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcclxuICAgICAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIFwiMFwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG15Rm9ybWF0dGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0WWVhckRhdGUoKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpIC0gMTtcclxuICAgICAgICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgXCIwXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2NhblN1Ym1pdCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAnYnRuX3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQ2FuY2VsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09ICdidG5fY2FuY2VsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1NjYW5Db2RlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9ICdidG5fc3VibWl0JyAmJiB2YWx1ZSAhPSAnYnRuX2NhbmNlbCcgJiYgdmFsdWUgIT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIiAmJiB2YWx1ZSAhPSBcImJ0bl9yZWR1Y2VkX3Bvd2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNOZXh0UGFnZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcImJ0bl9uZXh0X3BhZ2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQWRkKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwiYnRuX2FkZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc0luY3JlYXNlUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNSZWR1Y2VkUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5fcmVkdWNlZF9wb3dlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8ocHJpbnRDb2RlLCBjb250ZW50KSB7XHJcbiAgICAgICAgbGV0IHlPZmZzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmludENvZGUpLm9mZnNldFRvcDtcclxuICAgICAgICBjb250ZW50LnNjcm9sbFRvKDAsIHlPZmZzZXQsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDDqMKuwr7Dp8K9wq7DpsKcwo3DpcKKwqHDpcKZwqjDpcKcwrDDpcKdwoDDpcKIwrDDp8K8wpPDpcKtwphcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgc2V0SG9zdFRvU3RvcmFnZSh1cmwpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9zdFVybCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDDpMK7wo7Dp8K8wpPDpcKtwpjDqMKOwrfDpcKPwpbDpsKcwo3DpcKKwqHDpcKZwqjDpcKcwrDDpcKdwoBcclxuICAgICAqL1xyXG4gICAgZ2V0SG9zdEJ5U3RvcmFnZSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvc3RVcmwnKSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIMOlwp/Cn8OlwpDCjcOmwqDCocOpwqrCjFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlRG9tYWluKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlZ3ggPSAvW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0oXFwuW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0pK1xcLj8vO1xyXG4gICAgICAgIHJldHVybiByZWd4LnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSVDDpcKcwrDDpcKdwoDDpsKgwqHDqcKqwoxcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlwNCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWd4ID0gL14oKDI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPykoJHwoPyFcXC4kKVxcLikpezR9JC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ3gudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGljdE5hbWUoaWQsIGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBhcnJbaV1bJ0lEJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV1bJ25hbWUnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVBvd2VyKGRpcmVjdGlvbiwgbW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIHBvd2VyUG9zaXRpb246IG51bWJlciA9IDE1O1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KG1vZHVsZSArIFwiUG93ZXJcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNOdWxsKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHBvd2VyUG9zaXRpb24gPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5jcmVhc2VQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIsOlworCn8Onwo7Ch8OlwrfCssOowq7CvsOlwq7CmsOlwojCsMOmwpzCgMOlwqTCp8OlwoDCvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gKyA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlZHVjZWRQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA8IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIsOlworCn8Onwo7Ch8OlwrfCssOowq7CvsOlwq7CmsOlwojCsMOmwpzCgMOlwrDCj8OlwoDCvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gLSA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcG93ZXJBcnJheSA9IFt7IFwicG93ZXJcIjogMTAsIFwibXNnXCI6IFwiw6XCvcKTw6XCicKNw6TCuMK6w6XCsMKPw6XCisKfw6fCjsKHXCIgfSwgeyBcInBvd2VyXCI6IDE1LCBcIm1zZ1wiOiBcIsOlwr3Ck8OlwonCjcOkwrjCusOkwrjCrcOlworCn8Onwo7Ch1wiIH0sIHsgXCJwb3dlclwiOiAyMCwgXCJtc2dcIjogXCLDpcK9wpPDpcKJwo3DpMK4wrrDpcKkwqfDpcKKwp/Dp8KOwodcIiB9LCB7IFwicG93ZXJcIjogMjUsIFwibXNnXCI6IFwiw6XCvcKTw6XCicKNw6TCuMK6w6fCicK5w6XCpMKnw6XCisKfw6fCjsKHXCIgfV1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3dlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA9PSBwb3dlckFycmF5W2ldWydwb3dlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChwb3dlckFycmF5W2ldWydtc2cnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3dlcihwb3dlclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChtb2R1bGUgKyBcIlBvd2VyXCIsIHBvd2VyUG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ0NvcmUgfSBmcm9tICcuL0NDb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gICAgYXBpQmFzZTogJ2h0dHA6Ly9iYW5rLjUzMnQuY29tJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNldXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEFwaUJhc2UoKSArICcvc2VydmljZS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBuZXcoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGF3YWl0IHRoaXMubGlzdCh7IGlkOiAnLTEnIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMocmV0WydkYXRhJ10pKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pbmRleE9mKCdJRCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbJ2RhdGEnXVtmaWVsZF0gPSByZXRbJ2RhdGEnXVtmaWVsZF0gfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGdldFdzVXJsKCkge1xyXG4gICAgICAgIHZhciBiYXNldXJsID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3N0VXJsJykgfHwgZW52aXJvbm1lbnQuYXBpQmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIGJhc2V1cmwucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIikgKyBcIjo4MDg5L2FuZHJvaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3BhZ2VcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZShwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9zYXZlXCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGdldChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9nZXRcIiwgeyAnaWQnOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGdldEJ5KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2dldGJ5XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGxpc3QocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvbGlzdFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvZGVsZXRlXCIsIHsgXCJpZFwiOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGhhcyhwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9oYXNcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc3VtKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3N1bVwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBjb3VudChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9jb3VudFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXRoQnlFbnRpdHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eU5hbWUoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGl0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZS5yZXBsYWNlKFwiTWFuYWdlclwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRBcGlCYXNlKCkgKyAnL3NlcnZpY2UvJyArIHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDqMKvwrfDpsKxwoLDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woEnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwoLCqMOmwrLCocOmwpzCicOmwp3Cg8OpwpnCkMOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDpsKcwo3DpcKKwqHDpcKZwqjDp8KmwoHDpsKtwqLDqMKuwr/DqcKXwq7Dr8K8woEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgnw6fCm8K4w6XChcKzw6jCtcKEw6bCusKQw6bCicK+w6TCuMKNw6XCiMKww6/CvMKBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwpzCjcOlworCocOlwpnCqMOlwofCusOpwpTCmcOlwpXCpsOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDpsKcwo3DpcKKwqHDpcKZwqjDp8KmwrvDpcKuwrbDpcKHwrrDqMK1wrDDpcKVwqbDr8K8woEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCYXNlTWFuYWdlciB9IGZyb20gJy4vQmFzZU1hbmFnZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgQ0NvcmUgfSBmcm9tIFwiLi9DQ29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVtYmVyTWFuYWdlciBleHRlbmRzIEJhc2VNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGNDb3JlLCBjb25maWdTZXJ2aWNlKTtcbiAgICB9XG5cbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvbG9naW5cIiwgeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCB0cnVlKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRNZW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9nZXRDdXJyZW50TWVtYmVyXCIsIHt9KTtcbiAgfVxuXG4gIGdldE15RGVwYXJ0bWVudE1lbWJlcnMoY29kZTpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRteWRlcGFydG1lbnRtZW1iZXJzJywgeyAnY29kZSc6IGNvZGUgfSk7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZChwYXJhbXM6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvY2hhbmdlUGFzc3dvcmRcIiwgcGFyYW1zKTtcbiAgfVxuICAvL8OlwojCt8Olwo3CocOlwr7Cl8OlwojCsMOlwoDCn8OnwpTCqMOkwrrCulxuICBnZXRCeShwYXJhbXMpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRieScscGFyYW1zKTtcbiAgfVxuICBxdWlja0xvZ2luKGNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL3F1aWNrbG9naW5cIiwgeyBjb2RlOiBjb2RlIH0pO1xuICB9XG4gIGdldE15dXBEZXBhcnRtZW50KG1lbWJlcklEKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnbWVtYmVyL2dldG15dXBkZXBhcnRtZW50JywgeyBtZW1iZXJJRDogbWVtYmVySUQgfSk7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztzQkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsZ0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDRDQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O3dCQVZEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN6Qjs7cUJBUkQ7Ozs7Ozs7QUNBQTtJQVNFO0tBQWdCOzs7OztJQUVULGtDQUFVOzs7O2NBQUMsT0FBTztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs7Ozs7SUFHbkIsa0NBQVU7Ozs7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztJQUdoQixnQ0FBUTs7OztjQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBR2YsZ0NBQVE7Ozs7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7OztnQkF0QnRCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3dCQUpEOzs7Ozs7O0FDQUE7QUFJQSxJQUFNLFdBQVcsR0FBRywyQkFBMkIsQ0FBQzs7SUFNOUMsd0JBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1Ysa0JBQWEsR0FBYixhQUFhO0tBQ25COzs7O0lB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