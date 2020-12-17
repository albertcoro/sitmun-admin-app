import { ServiceParameter } from './service-parameter.model';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../angular-hal/src/lib/rest.service';
/** Service parameter manager service */
export declare class ServiceParameterService extends RestService<ServiceParameter> {
    private http;
    /** API base path */
    API: string;
    /** API resource path */
    SERVICE_PARAMETER_API: string;
    /** constructor */
    constructor(injector: Injector, http: HttpClient);
    /** remove service parameter*/
    remove(item: ServiceParameter): Observable<Object>;
    /** save service parameter*/
    save(item: ServiceParameter): Observable<any>;
}
