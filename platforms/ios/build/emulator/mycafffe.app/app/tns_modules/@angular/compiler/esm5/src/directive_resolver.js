/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { createComponent, createContentChild, createContentChildren, createDirective, createHostBinding, createHostListener, createInput, createOutput, createViewChild, createViewChildren } from './core';
import { resolveForwardRef, splitAtColon, stringify } from './util';
var QUERY_METADATA_IDENTIFIERS = [
    createViewChild,
    createViewChildren,
    createContentChild,
    createContentChildren,
];
/*
 * Resolve a `Type` for {@link Directive}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
var DirectiveResolver = /** @class */ (function () {
    function DirectiveResolver(_reflector) {
        this._reflector = _reflector;
    }
    DirectiveResolver.prototype.isDirective = function (type) {
        var typeMetadata = this._reflector.annotations(resolveForwardRef(type));
        return typeMetadata && typeMetadata.some(isDirectiveMetadata);
    };
    DirectiveResolver.prototype.resolve = function (type, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        var typeMetadata = this._reflector.annotations(resolveForwardRef(type));
        if (typeMetadata) {
            var metadata = findLast(typeMetadata, isDirectiveMetadata);
            if (metadata) {
                var propertyMetadata = this._reflector.propMetadata(type);
                var guards = this._reflector.guards(type);
                return this._mergeWithPropertyMetadata(metadata, propertyMetadata, guards, type);
            }
        }
        if (throwIfNotFound) {
            throw new Error("No Directive annotation found on " + stringify(type));
        }
        return null;
    };
    DirectiveResolver.prototype._mergeWithPropertyMetadata = function (dm, propertyMetadata, guards, directiveType) {
        var inputs = [];
        var outputs = [];
        var host = {};
        var queries = {};
        Object.keys(propertyMetadata).forEach(function (propName) {
            var input = findLast(propertyMetadata[propName], function (a) { return createInput.isTypeOf(a); });
            if (input) {
                if (input.bindingPropertyName) {
                    inputs.push(propName + ": " + input.bindingPropertyName);
                }
                else {
                    inputs.push(propName);
                }
            }
            var output = findLast(propertyMetadata[propName], function (a) { return createOutput.isTypeOf(a); });
            if (output) {
                if (output.bindingPropertyName) {
                    outputs.push(propName + ": " + output.bindingPropertyName);
                }
                else {
                    outputs.push(propName);
                }
            }
            var hostBindings = propertyMetadata[propName].filter(function (a) { return createHostBinding.isTypeOf(a); });
            hostBindings.forEach(function (hostBinding) {
                if (hostBinding.hostPropertyName) {
                    var startWith = hostBinding.hostPropertyName[0];
                    if (startWith === '(') {
                        throw new Error("@HostBinding can not bind to events. Use @HostListener instead.");
                    }
                    else if (startWith === '[') {
                        throw new Error("@HostBinding parameter should be a property name, 'class.<name>', or 'attr.<name>'.");
                    }
                    host["[" + hostBinding.hostPropertyName + "]"] = propName;
                }
                else {
                    host["[" + propName + "]"] = propName;
                }
            });
            var hostListeners = propertyMetadata[propName].filter(function (a) { return createHostListener.isTypeOf(a); });
            hostListeners.forEach(function (hostListener) {
                var args = hostListener.args || [];
                host["(" + hostListener.eventName + ")"] = propName + "(" + args.join(',') + ")";
            });
            var query = findLast(propertyMetadata[propName], function (a) { return QUERY_METADATA_IDENTIFIERS.some(function (i) { return i.isTypeOf(a); }); });
            if (query) {
                queries[propName] = query;
            }
        });
        return this._merge(dm, inputs, outputs, host, queries, guards, directiveType);
    };
    DirectiveResolver.prototype._extractPublicName = function (def) { return splitAtColon(def, [null, def])[1].trim(); };
    DirectiveResolver.prototype._dedupeBindings = function (bindings) {
        var names = new Set();
        var publicNames = new Set();
        var reversedResult = [];
        // go last to first to allow later entries to overwrite previous entries
        for (var i = bindings.length - 1; i >= 0; i--) {
            var binding = bindings[i];
            var name_1 = this._extractPublicName(binding);
            publicNames.add(name_1);
            if (!names.has(name_1)) {
                names.add(name_1);
                reversedResult.push(binding);
            }
        }
        return reversedResult.reverse();
    };
    DirectiveResolver.prototype._merge = function (directive, inputs, outputs, host, queries, guards, directiveType) {
        var mergedInputs = this._dedupeBindings(directive.inputs ? directive.inputs.concat(inputs) : inputs);
        var mergedOutputs = this._dedupeBindings(directive.outputs ? directive.outputs.concat(outputs) : outputs);
        var mergedHost = directive.host ? tslib_1.__assign({}, directive.host, host) : host;
        var mergedQueries = directive.queries ? tslib_1.__assign({}, directive.queries, queries) : queries;
        if (createComponent.isTypeOf(directive)) {
            var comp = directive;
            return createComponent({
                selector: comp.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: comp.exportAs,
                moduleId: comp.moduleId,
                queries: mergedQueries,
                changeDetection: comp.changeDetection,
                providers: comp.providers,
                viewProviders: comp.viewProviders,
                entryComponents: comp.entryComponents,
                template: comp.template,
                templateUrl: comp.templateUrl,
                styles: comp.styles,
                styleUrls: comp.styleUrls,
                encapsulation: comp.encapsulation,
                animations: comp.animations,
                interpolation: comp.interpolation,
                preserveWhitespaces: directive.preserveWhitespaces,
            });
        }
        else {
            return createDirective({
                selector: directive.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: directive.exportAs,
                queries: mergedQueries,
                providers: directive.providers, guards: guards
            });
        }
    };
    return DirectiveResolver;
}());
export { DirectiveResolver };
function isDirectiveMetadata(type) {
    return createDirective.isTypeOf(type) || createComponent.isTypeOf(type);
}
export function findLast(arr, condition) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (condition(arr[i])) {
            return arr[i];
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2RpcmVjdGl2ZV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBR0gsT0FBTyxFQUE2QixlQUFlLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3RPLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWxFLElBQU0sMEJBQTBCLEdBQUc7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSDtJQUNFLDJCQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7SUFFcEQsdUNBQVcsR0FBWCxVQUFZLElBQVU7UUFDcEIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSxNQUFNLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBUUQsbUNBQU8sR0FBUCxVQUFRLElBQVUsRUFBRSxlQUFzQjtRQUF0QixnQ0FBQSxFQUFBLHNCQUFzQjtRQUN4QyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxDQUFDLFlBQVks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QUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRCxNQUFNLG1CQUFzQixHQUFRLEVBQUUsU0FBZ0M7SUFDcEUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtDb21wb25lbnQsIERpcmVjdGl2ZSwgVHlwZSwgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVDb250ZW50Q2hpbGQsIGNyZWF0ZUNvbnRlbnRDaGlsZHJlbiwgY3JlYXRlRGlyZWN0aXZlLCBjcmVhdGVIb3N0QmluZGluZywgY3JlYXRlSG9zdExpc3RlbmVyLCBjcmVhdGVJbnB1dCwgY3JlYXRlT3V0cHV0LCBjcmVhdGVWaWV3Q2hpbGQsIGNyZWF0ZVZpZXdDaGlsZHJlbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWYsIHNwbGl0QXRDb2xvbiwgc3RyaW5naWZ5fSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBRVUVSWV9NRVRBREFUQV9JREVOVElGSUVSUyA9IFtcbiAgY3JlYXRlVmlld0NoaWxkLFxuICBjcmVhdGVWaWV3Q2hpbGRyZW4sXG4gIGNyZWF0ZUNvbnRlbnRDaGlsZCxcbiAgY3JlYXRlQ29udGVudENoaWxkcmVuLFxuXTtcblxuLypcbiAqIFJlc29sdmUgYSBgVHlwZWAgZm9yIHtAbGluayBEaXJlY3RpdmV9LlxuICpcbiAqIFRoaXMgaW50ZXJmYWNlIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBhcHBsaWNhdGlvbiBkZXZlbG9wZXIgdG8gY3JlYXRlIGN1c3RvbSBiZWhhdmlvci5cbiAqXG4gKiBTZWUge0BsaW5rIENvbXBpbGVyfVxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHt9XG5cbiAgaXNEaXJlY3RpdmUodHlwZTogVHlwZSkge1xuICAgIGNvbnN0IHR5cGVNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3Rvci5hbm5vdGF0aW9ucyhyZXNvbHZlRm9yd2FyZFJlZih0eXBlKSk7XG4gICAgcmV0dXJuIHR5cGVNZXRhZGF0YSAmJiB0eXBlTWV0YWRhdGEuc29tZShpc0RpcmVjdGl2ZU1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4ge0BsaW5rIERpcmVjdGl2ZX0gZm9yIGEgZ2l2ZW4gYFR5cGVgLlxuICAgKi9cbiAgcmVzb2x2ZSh0eXBlOiBUeXBlKTogRGlyZWN0aXZlO1xuICByZXNvbHZlKHR5cGU6IFR5cGUsIHRocm93SWZOb3RGb3VuZDogdHJ1ZSk6IERpcmVjdGl2ZTtcbiAgcmVzb2x2ZSh0eXBlOiBUeXBlLCB0aHJvd0lmTm90Rm91bmQ6IGJvb2xlYW4pOiBEaXJlY3RpdmV8bnVsbDtcbiAgcmVzb2x2ZSh0eXBlOiBUeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogRGlyZWN0aXZlfG51bGwge1xuICAgIGNvbnN0IHR5cGVNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3Rvci5hbm5vdGF0aW9ucyhyZXNvbHZlRm9yd2FyZFJlZih0eXBlKSk7XG4gICAgaWYgKHR5cGVNZXRhZGF0YSkge1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBmaW5kTGFzdCh0eXBlTWV0YWRhdGEsIGlzRGlyZWN0aXZlTWV0YWRhdGEpO1xuICAgICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TWV0YWRhdGEgPSB0aGlzLl9yZWZsZWN0b3IucHJvcE1ldGFkYXRhKHR5cGUpO1xuICAgICAgICBjb25zdCBndWFyZHMgPSB0aGlzLl9yZWZsZWN0b3IuZ3VhcmRzKHR5cGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVyZ2VXaXRoUHJvcGVydHlNZXRhZGF0YShtZXRhZGF0YSwgcHJvcGVydHlNZXRhZGF0YSwgZ3VhcmRzLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhyb3dJZk5vdEZvdW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIERpcmVjdGl2ZSBhbm5vdGF0aW9uIGZvdW5kIG9uICR7c3RyaW5naWZ5KHR5cGUpfWApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWVyZ2VXaXRoUHJvcGVydHlNZXRhZGF0YShcbiAgICAgIGRtOiBEaXJlY3RpdmUsIHByb3BlcnR5TWV0YWRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0sIGd1YXJkczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgICBkaXJlY3RpdmVUeXBlOiBUeXBlKTogRGlyZWN0aXZlIHtcbiAgICBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBob3N0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGNvbnN0IHF1ZXJpZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgT2JqZWN0LmtleXMocHJvcGVydHlNZXRhZGF0YSkuZm9yRWFjaCgocHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBmaW5kTGFzdChwcm9wZXJ0eU1ldGFkYXRhW3Byb3BOYW1lXSwgKGEpID0+IGNyZWF0ZUlucHV0LmlzVHlwZU9mKGEpKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQuYmluZGluZ1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgIGlucHV0cy5wdXNoKGAke3Byb3BOYW1lfTogJHtpbnB1dC5iaW5kaW5nUHJvcGVydHlOYW1lfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0cy5wdXNoKHByb3BOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3V0cHV0ID0gZmluZExhc3QocHJvcGVydHlNZXRhZGF0YVtwcm9wTmFtZV0sIChhKSA9PiBjcmVhdGVPdXRwdXQuaXNUeXBlT2YoYSkpO1xuICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0LmJpbmRpbmdQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBvdXRwdXRzLnB1c2goYCR7cHJvcE5hbWV9OiAke291dHB1dC5iaW5kaW5nUHJvcGVydHlOYW1lfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dHMucHVzaChwcm9wTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGhvc3RCaW5kaW5ncyA9IHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLmZpbHRlcihhID0+IGNyZWF0ZUhvc3RCaW5kaW5nLmlzVHlwZU9mKGEpKTtcbiAgICAgIGhvc3RCaW5kaW5ncy5mb3JFYWNoKGhvc3RCaW5kaW5nID0+IHtcbiAgICAgICAgaWYgKGhvc3RCaW5kaW5nLmhvc3RQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBzdGFydFdpdGggPSBob3N0QmluZGluZy5ob3N0UHJvcGVydHlOYW1lWzBdO1xuICAgICAgICAgIGlmIChzdGFydFdpdGggPT09ICcoJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBASG9zdEJpbmRpbmcgY2FuIG5vdCBiaW5kIHRvIGV2ZW50cy4gVXNlIEBIb3N0TGlzdGVuZXIgaW5zdGVhZC5gKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0V2l0aCA9PT0gJ1snKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYEBIb3N0QmluZGluZyBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgcHJvcGVydHkgbmFtZSwgJ2NsYXNzLjxuYW1lPicsIG9yICdhdHRyLjxuYW1lPicuYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhvc3RbYFske2hvc3RCaW5kaW5nLmhvc3RQcm9wZXJ0eU5hbWV9XWBdID0gcHJvcE5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaG9zdFtgWyR7cHJvcE5hbWV9XWBdID0gcHJvcE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgaG9zdExpc3RlbmVycyA9IHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLmZpbHRlcihhID0+IGNyZWF0ZUhvc3RMaXN0ZW5lci5pc1R5cGVPZihhKSk7XG4gICAgICBob3N0TGlzdGVuZXJzLmZvckVhY2goaG9zdExpc3RlbmVyID0+IHtcbiAgICAgICAgY29uc3QgYXJncyA9IGhvc3RMaXN0ZW5lci5hcmdzIHx8IFtdO1xuICAgICAgICBob3N0W2AoJHtob3N0TGlzdGVuZXIuZXZlbnROYW1lfSlgXSA9IGAke3Byb3BOYW1lfSgke2FyZ3Muam9pbignLCcpfSlgO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVyeSA9IGZpbmRMYXN0KFxuICAgICAgICAgIHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLCAoYSkgPT4gUVVFUllfTUVUQURBVEFfSURFTlRJRklFUlMuc29tZShpID0+IGkuaXNUeXBlT2YoYSkpKTtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBxdWVyaWVzW3Byb3BOYW1lXSA9IHF1ZXJ5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9tZXJnZShkbSwgaW5wdXRzLCBvdXRwdXRzLCBob3N0LCBxdWVyaWVzLCBndWFyZHMsIGRpcmVjdGl2ZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFjdFB1YmxpY05hbWUoZGVmOiBzdHJpbmcpIHsgcmV0dXJuIHNwbGl0QXRDb2xvbihkZWYsIFtudWxsICEsIGRlZl0pWzFdLnRyaW0oKTsgfVxuXG4gIHByaXZhdGUgX2RlZHVwZUJpbmRpbmdzKGJpbmRpbmdzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IHB1YmxpY05hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgcmV2ZXJzZWRSZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgLy8gZ28gbGFzdCB0byBmaXJzdCB0byBhbGxvdyBsYXRlciBlbnRyaWVzIHRvIG92ZXJ3cml0ZSBwcmV2aW91cyBlbnRyaWVzXG4gICAgZm9yIChsZXQgaSA9IGJpbmRpbmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ3NbaV07XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5fZXh0cmFjdFB1YmxpY05hbWUoYmluZGluZyk7XG4gICAgICBwdWJsaWNOYW1lcy5hZGQobmFtZSk7XG4gICAgICBpZiAoIW5hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICBuYW1lcy5hZGQobmFtZSk7XG4gICAgICAgIHJldmVyc2VkUmVzdWx0LnB1c2goYmluZGluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXZlcnNlZFJlc3VsdC5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9tZXJnZShcbiAgICAgIGRpcmVjdGl2ZTogRGlyZWN0aXZlLCBpbnB1dHM6IHN0cmluZ1tdLCBvdXRwdXRzOiBzdHJpbmdbXSwgaG9zdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgICBxdWVyaWVzOiB7W2tleTogc3RyaW5nXTogYW55fSwgZ3VhcmRzOiB7W2tleTogc3RyaW5nXTogYW55fSwgZGlyZWN0aXZlVHlwZTogVHlwZSk6IERpcmVjdGl2ZSB7XG4gICAgY29uc3QgbWVyZ2VkSW5wdXRzID1cbiAgICAgICAgdGhpcy5fZGVkdXBlQmluZGluZ3MoZGlyZWN0aXZlLmlucHV0cyA/IGRpcmVjdGl2ZS5pbnB1dHMuY29uY2F0KGlucHV0cykgOiBpbnB1dHMpO1xuICAgIGNvbnN0IG1lcmdlZE91dHB1dHMgPVxuICAgICAgICB0aGlzLl9kZWR1cGVCaW5kaW5ncyhkaXJlY3RpdmUub3V0cHV0cyA/IGRpcmVjdGl2ZS5vdXRwdXRzLmNvbmNhdChvdXRwdXRzKSA6IG91dHB1dHMpO1xuICAgIGNvbnN0IG1lcmdlZEhvc3QgPSBkaXJlY3RpdmUuaG9zdCA/IHsuLi5kaXJlY3RpdmUuaG9zdCwgLi4uaG9zdH0gOiBob3N0O1xuICAgIGNvbnN0IG1lcmdlZFF1ZXJpZXMgPSBkaXJlY3RpdmUucXVlcmllcyA/IHsuLi5kaXJlY3RpdmUucXVlcmllcywgLi4ucXVlcmllc30gOiBxdWVyaWVzO1xuICAgIGlmIChjcmVhdGVDb21wb25lbnQuaXNUeXBlT2YoZGlyZWN0aXZlKSkge1xuICAgICAgY29uc3QgY29tcCA9IGRpcmVjdGl2ZSBhcyBDb21wb25lbnQ7XG4gICAgICByZXR1cm4gY3JlYXRlQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6IGNvbXAuc2VsZWN0b3IsXG4gICAgICAgIGlucHV0czogbWVyZ2VkSW5wdXRzLFxuICAgICAgICBvdXRwdXRzOiBtZXJnZWRPdXRwdXRzLFxuICAgICAgICBob3N0OiBtZXJnZWRIb3N0LFxuICAgICAgICBleHBvcnRBczogY29tcC5leHBvcnRBcyxcbiAgICAgICAgbW9kdWxlSWQ6IGNvbXAubW9kdWxlSWQsXG4gICAgICAgIHF1ZXJpZXM6IG1lcmdlZFF1ZXJpZXMsXG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogY29tcC5jaGFuZ2VEZXRlY3Rpb24sXG4gICAgICAgIHByb3ZpZGVyczogY29tcC5wcm92aWRlcnMsXG4gICAgICAgIHZpZXdQcm92aWRlcnM6IGNvbXAudmlld1Byb3ZpZGVycyxcbiAgICAgICAgZW50cnlDb21wb25lbnRzOiBjb21wLmVudHJ5Q29tcG9uZW50cyxcbiAgICAgICAgdGVtcGxhdGU6IGNvbXAudGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBjb21wLnRlbXBsYXRlVXJsLFxuICAgICAgICBzdHlsZXM6IGNvbXAuc3R5bGVzLFxuICAgICAgICBzdHlsZVVybHM6IGNvbXAuc3R5bGVVcmxzLFxuICAgICAgICBlbmNhcHN1bGF0aW9uOiBjb21wLmVuY2Fwc3VsYXRpb24sXG4gICAgICAgIGFuaW1hdGlvbnM6IGNvbXAuYW5pbWF0aW9ucyxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogY29tcC5pbnRlcnBvbGF0aW9uLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBkaXJlY3RpdmUucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGlyZWN0aXZlKHtcbiAgICAgICAgc2VsZWN0b3I6IGRpcmVjdGl2ZS5zZWxlY3RvcixcbiAgICAgICAgaW5wdXRzOiBtZXJnZWRJbnB1dHMsXG4gICAgICAgIG91dHB1dHM6IG1lcmdlZE91dHB1dHMsXG4gICAgICAgIGhvc3Q6IG1lcmdlZEhvc3QsXG4gICAgICAgIGV4cG9ydEFzOiBkaXJlY3RpdmUuZXhwb3J0QXMsXG4gICAgICAgIHF1ZXJpZXM6IG1lcmdlZFF1ZXJpZXMsXG4gICAgICAgIHByb3ZpZGVyczogZGlyZWN0aXZlLnByb3ZpZGVycywgZ3VhcmRzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmVNZXRhZGF0YSh0eXBlOiBhbnkpOiB0eXBlIGlzIERpcmVjdGl2ZSB7XG4gIHJldHVybiBjcmVhdGVEaXJlY3RpdmUuaXNUeXBlT2YodHlwZSkgfHwgY3JlYXRlQ29tcG9uZW50LmlzVHlwZU9mKHR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8VD4oYXJyOiBUW10sIGNvbmRpdGlvbjogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogVHxudWxsIHtcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChjb25kaXRpb24oYXJyW2ldKSkge1xuICAgICAgcmV0dXJuIGFycltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=