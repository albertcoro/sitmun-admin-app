/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Resource } from '../angular-hal/src/lib/resource';
//FIXME ensure application creation in admin app upon initialization (as it is done with Roles and default Users)
/**
 * Territorial appliction name
 * @type {?}
 */
export var TERRITORIAL_APP_NAME = "Aplicación Territorial";
/**
 * Application model
 */
var /**
 * Application model
 */
Application = /** @class */ (function (_super) {
    tslib_1.__extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Application;
}(Resource));
/**
 * Application model
 */
export { Application };
if (false) {
    /**
     * id
     * @type {?}
     */
    Application.prototype.id;
    /**
     * name
     * @type {?}
     */
    Application.prototype.name;
    /**
     * type
     * @type {?}
     */
    Application.prototype.type;
    /**
     * title
     * @type {?}
     */
    Application.prototype.title;
    /**
     * theme
     * @type {?}
     */
    Application.prototype.theme;
    /**
     * urlTemplate
     * @type {?}
     */
    Application.prototype.jspTemplate;
    /**
     * system created date
     * @type {?}
     */
    Application.prototype.createdDate;
    /**
     * available roles
     * @type {?}
     */
    Application.prototype.availableRoles;
    /**
     * trees
     * @type {?}
     */
    Application.prototype.trees;
    /**
     * scales (comma-separated values)
     * @type {?}
     */
    Application.prototype.scales;
    /**
     * projections(comma-separated EPSG codes)
     * @type {?}
     */
    Application.prototype.srs;
    /**
     * whether application tree will auto refresh
     * @type {?}
     */
    Application.prototype.treeAutoRefresh;
    /**
     * backgrounds
     * @type {?}
     */
    Application.prototype.backgrounds;
    /**
     * situation map
     * @type {?}
     */
    Application.prototype.situationMap;
    /**
     * parameters
     * @type {?}
     */
    Application.prototype.parameters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0bXVuL2Zyb250ZW5kLWNvcmUvIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0FBU3pELE1BQU0sS0FBTyxvQkFBb0IsR0FBVyx3QkFBd0I7Ozs7QUFLcEU7Ozs7SUFBaUMsdUNBQVE7SUFBekM7O0lBK0NBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBaUMsUUFBUSxHQStDeEM7Ozs7Ozs7Ozs7SUE3Q0MseUJBQWtCOzs7OztJQUdsQiwyQkFBb0I7Ozs7O0lBR3BCLDJCQUFvQjs7Ozs7SUFHcEIsNEJBQXFCOzs7OztJQUdyQiw0QkFBcUI7Ozs7O0lBSXJCLGtDQUEyQjs7Ozs7SUFJM0Isa0NBQXdCOzs7OztJQUd4QixxQ0FBK0I7Ozs7O0lBRy9CLDRCQUFzQjs7Ozs7SUFHdEIsNkJBQXdCOzs7OztJQUd4QiwwQkFBbUI7Ozs7O0lBR25CLHNDQUFnQzs7Ozs7SUFHaEMsa0NBQTRDOzs7OztJQUc1QyxtQ0FBc0M7Ozs7O0lBR3RDLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzb3VyY2V9IGZyb20gJy4uL2FuZ3VsYXItaGFsL3NyYy9saWIvcmVzb3VyY2UnO1xyXG5pbXBvcnQge1RyZWV9IGZyb20gJy4uL3RyZWUvdHJlZS5tb2RlbCc7XHJcbmltcG9ydCB7Um9sZX0gZnJvbSAnLi4vcm9sZS9yb2xlLm1vZGVsJztcclxuaW1wb3J0IHtDYXJ0b2dyYXBoeUdyb3VwfSBmcm9tICcuLi9jYXJ0b2dyYXBoeS9jYXJ0b2dyYXBoeS1ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7QXBwbGljYXRpb25QYXJhbWV0ZXJ9IGZyb20gJy4vYXBwbGljYXRpb24tcGFyYW1ldGVyLm1vZGVsJztcclxuaW1wb3J0IHtBcHBsaWNhdGlvbkJhY2tncm91bmR9IGZyb20gJy4vYXBwbGljYXRpb24tYmFja2dyb3VuZC5tb2RlbCc7XHJcblxyXG4vL0ZJWE1FIGVuc3VyZSBhcHBsaWNhdGlvbiBjcmVhdGlvbiBpbiBhZG1pbiBhcHAgdXBvbiBpbml0aWFsaXphdGlvbiAoYXMgaXQgaXMgZG9uZSB3aXRoIFJvbGVzIGFuZCBkZWZhdWx0IFVzZXJzKVxyXG4vKiogVGVycml0b3JpYWwgYXBwbGljdGlvbiBuYW1lICovXHJcbmV4cG9ydCBjb25zdCBURVJSSVRPUklBTF9BUFBfTkFNRTpzdHJpbmcgID0gXCJBcGxpY2FjacOzbiBUZXJyaXRvcmlhbFwiO1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpY2F0aW9uIG1vZGVsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgLyoqIGlkICovXHJcbiAgcHVibGljIGlkOiBudW1iZXI7ICBcclxuICBcclxuICAvKiogbmFtZSovXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIHR5cGUqL1xyXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgXHJcbiAgLyoqIHRpdGxlKi9cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBcclxuICAvKiogdGhlbWUqL1xyXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nO1xyXG5cclxuICAgIFxyXG4gIC8qKiB1cmxUZW1wbGF0ZSovXHJcbiAgcHVibGljIGpzcFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgXHJcbiAgXHJcbiAgLyoqIHN5c3RlbSBjcmVhdGVkIGRhdGUqL1xyXG4gIHB1YmxpYyBjcmVhdGVkRGF0ZTogYW55O1xyXG4gIFxyXG4gIC8qKiBhdmFpbGFibGUgcm9sZXMqL1xyXG4gIHB1YmxpYyBhdmFpbGFibGVSb2xlcyA6IFJvbGVbXTtcclxuICBcclxuICAvKiogdHJlZXMqL1xyXG4gIHB1YmxpYyB0cmVlcyA6IFRyZWVbXTtcclxuICBcclxuICAvKiogc2NhbGVzIChjb21tYS1zZXBhcmF0ZWQgdmFsdWVzKSovXHJcbiAgcHVibGljIHNjYWxlczogc3RyaW5nW107XHJcbiAgXHJcbiAgLyoqIHByb2plY3Rpb25zKGNvbW1hLXNlcGFyYXRlZCBFUFNHIGNvZGVzKSovXHJcbiAgcHVibGljIHNyczogc3RyaW5nO1xyXG4gIFxyXG4gIC8qKiB3aGV0aGVyIGFwcGxpY2F0aW9uIHRyZWUgd2lsbCBhdXRvIHJlZnJlc2gqLyAgXHJcbiAgcHVibGljIHRyZWVBdXRvUmVmcmVzaDogQm9vbGVhbjtcclxuXHJcbiAgLyoqIGJhY2tncm91bmRzKi9cclxuICBwdWJsaWMgYmFja2dyb3VuZHM6IEFwcGxpY2F0aW9uQmFja2dyb3VuZFtdO1xyXG5cclxuICAvKiogc2l0dWF0aW9uIG1hcCovXHJcbiAgcHVibGljIHNpdHVhdGlvbk1hcDogQ2FydG9ncmFwaHlHcm91cDsgICAgXHJcbiAgXHJcbiAgLyoqIHBhcmFtZXRlcnMqL1xyXG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiBBcHBsaWNhdGlvblBhcmFtZXRlcltdO1xyXG59XHJcbiJdfQ==