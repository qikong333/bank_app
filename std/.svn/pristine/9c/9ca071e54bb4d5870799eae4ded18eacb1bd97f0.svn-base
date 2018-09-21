import { CCore } from './CCore';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

export const environment = {
    apiBase: 'http://bank.532t.com'
};

@Injectable()
export class BaseManager {
    private baseurl = (localStorage.getItem('hostUrl') || environment.apiBase) + '/service/';

    constructor(private http: HttpClient,
                private loadingCtrl: LoadingController,
                public cCore: CCore) {
    }
    async new() {
        let ret = await this.list({ id: '-1' });
        for (const field of Object.keys(ret['data'])) {
            if (field.indexOf('ID') != -1) {
                ret['data'][field] = ret['data'][field] || '';
            }
        }
        return ret;
    }
    getWsUrl() {
        var baseurl = (localStorage.getItem('hostUrl') || environment.apiBase);
        return "ws://" + baseurl.replace("http://", "") + ":8089/android";
    }

    page(param) {
        return this.post(this.getPathByEntityName() + "/page", param);
    }
    save(param) {
        return this.post(this.getPathByEntityName() + "/save", param);
    }
    get(param) {
        return this.post(this.getPathByEntityName() + "/get", { 'id': param });
    }
    getBy(param) {
        return this.post(this.getPathByEntityName() + "/getby", param);
    }
    list(param) {
        return this.post(this.getPathByEntityName() + "/list", param);
    }
    delete(param) {
        return this.post(this.getPathByEntityName() + "/delete", { "id": param });
    }
    has(param) {
        return this.post(this.getPathByEntityName() + "/has", param);
    }
    sum(param) {
        return this.post(this.getPathByEntityName() + "/sum", param);
    }
    count(param) {
        return this.post(this.getPathByEntityName() + "/count", param);
    }
    getPathByEntityName() {
        return this.getEntityName().toLowerCase();
    }

    getEntityName() {
        return this.constructor.name.replace("Manager", "");
    }

    public post(url: string, body: object, loading: boolean = false): Promise<any> {
        url = this.baseurl + url;
        return this.http.post(url, body, { withCredentials: true }).toPromise().then(res => {
            return res;
        }).catch(err => {
            switch (err.status) {
                case 400:
                    this.cCore.toast('请求参数错误！');
                    break;
                case 401:
                    this.cCore.toast('您没有权限！')
                    break;
                case 403:
                    this.cCore.toast('服务器禁止访问！')
                    break;
                case 404:
                    this.cCore.toast('相关资源找不到！')
                    break;
                case 500:
                    this.cCore.toast('服务器出错啦！')
                    break;
                case 503:
                    this.cCore.toast('服务器离家出走啦！')
                    break;
                default:
                    break;
            }
        });
    }
}
