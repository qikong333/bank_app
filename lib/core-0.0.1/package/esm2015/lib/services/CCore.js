/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
export class CCore {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
if (false) {
    /** @type {?} */
    CCore.prototype.loadingCtrl;
    /** @type {?} */
    CCore.prototype.toastCtrl;
    /** @type {?} */
    CCore.prototype.platform;
    /** @type {?} */
    CCore.prototype.alertCtrl;
    /** @type {?} */
    CCore.prototype.storage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0NvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL0NDb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsTUFBTTs7Ozs7Ozs7SUFDRixZQUNZLGFBQ0EsV0FDRCxVQUNDLFdBQ0Q7UUFKQyxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDVixZQUFPLEdBQVAsT0FBTztLQUNiOzs7OztJQUNFLE9BQU8sQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7OztJQUU1QixPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0lBRTdCLGdCQUFnQixDQUFDLE1BQU07UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFdkQsZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztJQUV0QyxRQUFRLENBQUUsS0FBSztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUU5QyxRQUFR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LEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksYUFBYSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUM7S0FFTjs7O1lBL1ZKLFVBQVU7Ozs7WUFGMEMsaUJBQWlCO1lBQWxDLGVBQWU7WUFBMUMsUUFBUTtZQUFFLGVBQWU7WUFDekIsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0sIEFsZXJ0Q29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ0NvcmUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcclxuICAgICAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgIHByaXZhdGUgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICAgICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VcclxuICAgICkgeyB9XHJcbiAgICBwdWJsaWMgc2V0SG9zdChob3N0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnSG9zdCcsIGhvc3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEhvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ0hvc3QnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TWVtYmVyKG1lbWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ2N1cnJlbnRNZW1iZXInLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50TWVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KCdjdXJyZW50TWVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0TWVudXMgKG1lbnVzKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnbWVudXMnLCBKU09OLnN0cmluZ2lmeShtZW51cykpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE1lbnVzICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCgnbWVudXMnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRQYXNzd29yZChtZW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdjdXJyZW50UGFzc3dvcmQnLCBKU09OLnN0cmluZ2lmeShtZW1iZXIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ2N1cnJlbnRQYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gICAgaXNOdWxsKG9iaikge1xyXG4gICAgICAgIGlmIChvYmogPT0gXCJcIiB8fCBvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkIHx8IG9iaiA9PSBcIltdXCIgfHwgb2JqID09IFtdIHx8IG9iaiA9PSAnZnVuY3Rpb24gU3RyaW5nKCkgeyBbbmF0aXZlIGNvZGVdIH0nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmYWlsKHJldCkge1xyXG4gICAgICAgIGlmIChyZXRbJ2NvZGUnXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYWxlcnQocmV0Wydtc2cnXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzTm9kZShkYXRhcywgaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBkYXRhc1tpXS5JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc09iaihvYmpzLCBvYmopIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9ianNbaV1bJ0lEJ10gPT0gb2JqWydJRCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZGluZyhjb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICBzaG93QmFja2Ryb3A6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZShvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbGVydCh0aXRsZTogc3RyaW5nLCBzdWJ0aXRsZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIHN1YkhlYWRlcjogc3VidGl0bGUsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsn56Gu5a6aJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSh0aXRsZTogc3RyaW5nLCBvazogRnVuY3Rpb24sIGNhbmNsZTogRnVuY3Rpb24gPSAoKSA9PiB7IH0sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5Y+W5raIJyxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn56Gu5a6aJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyB0b2FzdChtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSAxMDAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdC5wcmVzZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVFcGMoZXBjOiBzdHJpbmcpIHtcclxuICAgICAgICAvL2FsZXJ0KGVwYylcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0ud3JpdGVFcGMoZXBjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aJq+aPj1xyXG4gICAgc2NhbmMoZmxhZywgc2NhbkZyb21PYmo6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zY2FuLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wiQ05hdGl2ZVwiXS5zY2FuKGZsYWcsIHNjYW5Gcm9tT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY2FuKGZsYWcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc2Nhbi5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIkNOYXRpdmVcIl0uc2NhbihmbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRUaWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldFRpZC5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLmdldFRpZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEVwY3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwYWQnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGhvbmUnKSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl0ubWVzc2FnZUhhbmRsZXJzLmdldEVwY3MucG9zdE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W1wiQ05hdGl2ZVwiXS5nZXRFcGNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UmVhZChmbGFnOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBhZCcpIHx8IHRoaXMucGxhdGZvcm0uaXMoJ2lwaG9uZScpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXS5tZXNzYWdlSGFuZGxlcnMuc3RhcnRSZWFkLnBvc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tcIkNOYXRpdmVcIl0uc3RhcnRSZWFkKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFBvd2VyKGZsYWc6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtLmlzKCdpcGFkJykgfHwgdGhpcy5wbGF0Zm9ybS5pcygnaXBob25lJykpIHtcclxuICAgICAgICAgICAgd2luZG93W1wid2Via2l0XCJdLm1lc3NhZ2VIYW5kbGVycy5zZXRQb3dlci5wb3N0TWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbXCJDTmF0aXZlXCJdLnNldFBvd2VyKGZsYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc0RhdGUodCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIChtb250aEluZGV4ICsgMSkgKyBcIi1cIiArIGRheTtcclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXROb3coKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyAobW9udGhJbmRleCArIDEpICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgICAgIHJldHVybiBteUZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93RGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcclxuICAgICAgICAgICAgdmFyIG15Rm9ybWF0dGVkRGF0ZSA9IHllYXIgKyBcIi1cIiArIFwiMFwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG15Rm9ybWF0dGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0WWVhckRhdGUoKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpIC0gMTtcclxuICAgICAgICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgICAgICAgICB2YXIgbXlGb3JtYXR0ZWREYXRlID0geWVhciArIFwiLVwiICsgXCIwXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBteUZvcm1hdHRlZERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXlGb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2NhblN1Ym1pdCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAnYnRuX3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQ2FuY2VsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09ICdidG5fY2FuY2VsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc1NjYW5Db2RlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9ICdidG5fc3VibWl0JyAmJiB2YWx1ZSAhPSAnYnRuX2NhbmNlbCcgJiYgdmFsdWUgIT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIiAmJiB2YWx1ZSAhPSBcImJ0bl9yZWR1Y2VkX3Bvd2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNOZXh0UGFnZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBcImJ0bl9uZXh0X3BhZ2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNTY2FuQWRkKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwiYnRuX2FkZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc0luY3JlYXNlUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5faW5jcmVhc2VfcG93ZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNSZWR1Y2VkUG93ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCJidG5fcmVkdWNlZF9wb3dlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8ocHJpbnRDb2RlLCBjb250ZW50KSB7XHJcbiAgICAgICAgbGV0IHlPZmZzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmludENvZGUpLm9mZnNldFRvcDtcclxuICAgICAgICBjb250ZW50LnNjcm9sbFRvKDAsIHlPZmZzZXQsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mnI3liqHlmajlnLDlnYDliLDnvJPlrZhcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgc2V0SG9zdFRvU3RvcmFnZSh1cmwpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9zdFVybCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47nvJPlrZjojrflj5bmnI3liqHlmajlnLDlnYBcclxuICAgICAqL1xyXG4gICAgZ2V0SG9zdEJ5U3RvcmFnZSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvc3RVcmwnKSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWfn+WQjeagoemqjFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlRG9tYWluKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlZ3ggPSAvW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0oXFwuW2EtekEtWjAtOV1bLWEtekEtWjAtOV17MCw2Mn0pK1xcLj8vO1xyXG4gICAgICAgIHJldHVybiByZWd4LnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSVDlnLDlnYDmoKHpqoxcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlwNCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWd4ID0gL14oKDI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPykoJHwoPyFcXC4kKVxcLikpezR9JC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ3gudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGljdE5hbWUoaWQsIGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBhcnJbaV1bJ0lEJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV1bJ25hbWUnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVBvd2VyKGRpcmVjdGlvbiwgbW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIHBvd2VyUG9zaXRpb246IG51bWJlciA9IDE1O1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KG1vZHVsZSArIFwiUG93ZXJcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNOdWxsKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHBvd2VyUG9zaXRpb24gPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5jcmVhc2VQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIuWKn+eOh+W3suiuvuWumuWIsOacgOWkp+WAvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gKyA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlZHVjZWRQb3dlcihkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA8IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIuWKn+eOh+W3suiuvuWumuWIsOacgOWwj+WAvFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJQb3NpdGlvbiA9IHBvd2VyUG9zaXRpb24gLSA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcG93ZXJBcnJheSA9IFt7IFwicG93ZXJcIjogMTAsIFwibXNnXCI6IFwi5b2T5YmN5Li65bCP5Yqf546HXCIgfSwgeyBcInBvd2VyXCI6IDE1LCBcIm1zZ1wiOiBcIuW9k+WJjeS4uuS4reWKn+eOh1wiIH0sIHsgXCJwb3dlclwiOiAyMCwgXCJtc2dcIjogXCLlvZPliY3kuLrlpKflip/njodcIiB9LCB7IFwicG93ZXJcIjogMjUsIFwibXNnXCI6IFwi5b2T5YmN5Li654m55aSn5Yqf546HXCIgfV1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3dlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG93ZXJQb3NpdGlvbiA9PSBwb3dlckFycmF5W2ldWydwb3dlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdChwb3dlckFycmF5W2ldWydtc2cnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3dlcihwb3dlclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChtb2R1bGUgKyBcIlBvd2VyXCIsIHBvd2VyUG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19