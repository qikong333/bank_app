import { Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
export declare class CCore {
    private loadingCtrl;
    private toastCtrl;
    platform: Platform;
    private alertCtrl;
    storage: Storage;
    constructor(loadingCtrl: LoadingController, toastCtrl: ToastController, platform: Platform, alertCtrl: AlertController, storage: Storage);
    setHost(host: any): void;
    getHost(): Promise<any>;
    setCurrentMember(member: any): void;
    getCurrentMember(): Promise<any>;
    setMenus(menus: any): void;
    getMenus(): Promise<any>;
    setCurrentPassword(member: any): void;
    getCurrentPassword(): Promise<any>;
    isNull(obj: any): boolean;
    fail(ret: any): boolean;
    hasNode(datas: any, id: any): boolean;
    hasObj(objs: any, obj: any): boolean;
    loading(content: string): Promise<void>;
    alert(title: string, subtitle?: string): Promise<void>;
    confirm(title: string, ok: Function, cancle?: Function, message?: string): Promise<HTMLIonAlertElement>;
    toast(message: string, duration?: number): Promise<void>;
    writeEpc(epc: string): void;
    scanc(flag: any, scanFromObj: string): void;
    scan(flag: any): void;
    getTid(): any;
    getEpcs(): any;
    startRead(flag: string): any;
    setPower(flag: number): any;
    transDate(t: any): string;
    getNow(): string;
    getNowDate(): string;
    getLastYearDate(): string;
    isScanSubmit(value: any): boolean;
    isScanCancel(value: any): boolean;
    isScanCode(value: any): boolean;
    isNextPage(value: any): boolean;
    isScanAdd(value: any): boolean;
    isIncreasePower(value: any): boolean;
    isReducedPower(value: any): boolean;
    scrollTo(printCode: any, content: any): void;
    /**
     * 设置服务器地址到缓存
     * @param url
     */
    setHostToStorage(url: any): void;
    /**
     * 从缓存获取服务器地址
     */
    getHostByStorage(): string;
    /**
     * 域名校验
     * @param value
     */
    validateDomain(value: any): boolean;
    /**
     * IP地址校验
     * @param value
     */
    validateIp4(value: any): boolean;
    getDictName(id: any, arr: any): any;
    changePower(direction: any, module: any): void;
}
