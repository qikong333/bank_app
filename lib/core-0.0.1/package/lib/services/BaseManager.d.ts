import { CCore } from './CCore';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from "../config.service";
export declare const environment: {
    apiBase: string;
};
export declare class BaseManager {
    http: HttpClient;
    cCore: CCore;
    configService: ConfigService;
    constructor(http: HttpClient, cCore: CCore, configService: ConfigService);
    new(): Promise<any>;
    getWsUrl(): string;
    page(param: any): Promise<any>;
    save(param: any): Promise<any>;
    get(param: any): Promise<any>;
    getBy(param: any): Promise<any>;
    list(param: any): Promise<any>;
    delete(param: any): Promise<any>;
    has(param: any): Promise<any>;
    sum(param: any): Promise<any>;
    count(param: any): Promise<any>;
    getPathByEntityName(): string;
    getEntityName(): string;
    post(url: string, body: object, loading?: boolean): Promise<any>;
}
