import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CDict } from './../../business/CDict';
import { MemberManager,CCore } from 'core';

@Component({
  selector: 'changepassword',
  templateUrl: 'changepassword.html',
})

export class ChangePasswordComponent {
  private password: string;
  private newPassword: string;
  private verfyNewPassword: string;
  constructor(
    public alertCtrl: AlertController,
    public CDict:CDict,
    public memberManager:MemberManager,
    public CCore:CCore
  ) {
  }


 async changePassword() {
    if(!this.password || this.password === ''){
      this.CCore.alert("请输入原密码！")
      return
    }
    if(!this.newPassword || this.newPassword === ''){
      this.CCore.alert("请输入新密码！")
      return
    }
    if(!this.verfyNewPassword || this.verfyNewPassword === ''){
      this.CCore.alert("请再次输入新密码！")
      return
    }
    
    if (this.newPassword != this.verfyNewPassword) {
      this.CCore.alert("两次输入不一致，请重新确认。",'')
    } else {
      let params ={
        password: this.password,
        newPassword: this.newPassword,
        verfyNewPassword: this.verfyNewPassword
      }
      let result =  await this.memberManager.changePassword(params);
      if(result['code']==1){
        this.CCore.toast("密码修改成功。");
      }else{
        this.CCore.alert("密码修改失败。");
      }
    }
  }

  // back() {
  //   this.viewCtrl.dismiss();
  // }

}
