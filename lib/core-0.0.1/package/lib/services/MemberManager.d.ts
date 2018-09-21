import { HttpClient } from '@angular/common/http';
import { BaseManager } from './BaseManager';
import { ConfigService } from "../config.service";
import { CCore } from "./CCore";
export declare class MemberManager extends BaseManager {
    http: HttpClient;
    cCore: CCore;
    configService: ConfigService;
    constructor(http: HttpClient, cCore: CCore, configService: ConfigService);
    login(username: string, password: string): Promise<any>;
    getCurrentMember(): Promise<any>;
    getMyDepartmentMembers(code: string): Promise<any>;
    changePassword(params: any): Promise<any>;
    getBy(params: any): Promise<any>;
    quickLogin(code: any): Promise<any>;
    getMyupDepartment(memberID: any): Promise<any>;
}
