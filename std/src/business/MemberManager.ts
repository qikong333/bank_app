import { Injectable } from '@angular/core';
import { BaseManager } from './BaseManager';

@Injectable()
export class MemberManager extends BaseManager {

  login(username: string, password: string) {
    return this.post("member/login", { username: username, password: password }, true);
  }

  getCurrentMember() {
    return this.post("member/getCurrentMember", {});
  }

  getMyDepartmentMembers(code:string){
    return this.post('member/getmydepartmentmembers', { 'code': code });
  }

  changePassword(params: any) {
    return this.post("member/changePassword", params);
  }
  //刷卡得到借用人
  getBy(params){
    return this.post('member/getby',params);
  }
  quickLogin(code) {
    return this.post("member/quicklogin", { code: code });
  }
  getMyupDepartment(memberID) {
    return this.post('member/getmyupdepartment', { memberID: memberID });
  }

}
