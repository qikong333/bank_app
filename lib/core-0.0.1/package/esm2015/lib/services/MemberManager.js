/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseManager } from './BaseManager';
import { ConfigService } from "../config.service";
import { CCore } from "./CCore";
export class MemberManager extends BaseManager {
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
if (false) {
    /** @type {?} */
    MemberManager.prototype.http;
    /** @type {?} */
    MemberManager.prototype.cCore;
    /** @type {?} */
    MemberManager.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvTWVtYmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUdoQyxNQUFNLG9CQUFxQixTQUFRLFdBQVc7Ozs7OztJQUUxQyxZQUFtQixJQUFnQixFQUFRLEtBQVksRUFBUyxhQUE0QjtRQUN4RixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQURuQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVEsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0tBRTNGOzs7Ozs7SUFFSCxLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEY7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBRUQsc0JBQXNCLENBQUMsSUFBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNyRTs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBVztRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsUUFBUTtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN0RTs7O1lBL0JGLFVBQVU7Ozs7WUFMRixVQUFVO1lBR1YsS0FBSztZQURMLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmFzZU1hbmFnZXIgfSBmcm9tICcuL0Jhc2VNYW5hZ2VyJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IENDb3JlIH0gZnJvbSBcIi4vQ0NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbWJlck1hbmFnZXIgZXh0ZW5kcyBCYXNlTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCxwdWJsaWMgY0NvcmU6IENDb3JlLCBwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgICAgICBzdXBlcihodHRwLCBjQ29yZSwgY29uZmlnU2VydmljZSk7XG4gICAgfVxuXG4gIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL2xvZ2luXCIsIHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSwgdHJ1ZSk7XG4gIH1cblxuICBnZXRDdXJyZW50TWVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvZ2V0Q3VycmVudE1lbWJlclwiLCB7fSk7XG4gIH1cblxuICBnZXRNeURlcGFydG1lbnRNZW1iZXJzKGNvZGU6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCdtZW1iZXIvZ2V0bXlkZXBhcnRtZW50bWVtYmVycycsIHsgJ2NvZGUnOiBjb2RlIH0pO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQocGFyYW1zOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL2NoYW5nZVBhc3N3b3JkXCIsIHBhcmFtcyk7XG4gIH1cbiAgLy/liLfljaHlvpfliLDlgJ/nlKjkurpcbiAgZ2V0QnkocGFyYW1zKXtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCdtZW1iZXIvZ2V0YnknLHBhcmFtcyk7XG4gIH1cbiAgcXVpY2tMb2dpbihjb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9xdWlja2xvZ2luXCIsIHsgY29kZTogY29kZSB9KTtcbiAgfVxuICBnZXRNeXVwRGVwYXJ0bWVudChtZW1iZXJJRCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRteXVwZGVwYXJ0bWVudCcsIHsgbWVtYmVySUQ6IG1lbWJlcklEIH0pO1xuICB9XG5cbn1cbiJdfQ==