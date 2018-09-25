import { Injectable } from '@angular/core';
import { BaseManager } from 'core';

@Injectable()
export class HomeManager extends BaseManager {

    /**
     * 根据用户手机号查询银行卡信息
     * @param {Object} params
     * @returns {Promise<any>}
     */
  findByPhoneCard(params : Object = {}) {
    return this.post('customer/list', params);
  }


}
