"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var DrinkOptionsComponent = /** @class */ (function () {
    function DrinkOptionsComponent(params) {
        this.params = params;
        this.items = [];
        this.items.push(params.context.item);
        console.log(params.context);
    }
    DrinkOptionsComponent.prototype.ngOnInit = function () { };
    DrinkOptionsComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    DrinkOptionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-drink-options',
            templateUrl: './drink-options.component.html',
            styleUrls: ['./drink-options.component.scss']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], DrinkOptionsComponent);
    return DrinkOptionsComponent;
}());
exports.DrinkOptionsComponent = DrinkOptionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmstb3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmluay1vcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFTNUU7SUFFRSwrQkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFEM0MsVUFBSyxHQUFjLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLHFDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFYWSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FHMEIsMkJBQWlCO09BRmhDLHFCQUFxQixDQWFqQztJQUFELDRCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kcmluay1vcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyaW5rLW9wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmluay1vcHRpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJpbmtPcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXRlbXM6QXJyYXk8YW55PiA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyYW1zOk1vZGFsRGlhbG9nUGFyYW1zKSB7IFxuICAgIHRoaXMuaXRlbXMucHVzaChwYXJhbXMuY29udGV4dC5pdGVtKTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuY29udGV4dCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbn1cblxufVxuIl19