/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Resource } from '../angular-hal/src/lib/resource';
//FIXME ensure task creation in admin app upon initialization (as it is done with Roles and default Users)
/**
 * GEOADMIN_task id
 * @type {?}
 */
export var GEOADMIN_TREE_TASK_ID = "geoadmin";
/**
 * Task model
 */
var /**
 * Task model
 */
Task = /** @class */ (function (_super) {
    tslib_1.__extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Task;
}(Resource));
/**
 * Task model
 */
export { Task };
if (false) {
    /**
     * id
     * @type {?}
     */
    Task.prototype.id;
    /**
     * name
     * @type {?}
     */
    Task.prototype.name;
    /**
     * order
     * @type {?}
     */
    Task.prototype.order;
    /**
     * system created date
     * @type {?}
     */
    Task.prototype.createdDate;
    /**
     * task group
     * @type {?}
     */
    Task.prototype.group;
    /**
     * task type
     * @type {?}
     */
    Task.prototype.type;
    /**
     * task UI
     * @type {?}
     */
    Task.prototype.ui;
    /**
     * parameters
     * @type {?}
     */
    Task.prototype.parameters;
    /**
     * connection
     * @type {?}
     */
    Task.prototype.connection;
    /**
     * roles
     * @type {?}
     */
    Task.prototype.roles;
    /**
     * availabilities
     * @type {?}
     */
    Task.prototype.availabilities;
    /** @type {?} */
    Task.prototype.cartography;
    /** @type {?} */
    Task.prototype.service;
    /** @type {?} */
    Task.prototype.properties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaXRtdW4vZnJvbnRlbmQtY29yZS8iLCJzb3VyY2VzIjpbInRhc2svdGFzay5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0FBV3pELE1BQU0sS0FBTyxxQkFBcUIsR0FBVyxVQUFVOzs7O0FBTXZEOzs7O0lBQTBCLGdDQUFRO0lBQWxDOztJQTZCQSxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUE3QkQsQ0FBMEIsUUFBUSxHQTZCakM7Ozs7Ozs7Ozs7SUEzQkMsa0JBQW1COzs7OztJQUVuQixvQkFBcUI7Ozs7O0lBRXJCLHFCQUFzQjs7Ozs7SUFFdEIsMkJBQXlCOzs7OztJQUV6QixxQkFBeUI7Ozs7O0lBRXpCLG9CQUF1Qjs7Ozs7SUFFdkIsa0JBQW1COzs7OztJQUVuQiwwQkFBb0M7Ozs7O0lBRXBDLDBCQUErQjs7Ozs7SUFFL0IscUJBQXNCOzs7OztJQUV0Qiw4QkFBMkM7O0lBRTNDLDJCQUFpQzs7SUFFakMsdUJBQXlCOztJQUV6QiwwQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Jlc291cmNlfSBmcm9tICcuLi9hbmd1bGFyLWhhbC9zcmMvbGliL3Jlc291cmNlJztcclxuXHJcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICcuLi9jb25uZWN0aW9uL2Nvbm5lY3Rpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vcm9sZS9yb2xlLm1vZGVsJztcclxuaW1wb3J0IHsgVGFza1R5cGUgfSBmcm9tICcuL3Rhc2stdHlwZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRhc2tHcm91cCB9IGZyb20gJy4vdGFzay1ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFRhc2tBdmFpbGFiaWxpdHkgfSBmcm9tICcuL3Rhc2stYXZhaWxhYmlsaXR5Lm1vZGVsJztcclxuaW1wb3J0IHsgVGFza1BhcmFtZXRlciB9IGZyb20gJy4vdGFzay1wYXJhbWV0ZXIubW9kZWwnO1xyXG5cclxuLy9GSVhNRSBlbnN1cmUgdGFzayBjcmVhdGlvbiBpbiBhZG1pbiBhcHAgdXBvbiBpbml0aWFsaXphdGlvbiAoYXMgaXQgaXMgZG9uZSB3aXRoIFJvbGVzIGFuZCBkZWZhdWx0IFVzZXJzKVxyXG4vKiogR0VPQURNSU5fdGFzayBpZCAqL1xyXG5leHBvcnQgY29uc3QgR0VPQURNSU5fVFJFRV9UQVNLX0lEOnN0cmluZyAgPSBcImdlb2FkbWluXCI7XHJcblxyXG5pbXBvcnQgeyBUYXNrVUkgfSBmcm9tICcuL3Rhc2stdWkubW9kZWwnO1xyXG5pbXBvcnQgeyBDYXJ0b2dyYXBoeSB9IGZyb20gJy4uL2NhcnRvZ3JhcGh5L2NhcnRvZ3JhcGh5Lm1vZGVsJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2VydmljZS5tb2RlbCc7XHJcbi8qKiBUYXNrIG1vZGVsICovXHJcbmV4cG9ydCBjbGFzcyBUYXNrIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gIC8qKiBpZCAqL1xyXG4gIHB1YmxpYyBpZD86IG51bWJlcjtcclxuICAvKiogbmFtZSAqLyAgXHJcbiAgcHVibGljIG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqIG9yZGVyKi9cclxuICBwdWJsaWMgb3JkZXI/OiBOdW1iZXI7XHJcbiAgLyoqIHN5c3RlbSBjcmVhdGVkIGRhdGUqL1xyXG4gIHB1YmxpYyBjcmVhdGVkRGF0ZT86IGFueTtcclxuICAvKiogdGFzayBncm91cCovXHJcbiAgcHVibGljIGdyb3VwPzogVGFza0dyb3VwO1xyXG4gIC8qKiB0YXNrIHR5cGUqL1xyXG4gIHB1YmxpYyB0eXBlPzogVGFza1R5cGU7XHJcbiAgLyoqIHRhc2sgVUkqL1xyXG4gIHB1YmxpYyB1aT86IFRhc2tVSTtcclxuICAvKiogcGFyYW1ldGVycyovXHJcbiAgcHVibGljIHBhcmFtZXRlcnM/OiBUYXNrUGFyYW1ldGVyW107XHJcbiAgLyoqIGNvbm5lY3Rpb24qL1xyXG4gIHB1YmxpYyBjb25uZWN0aW9uPzogQ29ubmVjdGlvbjtcclxuICAvKiogcm9sZXMqL1xyXG4gIHB1YmxpYyByb2xlcz86IFJvbGVbXTtcclxuICAvKiogYXZhaWxhYmlsaXRpZXMqL1xyXG4gIHB1YmxpYyBhdmFpbGFiaWxpdGllcz86IFRhc2tBdmFpbGFiaWxpdHlbXTtcclxuXHJcbiAgcHVibGljIGNhcnRvZ3JhcGh5PzogQ2FydG9ncmFwaHk7XHJcblxyXG4gIHB1YmxpYyBzZXJ2aWNlPzogU2VydmljZTtcclxuXHJcbiAgcHVibGljIHByb3BlcnRpZXM/O1xyXG59XHJcbiJdfQ==