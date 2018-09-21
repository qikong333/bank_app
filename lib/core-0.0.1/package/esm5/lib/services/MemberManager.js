/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseManager } from './BaseManager';
import { ConfigService } from "../config.service";
import { CCore } from "./CCore";
var MemberManager = /** @class */ (function (_super) {
    tslib_1.__extends(MemberManager, _super);
    function MemberManager(http, cCore, configService) {
        var _this = _super.call(this, http, cCore, configService) || this;
        _this.http = http;
        _this.cCore = cCore;
        _this.configService = configService;
        return _this;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    MemberManager.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        return this.post("member/login", { username: username, password: password }, true);
    };
    /**
     * @return {?}
     */
    MemberManager.prototype.getCurrentMember = /**
     * @return {?}
     */
    function () {
        return this.post("member/getCurrentMember", {});
    };
    /**
     * @param {?} code
     * @return {?}
     */
    MemberManager.prototype.getMyDepartmentMembers = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.post('member/getmydepartmentmembers', { 'code': code });
    };
    /**
     * @param {?} params
     * @return {?}
     */
    MemberManager.prototype.changePassword = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return this.post("member/changePassword", params);
    };
    //刷卡得到借用人
    /**
     * @param {?} params
     * @return {?}
     */
    MemberManager.prototype.getBy = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return this.post('member/getby', params);
    };
    /**
     * @param {?} code
     * @return {?}
     */
    MemberManager.prototype.quickLogin = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.post("member/quicklogin", { code: code });
    };
    /**
     * @param {?} memberID
     * @return {?}
     */
    MemberManager.prototype.getMyupDepartment = /**
     * @param {?} memberID
     * @return {?}
     */
    function (memberID) {
        return this.post('member/getmyupdepartment', { memberID: memberID });
    };
    MemberManager.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MemberManager.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CCore },
        { type: ConfigService }
    ]; };
    return MemberManager;
}(BaseManager));
export { MemberManager };
if (false) {
    /** @type {?} */
    MemberManager.prototype.http;
    /** @type {?} */
    MemberManager.prototype.cCore;
    /** @type {?} */
    MemberManager.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvTWVtYmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7O0lBR0cseUNBQVc7SUFFMUMsdUJBQW1CLElBQWdCLEVBQVEsS0FBWSxFQUFTLGFBQTRCO1FBQTVGLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsU0FDcEM7UUFGa0IsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUFRLFdBQUssR0FBTCxLQUFLLENBQU87UUFBUyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7S0FFM0Y7Ozs7OztJQUVILDZCQUFLOzs7OztJQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEY7Ozs7SUFFRCx3Q0FBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNqRDs7Ozs7SUFFRCw4Q0FBc0I7Ozs7SUFBdEIsVUFBdUIsSUFBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNyRTs7Ozs7SUFFRCxzQ0FBYzs7OztJQUFkLFVBQWUsTUFBVztRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbkQ7SUFDRCxTQUFTOzs7OztJQUNULDZCQUFLOzs7O0lBQUwsVUFBTSxNQUFNO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxNQUFNLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFDRCxrQ0FBVTs7OztJQUFWLFVBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEOzs7OztJQUNELHlDQUFpQjs7OztJQUFqQixVQUFrQixRQUFRO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3RFOztnQkEvQkYsVUFBVTs7OztnQkFMRixVQUFVO2dCQUdWLEtBQUs7Z0JBREwsYUFBYTs7d0JBSHRCO0VBT21DLFdBQVc7U0FBakMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCYXNlTWFuYWdlciB9IGZyb20gJy4vQmFzZU1hbmFnZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgQ0NvcmUgfSBmcm9tIFwiLi9DQ29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVtYmVyTWFuYWdlciBleHRlbmRzIEJhc2VNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LHB1YmxpYyBjQ29yZTogQ0NvcmUsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGNDb3JlLCBjb25maWdTZXJ2aWNlKTtcbiAgICB9XG5cbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvbG9naW5cIiwgeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9LCB0cnVlKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRNZW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChcIm1lbWJlci9nZXRDdXJyZW50TWVtYmVyXCIsIHt9KTtcbiAgfVxuXG4gIGdldE15RGVwYXJ0bWVudE1lbWJlcnMoY29kZTpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRteWRlcGFydG1lbnRtZW1iZXJzJywgeyAnY29kZSc6IGNvZGUgfSk7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZChwYXJhbXM6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoXCJtZW1iZXIvY2hhbmdlUGFzc3dvcmRcIiwgcGFyYW1zKTtcbiAgfVxuICAvL+WIt+WNoeW+l+WIsOWAn+eUqOS6ulxuICBnZXRCeShwYXJhbXMpe1xuICAgIHJldHVybiB0aGlzLnBvc3QoJ21lbWJlci9nZXRieScscGFyYW1zKTtcbiAgfVxuICBxdWlja0xvZ2luKGNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KFwibWVtYmVyL3F1aWNrbG9naW5cIiwgeyBjb2RlOiBjb2RlIH0pO1xuICB9XG4gIGdldE15dXBEZXBhcnRtZW50KG1lbWJlcklEKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnbWVtYmVyL2dldG15dXBkZXBhcnRtZW50JywgeyBtZW1iZXJJRDogbWVtYmVySUQgfSk7XG4gIH1cblxufVxuIl19