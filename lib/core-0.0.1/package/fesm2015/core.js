import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreService {
    constructor() { }
}
CoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CoreService.ctorParameters = () => [];
/** @nocollapse */ CoreService.ngInjectableDef = defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-core',
                template: `
    <p>
      core works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
CoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [CoreComponent],
                exports: [CoreComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ConfigService {
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
/** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(); }, token: ConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ROOT_CONFIG = './assets/json/config.json';
class StartupService {
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
/** @nocollapse */ StartupService.ngInjectableDef = defineInjectable({ factory: function StartupService_Factory() { return new StartupService(inject(HttpClient), inject(ConfigService)); }, token: StartupService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CCore {
    /**
     * @param {?} loadingCtrl
     * @param {?} toastCtrl
     * @param {?} platform
     * @param {?} alertCtrl
     * @param {?} storage
     */
    constructor(loadingCtrl, toastCtrl, platform, alertCtrl, storage) {
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
    setHost(host) {
        this.storage.set('Host', host);
    }
    /**
     * @return {?}
     */
    getHost() {
        return this.storage.get('Host');
    }
    /**
     * @param {?} member
     * @return {?}
     */
    setCurrentMember(member) {
        this.storage.set('currentMember', JSON.stringify(member));
    }
    /**
     * @return {?}
     */
    getCurrentMember() {
        return this.storage.get('currentMember');
    }
    /**
     * @param {?} menus
     * @return {?}
     */
    setMenus(menus) {
        this.storage.set('menus', JSON.stringify(menus));
    }
    /**
     * @return {?}
     */
    getMenus() {
        return this.storage.get('menus');
    }
    /**
     * @param {?} member
     * @return {?}
     */
    setCurrentPassword(member) {
        this.storage.set('currentPassword', JSON.stringify(member));
    }
    /**
     * @return {?}
     */
    getCurrentPassword() {
        return this.storage.get('currentPassword');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isNull(obj) {
        if (obj == "" || obj == null || obj == undefined || obj == "[]" || obj == [] || obj == 'function String() { [native code] }') {
            return true;
        }
        return false;
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    fail(ret) {
        if (ret['code'] == 0) {
            // this.alert(ret['msg']);
            return true;
        }
        return false;
    }
    /**
     * @param {?} datas
     * @param {?} id
     * @return {?}
     */
    hasNode(datas, id) {
        for (let i = 0; i < datas.length; i++) {
            if (id == datas[i].ID) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} objs
     * @param {?} obj
     * @return {?}
     */
    hasObj(objs, obj) {
        for (let i = 0; i < objs.length; i++) {
            if (objs[i]['ID'] == obj['ID']) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    loading(content) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let option = {
                content: content,
                showBackdrop: true
            };
            /** @type {?} */
            const loading = yield this.loadingCtrl.create(option);
            return yield loading.present();
        });
    }
    /**
     * @param {?} title
     * @param {?=} subtitle
     * @return {?}
     */
    alert(title, subtitle = '') {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: subtitle,
                buttons: ['确定']
            });
            yield alert.present();
        });
    }
    /**
     * @param {?} title
     * @param {?} ok
     * @param {?=} cancle
     * @param {?=} message
     * @return {?}
     */
    confirm(title, ok, cancle = () => { }, message = '') {
        return this.alertCtrl.create({
            header: title,
            message: message,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        cancle();
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        ok();
                    }
                }
            ]
        });
    }
    /**
     * @param {?} message
     * @param {?=} duration
     * @return {?}
     */
    toast(message, duration = 1000) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: duration
            });
            toast.present();
        });
    }
    /**
     * @param {?} epc
     * @return {?}
     */
    writeEpc(epc) {
        //alert(epc)
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].writeEpc(epc);
        }
    }
    /**
     * @param {?} flag
     * @param {?} scanFromObj
     * @return {?}
     */
    scanc(flag, scanFromObj) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].scan(flag, scanFromObj);
        }
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    scan(flag) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].scan(flag);
        }
    }
    /**
     * @return {?}
     */
    getTid() {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.getTid.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].getTid();
        }
    }
    /**
     * @return {?}
     */
    getEpcs() {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.getEpcs.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].getEpcs();
        }
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    startRead(flag) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.startRead.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].startRead(flag);
        }
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    setPower(flag) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.setPower.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].setPower(flag);
        }
    }
    /**
     * @param {?} t
     * @return {?}
     */
    transDate(t) {
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
    }
    /**
     * @return {?}
     */
    getNow() {
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
    }
    /**
     * @return {?}
     */
    getNowDate() {
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
    }
    /**
     * @return {?}
     */
    getLastYearDate() {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isScanSubmit(value) {
        if (value == 'btn_submit') {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isScanCancel(value) {
        if (value == 'btn_cancel') {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isScanCode(value) {
        if (value != 'btn_submit' && value != 'btn_cancel' && value != "btn_increase_power" && value != "btn_reduced_power") {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNextPage(value) {
        if (value == "btn_next_page") {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isScanAdd(value) {
        if (value == "btn_add") {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isIncreasePower(value) {
        if (value == "btn_increase_power") {
            return true;
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isReducedPower(value) {
        if (value == "btn_reduced_power") {
            return true;
        }
        return false;
    }
    /**
     * @param {?} printCode
     * @param {?} content
     * @return {?}
     */
    scrollTo(printCode, content) {
        /** @type {?} */
        let yOffset = document.getElementById(printCode).offsetTop;
        content.scrollTo(0, yOffset, 300);
    }
    /**
     * 设置服务器地址到缓存
     * @param {?} url
     * @return {?}
     */
    setHostToStorage(url) {
        localStorage.setItem('hostUrl', url);
    }
    /**
     * 从缓存获取服务器地址
     * @return {?}
     */
    getHostByStorage() {
        return localStorage.getItem('hostUrl') || '';
    }
    /**
     * 域名校验
     * @param {?} value
     * @return {?}
     */
    validateDomain(value) {
        /** @type {?} */
        let regx = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return regx.test(value);
    }
    /**
     * IP地址校验
     * @param {?} value
     * @return {?}
     */
    validateIp4(value) {
        /** @type {?} */
        let regx = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/;
        return regx.test(value);
    }
    /**
     * @param {?} id
     * @param {?} arr
     * @return {?}
     */
    getDictName(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (id == arr[i]['ID']) {
                return arr[i]['name'];
            }
        }
    }
    /**
     * @param {?} direction
     * @param {?} module
     * @return {?}
     */
    changePower(direction, module) {
        /** @type {?} */
        var powerPosition = 15;
        this.storage.get(module + "Power").then(res => {
            if (!this.isNull(res)) {
                powerPosition = res;
            }
            if (this.isIncreasePower(direction)) {
                if (powerPosition > 20) {
                    this.toast("功率已设定到最大值");
                }
                else {
                    powerPosition = powerPosition + 5;
                }
            }
            if (this.isReducedPower(direction)) {
                if (powerPosition < 15) {
                    this.toast("功率已设定到最小值");
                }
                else {
                    powerPosition = powerPosition - 5;
                }
            }
            /** @type {?} */
            var powerArray = [{ "power": 10, "msg": "当前为小功率" }, { "power": 15, "msg": "当前为中功率" }, { "power": 20, "msg": "当前为大功率" }, { "power": 25, "msg": "当前为特大功率" }];
            for (let i = 0; i < powerArray.length; i++) {
                if (powerPosition == powerArray[i]['power']) {
                    this.toast(powerArray[i]['msg']);
                }
            }
            this.setPower(powerPosition);
            this.storage.set(module + "Power", powerPosition);
        });
    }
}
CCore.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CCore.ctorParameters = () => [
    { type: LoadingController },
    { type: ToastController },
    { type: Platform },
    { type: AlertController },
    { type: Storage }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const environment = {
    apiBase: 'http://bank.532t.com'
};
class BaseManager {
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MemberManager extends BaseManager {
    /**
     * @param {?} http
     * @param {?} cCore
     * @param {?} configService
     */
    constructor(http, cCore, configService) {
        super(http, cCore, configService);
        this.http = http;
        this.cCore = cCore;
        this.configService = configService;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        return this.post("member/login", { username: username, password: password }, true);
    }
    /**
     * @return {?}
     */
    getCurrentMember() {
        return this.post("member/getCurrentMember", {});
    }
    /**
     * @param {?} code
     * @return {?}
     */
    getMyDepartmentMembers(code) {
        return this.post('member/getmydepartmentmembers', { 'code': code });
    }
    /**
     * @param {?} params
     * @return {?}
     */
    changePassword(params) {
        return this.post("member/changePassword", params);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    getBy(params) {
        return this.post('member/getby', params);
    }
    /**
     * @param {?} code
     * @return {?}
     */
    quickLogin(code) {
        return this.post("member/quicklogin", { code: code });
    }
    /**
     * @param {?} memberID
     * @return {?}
     */
    getMyupDepartment(memberID) {
        return this.post('member/getmyupdepartment', { memberID: memberID });
    }
}
MemberManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MemberManager.ctorParameters = () => [
    { type: HttpClient },
    { type: CCore },
    { type: ConfigService }
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29yZS9saWIvY29yZS5zZXJ2aWNlLnRzIiwibmc6Ly9jb3JlL2xpYi9jb3JlLmNvbXBvbmVudC50cyIsIm5nOi8vY29yZS9saWIvY29yZS5tb2R1bGUudHMiLCJuZzovL2NvcmUvbGliL2NvbmZpZy5zZXJ2aWNlLnRzIiwibmc6Ly9jb3JlL2xpYi9zdGFydHVwLnNlcnZpY2UudHMiLCJuZzovL2NvcmUvbGliL3NlcnZpY2VzL0NDb3JlLnRzIiwibmc6Ly9jb3JlL2xpYi9zZXJ2aWNlcy9CYXNlTWFuYWdlci50cyIsIm5nOi8vY29yZS9saWIvc2VydmljZXMvTWVtYmVyTWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvcmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY29yZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29yZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2FwaUJhc2U6IHN0cmluZztcclxuICBwcml2YXRlIF93c1VybCA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0QXBpQmFzZShhcGlCYXNlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hcGlCYXNlID0gYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcGlCYXNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpQmFzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRXc1VybCh3c1VybCk6IHZvaWQge1xyXG4gICAgdGhpcy5fd3NVcmwgPSB3c1VybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXc1VybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dzVXJsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFJPT1RfQ09ORklHID0gJy4vYXNzZXRzL2pzb24vY29uZmlnLmpzb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhcnR1cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkQmFzZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwQ2xpZW50LmdldChST09UX0NPTkZJRykuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldEFwaUJhc2UocmVzLmFwaUJhc2UpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNldFdzVXJsKHJlcy53c1VybCk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0sIEFsZXJ0Q29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ0NvcmUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcclxuICAgICAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICAgICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VcclxuICAgICkgeyB9XHJcbiAgICBwdWJsaWMgc2V0SG9zdChob3N0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnSG9zdCcsIGhvc3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEhvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ0hvc3QnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TWVtYmVyKG1lbWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ2N1cnJlbnRNZW1iZXInLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TWVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KCdjdXJyZW50TWVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0TWVudXMgKG1lbnVzKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnbWVudXMnLCBKU09OLnN0cmluZ2lmeShtZW51cykpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE1lbnVzICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCgnbWVudXMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRQYXNzd29yZChtZW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdjdXJyZW50UGFzc3dvcmQnLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ2N1cnJlbnRQYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gICAgaXNOdWxsKG9iaikge1xyXG4gICAgICAgIGlmIChvYmogPT0gXCJcIiB8fCBvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkIHx8IG9iaiA9PSBcIltdXCIgfHwgb2JqID09IFtdIHx8IG9iaiA9PSAnZnVuY3Rpb24gU3RyaW5nKCkgeyBbbmF0aXZlIGNvZGVdIH0nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmYWlsKHJldCkge1xyXG4gICAgICAgIGlmIChyZXRbJ2NvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYWxlcnQocmV0Wydtc2cnXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzTm9kZShkYXRhcywgaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBkYXRhc1tpXS5JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc09iaihvYmpzLCBvYmopIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9ianNbaV1bJ0lEJ10gPT0gb2JqWydJRCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZGluZyhjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICBzaG93QmFja2Ryb3A6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZShvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbGVydCh0aXRsZTogc3RyaW5nLCBzdWJ0aXRsZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIHN1YkhlYWRlcjogc3VidGl0bGUsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnw6fCocKuw6XCrsKaJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSh0aXRsZTogc3RyaW5nLCBvazogRnVuY3Rpb24sIGNhbmNsZTogRnVuY3Rpb24gPSAoKSA9PiB7IH0sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnw6XCj8KWw6bCtsKIJyxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnw6fCocKuw6XCrsKaJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyB0b2FzdChtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSAxMDAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdC5wcmVzZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVFcGMoZXBjOiBzdHJpbmcpIHtcclxuICAgICAgICAvL2FsZXJ0KGVwYylcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0ud3JpdGVFcGMoZXBjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL8OmwonCq8Omwo/Cj1xyXG4gICAgc2NhbmMoZmxhZywgc2NhbkZyb21PYmo6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zY2FuLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wiQ05hdGl2ZVwiXS5zY2FuKGZsYWcsIHNjYW5Gcm9tT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY2FuKGZsYWcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0uc2NhbihmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRUaWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldFRpZC5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLmdldFRpZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEVwY3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldEVwY3MucG9zdE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W1wiQ05hdGl2ZVwiXS5nZXRFcGNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UmVhZChmbGFnOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc3RhcnRSZWFkLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tcIkNOYXRpdmVcIl0uc3RhcnRSZWFkKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFBvd2VyKGZsYWc6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zZXRQb3dlci5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLnNldFBvd2VyKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc0RhdGUodCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIChtb250aEluZGV4ICsgMSkgKyBcIi1cIiArIGRheTtcclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXROb3coKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyAobW9udGhJbmRleCArIDEpICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgICAgIHJldHVybiBteUZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93RGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcclxuICAgICAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIFwiMFwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG15Rm9ybWF0dGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0WWVhckRhdGUoKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpIC0gMTtcclxuICAgICAgICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgXCIwXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2NhblN1Ym1pdCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAnYnRuX3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQ2FuY2VsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09ICdidG5fY2FuY2VsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1NjYW5Db2RlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9ICdidG5fc3VibWl0JyAmJiB2YWx1ZSAhPSAnYnRuX2NhbmNlbCcgJiYgdmFsdWUgIT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIiAmJiB2YWx1ZSAhPSBcImJ0bl9yZWR1Y2VkX3Bvd2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNOZXh0UGFnZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcImJ0bl9uZXh0X3BhZ2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQWRkKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwiYnRuX2FkZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc0luY3JlYXNlUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNSZWR1Y2VkUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5fcmVkdWNlZF9wb3dlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8ocHJpbnRDb2RlLCBjb250ZW50KSB7XHJcbiAgICAgICAgbGV0IHlPZmZzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmludENvZGUpLm9mZnNldFRvcDtcclxuICAgICAgICBjb250ZW50LnNjcm9sbFRvKDAsIHlPZmZzZXQsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDDqMKuwr7Dp8K9wq7DpsKcwo3DpcKKwqHDpcKZwqjDpcKcwrDDpcKdwoDDpcKIwrDDp8K8wpPDpcKtwphcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgc2V0SG9zdFRvU3RvcmFnZSh1cmwpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9zdFVybCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDDpMK7wo7Dp8K8wpPDpcKtwpjDqMKOwrfDpcKPwpbDpsKcwo3DpcKKwqHDpcKZwqjDpcKcwrDDpcKdwoBcclxuICAgICAqL1xyXG4gICAgZ2V0SG9zdEJ5U3RvcmFnZSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvc3RVcmwnKSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIMOlwp/Cn8OlwpDCjcOmwqDCocOpwqrCjFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlRG9tYWluKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlZ3ggPSAvW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0oXFwuW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0pK1xcLj8vO1xyXG4gICAgICAgIHJldHVybiByZWd4LnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSVDDpcKcwrDDpcKdwoDDpsKgwqHDqcKqwoxcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlwNCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWd4ID0gL14oKDI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPykoJHwoPyFcXC4kKVxcLikpezR9JC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ3gudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGljdE5hbWUoaWQsIGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBhcnJbaV1bJ0lEJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV1bJ25hbWUnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVBvd2VyKGRpcmVjdGlvbiwgbW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIHBvd2VyUG9zaXRpb246IG51bWJlciA9IDE1O1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KG1vZHVsZSArIFwiUG93ZXJcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNOdWxsKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHBvd2VyUG9zaXRpb24gPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5jcmVhc2VQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIsOlworCn8Onwo7Ch8OlwrfCssOowq7CvsOlwq7CmsOlwojCsMOmwpzCgMOlwqTCp8OlwoDCvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gKyA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlZHVjZWRQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA8IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIsOlworCn8Onwo7Ch8OlwrfCssOowq7CvsOlwq7CmsOlwojCsMOmwpzCgMOlwrDCj8OlwoDCvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gLSA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcG93ZXJBcnJheSA9IFt7IFwicG93ZXJcIjogMTAsIFwibXNnXCI6IFwiw6XCvcKTw6XCicKNw6TCuMK6w6XCsMKPw6XCisKfw6fCjsKHXCIgfSwgeyBcInBvd2VyXCI6IDE1LCBcIm1zZ1wiOiBcIsOlwr3Ck8OlwonCjcOkwrjCusOkwrjCrcOlworCn8Onwo7Ch1wiIH0sIHsgXCJwb3dlclwiOiAyMCwgXCJtc2dcIjogXCLDpcK9wpPDpcKJwo3DpMK4wrrDpcKkwqfDpcKKwp/Dp8KOwodcIiB9LCB7IFwicG93ZXJcIjogMjUsIFwibXNnXCI6IFwiw6XCvcKTw6XCicKNw6TCuMK6w6fCicK5w6XCpMKnw6XCisKfw6fCjsKHXCIgfV1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3dlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA9PSBwb3dlckFycmF5W2ldWydwb3dlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChwb3dlckFycmF5W2ldWydtc2cnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3dlcihwb3dlclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChtb2R1bGUgKyBcIlBvd2VyXCIsIHBvd2VyUG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ0NvcmUgfSBmcm9tICcuL0NDb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gICAgYXBpQmFzZTogJ2h0dHA6Ly9iYW5rLjUzMnQuY29tJ1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIge1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNldXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEFwaUJhc2UoKSArICcvc2VydmljZS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBhc3luYyBuZXcoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGF3YWl0IHRoaXMubGlzdCh7IGlkOiAnLTEnIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMocmV0WydkYXRhJ10pKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pbmRleE9mKCdJRCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXRbJ2RhdGEnXVtmaWVsZF0gPSByZXRbJ2RhdGEnXVtmaWVsZF0gfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGdldFdzVXJsKCkge1xyXG4gICAgICAgIHZhciBiYXNldXJsID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3N0VXJsJykgfHwgZW52aXJvbm1lbnQuYXBpQmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIGJhc2V1cmwucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIikgKyBcIjo4MDg5L2FuZHJvaWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3BhZ2VcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZShwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9zYXZlXCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGdldChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9nZXRcIiwgeyAnaWQnOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGdldEJ5KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL2dldGJ5XCIsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGxpc3QocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvbGlzdFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUocGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHRoaXMuZ2V0UGF0aEJ5RW50aXR5TmFtZSgpICsgXCIvZGVsZXRlXCIsIHsgXCJpZFwiOiBwYXJhbSB9KTtcclxuICAgIH1cclxuICAgIGhhcyhwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9oYXNcIiwgcGFyYW0pO1xyXG4gICAgfVxyXG4gICAgc3VtKHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh0aGlzLmdldFBhdGhCeUVudGl0eU5hbWUoKSArIFwiL3N1bVwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBjb3VudChwYXJhbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QodGhpcy5nZXRQYXRoQnlFbnRpdHlOYW1lKCkgKyBcIi9jb3VudFwiLCBwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXRoQnlFbnRpdHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eU5hbWUoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVudGl0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZS5yZXBsYWNlKFwiTWFuYWdlclwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRBcGlCYXNlKCkgKyAnL3NlcnZpY2UvJyArIHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDqMKvwrfDpsKxwoLDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woEnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwoLCqMOmwrLCocOmwpzCicOmwp3Cg8OpwpnCkMOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDpsKcwo3DpcKKwqHDpcKZwqjDp8KmwoHDpsKtwqLDqMKuwr/DqcKXwq7Dr8K8woEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jQ29yZS50b2FzdCgnw6fCm8K4w6XChcKzw6jCtcKEw6bCusKQw6bCicK+w6TCuMKNw6XCiMKww6/CvMKBJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY0NvcmUudG9hc3QoJ8OmwpzCjcOlworCocOlwpnCqMOlwofCusOpwpTCmcOlwpXCpsOvwrzCgScpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNDb3JlLnRvYXN0KCfDpsKcwo3DpcKKwqHDpcKZwqjDp8KmwrvDpcKuwrbDpcKHwrrDqMK1wrDDpcKVwqbDr8K8woEnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCYXNlTWFuYWdlciB9IGZyb20gJy4vQmFzZU1hbmFnZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgQ0NvcmUgfSBmcm9tIFwiLi9DQ29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVtYmVyTWFuYWdlciBleHRlbmRzIEJhc2VNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGNDb3JlLCBjb25maWdTZXJ2aWNlKTtcbiAgICB9XG5cbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvbG9naW5cIiwgeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCB0cnVlKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRNZW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9nZXRDdXJyZW50TWVtYmVyXCIsIHt9KTtcbiAgfVxuXG4gIGdldE15RGVwYXJ0bWVudE1lbWJlcnMoY29kZTpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRteWRlcGFydG1lbnRtZW1iZXJzJywgeyAnY29kZSc6IGNvZGUgfSk7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZChwYXJhbXM6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvY2hhbmdlUGFzc3dvcmRcIiwgcGFyYW1zKTtcbiAgfVxuICAvL8OlwojCt8Olwo3CocOlwr7Cl8OlwojCsMOlwoDCn8OnwpTCqMOkwrrCulxuICBnZXRCeShwYXJhbXMpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRieScscGFyYW1zKTtcbiAgfVxuICBxdWlja0xvZ2luKGNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL3F1aWNrbG9naW5cIiwgeyBjb2RlOiBjb2RlIH0pO1xuICB9XG4gIGdldE15dXBEZXBhcnRtZW50KG1lbWJlcklEKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnbWVtYmVyL2dldG15dXBkZXBhcnRtZW50JywgeyBtZW1iZXJJRDogbWVtYmVySUQgfSk7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNWRDs7O1lBR0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUNSO2dCQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCOzs7Ozs7O0FDUkQ7SUFTRSxpQkFBZ0I7Ozs7O0lBRVQsVUFBVSxDQUFDLE9BQU87UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Ozs7O0lBR25CLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztJQUdoQixRQUFRLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHZixRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7O1lBdEJ0QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtBQUlBLE1BQU0sV0FBVyxHQUFHLDJCQUEyQixDQUFDO0FBS2hEOzs7OztJQUNFLFlBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1Ysa0JBQWEsR0FBYixhQUFhO0tBQ25COzs7O0lBRUosY0FBYztRQUNaLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcs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