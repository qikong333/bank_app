import { Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CDict } from './../../business/CDict';
import { CCore,MemberManager } from 'core';
import { RoleFunctionManager } from "../../business/RoleFunctionManager";

@Component({
    selector: 'member-login',
    templateUrl: 'login.html',
    styleUrls : ['./login.scss']
})

export class LoginPage implements OnInit {

    ngOnInit(): void {
    }

    username: string;
    password: string;
    loginType = "账号登录";
    codeFlage = true;
    constructor(
        public router: Router,
        public memberManager: MemberManager,
        public cDict: CDict,
        public storage: Storage,
        public cCore: CCore,
        public roleFunction: RoleFunctionManager,
        private zone: NgZone,
    ) {
        this.cCore.getCurrentPassword().then(res => {
            if (res) {
                this.password = JSON.parse(res);
                if (this.username != null && this.password != null) {
                    this.login();
                }
            }
        });
        // this.cCore.getCurrentMember().then(result => {
        //     if (result) {
        //         this.username = JSON.parse(result);
        //         if (!this.cCore.isNull(this.username) && !this.cCore.isNull(this.password)) {
        //             this.username = JSON.parse(result).data.username;
        //             this.login();
        //         }
        //     }
        // })
        // window["CNativeBack"] = {
        //     zone: this.zone,
        //     sendIc: (value) => this.scanLogin(value),
        //     component: this
        // };
    }
    async login() {
        try {
            let result = await this.memberManager.login(this.username, this.password);
            this.cCore.setCurrentPassword(this.password);
            if (result && result.code !== 1) {
                this.cCore.toast(String(result['msg']), 2000);
                return;
            }
            let member = await this.memberManager.getCurrentMember();
            Object.assign(member, { password: this.password });
            this.cDict.CurrentMemberID = member['ID'];
            this.cDict.CurrentMember = member;
            this.cCore.setCurrentMember(member);
            let appMenus = await this.roleFunction.getAppMenus();
            this.cCore.setMenus(appMenus.data);
            localStorage.setItem('menu',JSON.stringify(appMenus.data));
            this.router.navigateByUrl('/app/tabs/(home:home)');
        } catch (error) {
            console.log(error)
        }
    }

    changeLoginType() {
        if (this.codeFlage == false) {
            this.loginType = "账号登录";
            this.codeFlage = true;
        } else {
            this.loginType = "密码登录";
            this.codeFlage = false;
        }
    }
    changeUrl() {
        this.router.navigateByUrl('/app/tabs/(home:home)');
    }

    async scanLogin(code) {
        if (this.cCore.isNull(code)) {
            return;
        }
        const result = await this.memberManager.quickLogin(code);
        this.redirect(result);
    }
    async redirect(result) {
        let member = await this.memberManager.getCurrentMember();
        if (result.code == 1) {
            Object.assign(member, { password: this.password });
            this.cDict.CurrentMemberID = member['ID'];
            this.cDict.CurrentMember = member;
            this.cCore.setCurrentMember(member)
            let appMenus = await this.roleFunction.getAppMenus();
            this.cDict.Menus = appMenus.data;
            this.router.navigateByUrl('/app/tabs/(home:home)');
        } else {
            this.cCore.toast(String(result['msg']), 2000);

        }
    }

}
