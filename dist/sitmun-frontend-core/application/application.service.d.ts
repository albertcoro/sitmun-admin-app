import { Application } from './application.model';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../angular-hal/src/lib/rest.service';
/** Application manager service */
export declare class ApplicationService extends RestService<Application> {
    private http;
    /** API base path */
    API: string;
    /** API resource path */
    APPLICATION_API: string;
    /** constructor */
    constructor(injector: Injector, http: HttpClient);
    /** remove application*/
    remove(item: Application): Observable<Object>;
    /** save application*/
    save(item: Application): Observable<any>;
}
