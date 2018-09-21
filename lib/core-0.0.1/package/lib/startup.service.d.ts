import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
export declare class StartupService {
    private httpClient;
    private configService;
    constructor(httpClient: HttpClient, configService: ConfigService);
    loadBaseConfig(): Promise<any>;
}
