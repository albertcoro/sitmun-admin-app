/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CartographyAvailability } from './cartography-availability.model';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../angular-hal/src/lib/rest.service';
/**
 * CartographyAvailability manager service
 */
var CartographyAvailabilityService = /** @class */ (function (_super) {
    tslib_1.__extends(CartographyAvailabilityService, _super);
    /** constructor */
    function CartographyAvailabilityService(injector, http) {
        var _this = _super.call(this, CartographyAvailability, "cartography-availabilities", injector) || this;
        _this.http = http;
        /**
         * API resource path
         */
        _this.CARTOGRAPHY_AVAILABILITY_API = 'cartography-availabilities';
        return _this;
    }
    /** remove cartography availability*/
    /**
     * remove cartography availability
     * @param {?} item
     * @return {?}
     */
    CartographyAvailabilityService.prototype.remove = /**
     * remove cartography availability
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.http.delete(item._links.self.href);
    };
    /** save cartography availability*/
    /**
     * save cartography availability
     * @param {?} item
     * @return {?}
     */
    CartographyAvailabilityService.prototype.save = /**
     * save cartography availability
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var result;
        if (item._links != null) {
            result = this.http.put(item._links.self.href, item);
            if (item.cartography != null) {
                item.substituteRelation('cartography', item.cartography).subscribe(function (result) {
                }, function (error) { return console.error(error); });
            }
            if (item.territory != null) {
                item.substituteRelation('territory', item.territory).subscribe(function (result) {
                }, function (error) { return console.error(error); });
            }
        }
        else {
            item.territory = item.territory._links.self.href;
            item.cartography = item.cartography._links.self.href;
            result = this.http.post(this.resourceService.getResourceUrl(this.CARTOGRAPHY_AVAILABILITY_API), item);
        }
        return result;
    };
    CartographyAvailabilityService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CartographyAvailabilityService.ctorParameters = function () { return [
        { type: Injector },
        { type: HttpClient }
    ]; };
    return CartographyAvailabilityService;
}(RestService));
export { CartographyAvailabilityService };
if (false) {
    /**
     * API resource path
     * @type {?}
     */
    CartographyAvailabilityService.prototype.CARTOGRAPHY_AVAILABILITY_API;
    /** @type {?} */
    CartographyAvailabilityService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydG9ncmFwaHktYXZhaWxhYmlsaXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0bXVuL2Zyb250ZW5kLWNvcmUvIiwic291cmNlcyI6WyJjYXJ0b2dyYXBoeS9jYXJ0b2dyYXBoeS1hdmFpbGFiaWxpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7O0lBSVosMERBQW9DO0lBTXRGLGtCQUFrQjtJQUNsQix3Q0FBWSxRQUFrQixFQUFTLElBQWdCO1FBQXZELFlBQ0Usa0JBQU0sdUJBQXVCLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLFNBQ3ZFO1FBRnNDLFVBQUksR0FBSixJQUFJLENBQVk7Ozs7NkNBSGpCLDRCQUE0Qjs7S0FLakU7SUFFRCxxQ0FBcUM7Ozs7OztJQUNyQywrQ0FBTTs7Ozs7SUFBTixVQUFPLElBQTZCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FFaEQ7SUFFRCxtQ0FBbUM7Ozs7OztJQUNuQyw2Q0FBSTs7Ozs7SUFBSixVQUFLLElBQTZCOztRQUNoQyxJQUFJLE1BQU0sQ0FBcUI7UUFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksRUFBRTtZQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBRyxJQUFJLEVBQUM7Z0JBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07aUJBRTNFLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUcsSUFBSSxFQUFDO2dCQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2lCQUV2RSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFckQsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hHO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDZjs7Z0JBeENGLFVBQVU7Ozs7Z0JBTlUsUUFBUTtnQkFDcEIsVUFBVTs7eUNBRm5CO0VBUW9ELFdBQVc7U0FBbEQsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydG9ncmFwaHlBdmFpbGFiaWxpdHkgfSBmcm9tICcuL2NhcnRvZ3JhcGh5LWF2YWlsYWJpbGl0eS5tb2RlbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSAnLi4vYW5ndWxhci1oYWwvc3JjL2xpYi9yZXN0LnNlcnZpY2UnO1xyXG5cclxuLyoqIENhcnRvZ3JhcGh5QXZhaWxhYmlsaXR5IG1hbmFnZXIgc2VydmljZSAqL1xyXG5ASW5qZWN0YWJsZSgpIFxyXG5leHBvcnQgY2xhc3MgQ2FydG9ncmFwaHlBdmFpbGFiaWxpdHlTZXJ2aWNlIGV4dGVuZHMgUmVzdFNlcnZpY2U8Q2FydG9ncmFwaHlBdmFpbGFiaWxpdHk+IHtcclxuICBcclxuXHJcbiAgLyoqIEFQSSByZXNvdXJjZSBwYXRoICovXHJcbiAgcHVibGljIENBUlRPR1JBUEhZX0FWQUlMQUJJTElUWV9BUEkgPSAnY2FydG9ncmFwaHktYXZhaWxhYmlsaXRpZXMnO1xyXG5cclxuICAvKiogY29uc3RydWN0b3IgKi9cclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IscHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcihDYXJ0b2dyYXBoeUF2YWlsYWJpbGl0eSwgXCJjYXJ0b2dyYXBoeS1hdmFpbGFiaWxpdGllc1wiLCBpbmplY3Rvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKiByZW1vdmUgY2FydG9ncmFwaHkgYXZhaWxhYmlsaXR5Ki9cclxuICByZW1vdmUoaXRlbTogQ2FydG9ncmFwaHlBdmFpbGFiaWxpdHkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGl0ZW0uX2xpbmtzLnNlbGYuaHJlZik7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAvKiogc2F2ZSBjYXJ0b2dyYXBoeSBhdmFpbGFiaWxpdHkqL1xyXG4gIHNhdmUoaXRlbTogQ2FydG9ncmFwaHlBdmFpbGFiaWxpdHkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IHJlc3VsdDogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG4gICAgaWYgKGl0ZW0uX2xpbmtzIT1udWxsKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaHR0cC5wdXQoaXRlbS5fbGlua3Muc2VsZi5ocmVmLCBpdGVtKTtcclxuICAgICAgaWYgKGl0ZW0uY2FydG9ncmFwaHkgIT1udWxsKXtcclxuICAgICAgICAgIGl0ZW0uc3Vic3RpdHV0ZVJlbGF0aW9uKCdjYXJ0b2dyYXBoeScsaXRlbS5jYXJ0b2dyYXBoeSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB9LCBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0udGVycml0b3J5ICE9bnVsbCl7XHJcbiAgICAgICAgICBpdGVtLnN1YnN0aXR1dGVSZWxhdGlvbigndGVycml0b3J5JyxpdGVtLnRlcnJpdG9yeSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB9LCBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0udGVycml0b3J5ID0gaXRlbS50ZXJyaXRvcnkuX2xpbmtzLnNlbGYuaHJlZjtcclxuICAgICAgaXRlbS5jYXJ0b2dyYXBoeSA9IGl0ZW0uY2FydG9ncmFwaHkuX2xpbmtzLnNlbGYuaHJlZjtcclxuICBcclxuICAgICAgcmVzdWx0ID0gdGhpcy5odHRwLnBvc3QodGhpcy5yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2VVcmwodGhpcy5DQVJUT0dSQVBIWV9BVkFJTEFCSUxJVFlfQVBJKSAsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19