import { Injector } from '@angular/core';
import { ConfigurationParameter } from './configuration-parameters.model';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../angular-hal/src/lib/rest.service';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigurationParametersService extends RestService<ConfigurationParameter> {
    private http;
    /** API resource path */
    CONFIGURATION_PARAMETERS_API: string;
    /** constructor */
    constructor(injector: Injector, http: HttpClient);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurationParametersService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConfigurationParametersService>;
}

//# sourceMappingURL=configuration-parameters.service.d.ts.map