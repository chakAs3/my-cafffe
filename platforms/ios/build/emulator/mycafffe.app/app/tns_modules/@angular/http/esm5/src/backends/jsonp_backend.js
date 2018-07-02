/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseOptions } from '../base_response_options';
import { ReadyState, RequestMethod, ResponseType } from '../enums';
import { ConnectionBackend } from '../interfaces';
import { Response } from '../static_response';
import { BrowserJsonp } from './browser_jsonp';
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new Observable(function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
export { JSONPConnection };
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    tslib_1.__extends(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp },
        { type: ResponseOptions }
    ]; };
    return JSONPBackend;
}(ConnectionBackend));
export { JSONPBackend };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnBfYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2h0dHAvc3JjL2JhY2tlbmRzL2pzb25wX2JhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2pFLE9BQU8sRUFBYSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLElBQU0scUJBQXFCLEdBQUcsZ0RBQWdELENBQUM7QUFDL0UsSUFBTSxzQkFBc0IsR0FBRyw2Q0FBNkMsQ0FBQztBQUU3RTs7OztHQUlHO0FBQ0g7SUFxQkUsZ0JBQWdCO0lBQ2hCLHlCQUNJLEdBQVksRUFBVSxJQUFrQixFQUFVLG1CQUFxQztRQUQzRixpQkF1RUM7UUF0RXlCLFNBQUksR0FBSixJQUFJLENBQWM7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWtCO1FBbkJuRixjQUFTLEdBQVksS0FBSyxDQUFDO1FBb0JqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFD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QVU7UUFDakIseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBMUdELElBMEdDOztBQUVEOzs7O0dBSUc7QUFDSDtJQUNrQyx3Q0FBaUI7SUFDakQsZ0JBQWdCO0lBQ2hCLHNCQUFvQixhQUEyQixFQUFVLG9CQUFxQztRQUE5RixZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQWM7UUFBVSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCOztJQUU5RixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRixDQUFDOztnQkFURixVQUFVOzs7O2dCQTNISCxZQUFZO2dCQU5aLGVBQWU7O0lBMkl2QixtQkFBQztDQUFBLEFBVkQsQ0FDa0MsaUJBQWlCLEdBU2xEO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1Jlc3BvbnNlT3B0aW9uc30gZnJvbSAnLi4vYmFzZV9yZXNwb25zZV9vcHRpb25zJztcbmltcG9ydCB7UmVhZHlTdGF0ZSwgUmVxdWVzdE1ldGhvZCwgUmVzcG9uc2VUeXBlfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQge0Nvbm5lY3Rpb24sIENvbm5lY3Rpb25CYWNrZW5kfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSAnLi4vc3RhdGljX3JlcXVlc3QnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi4vc3RhdGljX3Jlc3BvbnNlJztcblxuaW1wb3J0IHtCcm93c2VySnNvbnB9IGZyb20gJy4vYnJvd3Nlcl9qc29ucCc7XG5cbmNvbnN0IEpTT05QX0VSUl9OT19DQUxMQkFDSyA9ICdKU09OUCBpbmplY3RlZCBzY3JpcHQgZGlkIG5vdCBpbnZva2UgY2FsbGJhY2suJztcbmNvbnN0IEpTT05QX0VSUl9XUk9OR19NRVRIT0QgPSAnSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgR0VUIHJlcXVlc3QgbWV0aG9kLic7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgYW4gaW4tZmxpZ2h0IEpTT05QIHJlcXVlc3QuXG4gKlxuICogQGRlcHJlY2F0ZWQgc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9odHRwXG4gKi9cbmV4cG9ydCBjbGFzcyBKU09OUENvbm5lY3Rpb24gaW1wbGVtZW50cyBDb25uZWN0aW9uIHtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NyaXB0OiBFbGVtZW50O1xuICBwcml2YXRlIF9yZXNwb25zZURhdGE6IGFueTtcbiAgcHJpdmF0ZSBfZmluaXNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHtAbGluayBSZWFkeVN0YXRlfSBvZiB0aGlzIHJlcXVlc3QuXG4gICAqL1xuICByZWFkeVN0YXRlOiBSZWFkeVN0YXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0Z29pbmcgSFRUUCByZXF1ZXN0LlxuICAgKi9cbiAgcmVxdWVzdDogUmVxdWVzdDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IGNvbXBsZXRlcyB3aXRoIHRoZSByZXNwb25zZSwgd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZC5cbiAgICovXG4gIHJlc3BvbnNlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcblxuICAvKiogQGludGVybmFsICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcmVxOiBSZXF1ZXN0LCBwcml2YXRlIF9kb206IEJyb3dzZXJKc29ucCwgcHJpdmF0ZSBiYXNlUmVzcG9uc2VPcHRpb25zPzogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEpTT05QX0VSUl9XUk9OR19NRVRIT0QpO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3QgPSByZXE7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBPYnNlcnZhYmxlPFJlc3BvbnNlPigocmVzcG9uc2VPYnNlcnZlcjogT2JzZXJ2ZXI8UmVzcG9uc2U+KSA9PiB7XG5cbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuTG9hZGluZztcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5faWQgPSBfZG9tLm5leHRSZXF1ZXN0SUQoKTtcblxuICAgICAgX2RvbS5leHBvc2VDb25uZWN0aW9uKGlkLCB0aGlzKTtcblxuICAgICAgLy8gV29ya2Fyb3VuZCBEYXJ0XG4gICAgICAvLyB1cmwgPSB1cmwucmVwbGFjZSgvPUpTT05QX0NBTExCQUNLKCZ8JCkvLCBgZ2VuZXJhdGVkIG1ldGhvZGApO1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBfZG9tLnJlcXVlc3RDYWxsYmFjayh0aGlzLl9pZCk7XG4gICAgICBsZXQgdXJsOiBzdHJpbmcgPSByZXEudXJsO1xuICAgICAgaWYgKHVybC5pbmRleE9mKCc9SlNPTlBfQ0FMTEJBQ0smJykgPiAtMSkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnPUpTT05QX0NBTExCQUNLJicsIGA9JHtjYWxsYmFja30mYCk7XG4gICAgICB9IGVsc2UgaWYgKHVybC5sYXN0SW5kZXhPZignPUpTT05QX0NBTExCQUNLJykgPT09IHVybC5sZW5ndGggLSAnPUpTT05QX0NBTExCQUNLJy5sZW5ndGgpIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gJz1KU09OUF9DQUxMQkFDSycubGVuZ3RoKSArIGA9JHtjYWxsYmFja31gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9zY3JpcHQgPSBfZG9tLmJ1aWxkKHVybCk7XG5cbiAgICAgIGNvbnN0IG9uTG9hZCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gUmVhZHlTdGF0ZS5DYW5jZWxsZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gUmVhZHlTdGF0ZS5Eb25lO1xuICAgICAgICBfZG9tLmNsZWFudXAoc2NyaXB0KTtcbiAgICAgICAgaWYgKCF0aGlzLl9maW5pc2hlZCkge1xuICAgICAgICAgIGxldCByZXNwb25zZU9wdGlvbnMgPVxuICAgICAgICAgICAgICBuZXcgUmVzcG9uc2VPcHRpb25zKHtib2R5OiBKU09OUF9FUlJfTk9fQ0FMTEJBQ0ssIHR5cGU6IFJlc3BvbnNlVHlwZS5FcnJvciwgdXJsfSk7XG4gICAgICAgICAgaWYgKGJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlT3B0aW9ucyA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHk6IHRoaXMuX3Jlc3BvbnNlRGF0YSwgdXJsfSk7XG4gICAgICAgIGlmICh0aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSB0aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFJlYWR5U3RhdGUuQ2FuY2VsbGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuRG9uZTtcbiAgICAgICAgX2RvbS5jbGVhbnVwKHNjcmlwdCk7XG4gICAgICAgIGxldCByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtib2R5OiBlcnJvci5tZXNzYWdlLCB0eXBlOiBSZXNwb25zZVR5cGUuRXJyb3J9KTtcbiAgICAgICAgaWYgKGJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblxuICAgICAgX2RvbS5zZW5kKHNjcmlwdCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuQ2FuY2VsbGVkO1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICB0aGlzLl9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgSlNPTlAgcmVxdWVzdCBjb21wbGV0ZXMsIHRvIG5vdGlmeSB0aGUgYXBwbGljYXRpb25cbiAgICogb2YgdGhlIG5ldyBkYXRhLlxuICAgKi9cbiAgZmluaXNoZWQoZGF0YT86IGFueSkge1xuICAgIC8vIERvbid0IGxlYWsgY29ubmVjdGlvbnNcbiAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgdGhpcy5fZG9tLnJlbW92ZUNvbm5lY3Rpb24odGhpcy5faWQpO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFJlYWR5U3RhdGUuQ2FuY2VsbGVkKSByZXR1cm47XG4gICAgdGhpcy5fcmVzcG9uc2VEYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEEge0BsaW5rIENvbm5lY3Rpb25CYWNrZW5kfSB0aGF0IHVzZXMgdGhlIEpTT05QIHN0cmF0ZWd5IG9mIG1ha2luZyByZXF1ZXN0cy5cbiAqXG4gKiBAZGVwcmVjYXRlZCBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2h0dHBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpTT05QQmFja2VuZCBleHRlbmRzIENvbm5lY3Rpb25CYWNrZW5kIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9icm93c2VySlNPTlA6IEJyb3dzZXJKc29ucCwgcHJpdmF0ZSBfYmFzZVJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdDogUmVxdWVzdCk6IEpTT05QQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBKU09OUENvbm5lY3Rpb24ocmVxdWVzdCwgdGhpcy5fYnJvd3NlckpTT05QLCB0aGlzLl9iYXNlUmVzcG9uc2VPcHRpb25zKTtcbiAgfVxufVxuIl19