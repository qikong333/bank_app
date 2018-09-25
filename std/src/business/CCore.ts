import { Injectable } from '@angular/core';
import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Injectable()
export class CCore {
    constructor(
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        public platform: Platform,
        private alertCtrl: AlertController,
        public storage: Storage
    ) { }
    public setHost(host) {
        this.storage.set('Host', host);
    }
    public getHost() {
        return this.storage.get('Host');
    }
    public setCurrentMember(member) {
        this.storage.set('currentMember', JSON.stringify(member));
    }
    public getCurrentMember() {
        return this.storage.get('currentMember');
    }
    public setMenus (menus) {
        this.storage.set('menus', JSON.stringify(menus));
    }
    public getMenus () {
        return this.storage.get('menus');
    }


    public setCurrentPassword(member) {
        this.storage.set('currentPassword', JSON.stringify(member));
    }
    public getCurrentPassword() {
        return this.storage.get('currentPassword');
    }
    isNull(obj) {
        if (obj == "" || obj == null || obj == undefined || obj == "[]" || obj == [] || obj == 'function String() { [native code] }') {
            return true;
        }
        return false;
    }
    fail(ret) {
        if (ret['code'] == 0) {
            // this.alert(ret['msg']);
            return true;
        }
        return false;
    }

    hasNode(datas, id) {
        for (let i = 0; i < datas.length; i++) {
            if (id == datas[i].ID) {
                return true;
            }
        }
        return false;
    }

    hasObj(objs, obj) {
        for (let i = 0; i < objs.length; i++) {
            if (objs[i]['ID'] == obj['ID']) {
                return true;
            }
        }
        return false;
    }

    async loading(content: string) {
        let option = {
            content: content,
            showBackdrop: true
        };
        const loading = await this.loadingCtrl.create(option);
        return await loading.present();
    }

    async alert(title: string, subtitle: string = '') {
        const alert = await this.alertCtrl.create({
            header: title,
            subHeader: subtitle,
            buttons: ['确定']
        });

        await alert.present();
    }


    public confirm(title: string, ok: Function, cancle: Function = () => { }, message: string = '') {
        return this.alertCtrl.create({
            header: title,
            message: message,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        cancle()
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        ok()
                    }
                }
            ]
        })
    }


    async toast(message: string, duration: number = 1000) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    }

    writeEpc(epc: string) {
        //alert(epc)
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].writeEpc(epc);
        }
    }
    //扫描
    scanc(flag, scanFromObj: string) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].scan(flag, scanFromObj);
        }
    }
    scan(flag) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.scan.postMessage();
        }
        if (this.platform.is('android')) {
            window["CNative"].scan(flag);
        }
    }
    getTid() {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.getTid.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].getTid();
        }
    }
    getEpcs() {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.getEpcs.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].getEpcs();
        }
    }

    startRead(flag: string) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.startRead.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].startRead(flag);
        }
    }
    setPower(flag: number) {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            window["webkit"].messageHandlers.setPower.postMessage();
        }
        if (this.platform.is('android')) {
            return window["CNative"].setPower(flag);
        }
    }

    transDate(t) {
        var date = new Date(t);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        var myFormattedDate = year + "-" + (monthIndex + 1) + "-" + day;
        return myFormattedDate;
    }


    getNow() {
        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        var myFormattedDate = year + "-" + (monthIndex + 1) + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        return myFormattedDate;
    }

    getNowDate() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (month < 10) {
            var myFormattedDate = year + "-" + "0" + month + "-" + day;
        } else {
            var myFormattedDate = year + "-" + month + "-" + day;
        }
        return myFormattedDate;
    }

    getLastYearDate() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear() - 1;
        if (month < 10) {
            var myFormattedDate = year + "-" + "0" + month + "-" + day;
        } else {
            var myFormattedDate = year + "-" + month + "-" + day;
        }
        return myFormattedDate;
    }

    isScanSubmit(value) {
        if (value == 'btn_submit') {
            return true
        }
        return false;
    }
    isScanCancel(value) {
        if (value == 'btn_cancel') {
            return true
        }
        return false;
    }
    isScanCode(value) {
        if (value != 'btn_submit' && value != 'btn_cancel' && value != "btn_increase_power" && value != "btn_reduced_power") {
            return true
        }
        return false;
    }
    isNextPage(value) {
        if (value == "btn_next_page") {
            return true;
        }
        return false;
    }
    isScanAdd(value) {
        if (value == "btn_add") {
            return true;
        }
        return false;
    }
    isIncreasePower(value) {
        if (value == "btn_increase_power") {
            return true;
        }
        return false;
    }
    isReducedPower(value) {
        if (value == "btn_reduced_power") {
            return true;
        }
        return false;
    }

    scrollTo(printCode, content) {
        let yOffset = document.getElementById(printCode).offsetTop;
        content.scrollTo(0, yOffset, 300);
    }

    /**
     * 设置服务器地址到缓存
     * @param url
     */
    setHostToStorage(url) {
        localStorage.setItem('hostUrl', url);
    }

    /**
     * 从缓存获取服务器地址
     */
    getHostByStorage() {
        return localStorage.getItem('hostUrl') || '';
    }

    /**
     * 域名校验
     * @param value
     */
    validateDomain(value) {
        let regx = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return regx.test(value);
    }

    /**
     * IP地址校验
     * @param value
     */
    validateIp4(value) {
        let regx = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/;
        return regx.test(value);
    }

    getDictName(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (id == arr[i]['ID']) {
                return arr[i]['name'];
            }
        }
    }
    changePower(direction, module) {
        var powerPosition: number = 15;

        this.storage.get(module + "Power").then(res => {
            if (!this.isNull(res)) {
                powerPosition = res;
            }

            if (this.isIncreasePower(direction)) {
                if (powerPosition > 20) {
                    this.toast("功率已设定到最大值");
                } else {
                    powerPosition = powerPosition + 5;
                }
            }

            if (this.isReducedPower(direction)) {
                if (powerPosition < 15) {
                    this.toast("功率已设定到最小值");
                } else {
                    powerPosition = powerPosition - 5;
                }
            }

            var powerArray = [{ "power": 10, "msg": "当前为小功率" }, { "power": 15, "msg": "当前为中功率" }, { "power": 20, "msg": "当前为大功率" }, { "power": 25, "msg": "当前为特大功率" }]
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

