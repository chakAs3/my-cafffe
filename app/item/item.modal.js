"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var forms_1 = require("@angular/forms");
var radio_option_1 = require("./radio-option");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var ModalComponent = /** @class */ (function () {
    //@ViewChild("elem") checkTest: ElementRef;
    function ModalComponent(params, formBuilder) {
        this.params = params;
        this.formBuilder = formBuilder;
        this.frameworks = [];
        this.model = [];
        this.options = [];
        this.testChecking = {};
        console.log(params.context);
        this.frameworks.push(params.context.item);
        console.log(this.frameworks);
        this.options = params.context.item.options;
        console.log(this.options);
        this.testChecking['total'] = params.context.item.price;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            testCheck: [
                {
                    value: true,
                    disabled: false
                },
                [forms_1.Validators.required]
            ]
        });
        //this.items = this.itemService.getItems();
        // Plain ol' inline Array definition coming up :)
        this.sugarCheck = [
            new radio_option_1.RadioOption("Sugar"),
            new radio_option_1.RadioOption("Non Sugar"),
        ];
        this.radioOptions = [
            new radio_option_1.RadioOption("Radio option 1"),
            new radio_option_1.RadioOption("Radio option 2"),
            new radio_option_1.RadioOption("Radio option 3")
        ];
    };
    ModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ModalComponent.prototype.checkedChange = function (modelRef) {
        console.log("checkedChange:", modelRef.checked);
    };
    ModalComponent.prototype.submit = function () {
        //console.log(this.model);
        console.log("NgModel value:", this.checkTest);
        console.log("Reactive FormGroup value:", this.formGroup.get("testCheck").value);
        console.log(this.testChecking);
    };
    ModalComponent.prototype.changeCheckedRadio = function (radioOption) {
        radioOption.selected = !radioOption.selected;
        //console.log(this.checkTest);
        this.testChecking['radio'] = radioOption.text;
        if (!radioOption.selected) {
            return;
        }
        // uncheck all other options
        this.radioOptions.forEach(function (option) {
            if (option.text !== radioOption.text) {
                option.selected = false;
            }
        });
    };
    //public firstSwitchState = "OFF";
    //public secondSwitchState = "ON";
    ModalComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            // this.firstSwitchState = "ON";
            this.testChecking['milk'] = true;
        }
        else {
            //this.firstSwitchState = "OFF";
            this.testChecking['milk'] = false;
        }
    };
    ModalComponent.prototype.addTotal = function (price, name) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.testChecking[name]);
            if (_this.testChecking[name] == true) {
                console.log("Adding Total");
                _this.testChecking['total'] += price;
                console.log(_this.testChecking);
            }
            else {
                _this.testChecking['total'] -= price;
            }
        }, 100);
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            moduleId: module.id,
            templateUrl: "item.modal.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams, forms_1.FormBuilder])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0ubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsbUVBQTRFO0FBQzVFLHdDQUFvRTtBQUNwRSwrQ0FBNkM7QUFFN0MsMEVBQXdFO0FBQ3hFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQU8vRTtJQVVJLDJDQUEyQztJQUUzQyx3QkFBMkIsTUFBeUIsRUFBVSxXQUF3QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVi9FLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFLbkMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBUyxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFJckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsMkNBQTJDO1FBRTNDLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLElBQUksMEJBQVcsQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSwwQkFBVyxDQUFDLFdBQVcsQ0FBQztTQUU3QixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixJQUFJLDBCQUFXLENBQUMsZ0JBQWdCLENBQUM7WUFDakMsSUFBSSwwQkFBVyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pDLElBQUksMEJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVJLDhCQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixRQUFRO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWxELENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0UsMEJBQTBCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsMkJBQTJCLEVBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FDdEMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsV0FBd0I7UUFDekMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0MsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBRTFCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBRTNCLHVDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QixnQ0FBZ0M7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixLQUFLLEVBQUMsSUFBSTtRQUExQixpQkFjRDtRQVpHLFVBQVUsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUN4QyxDQUFDO1FBRUwsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQWpIUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxDQUFDO3lDQWFxQywyQkFBaUIsRUFBdUIsbUJBQVc7T0FaN0UsY0FBYyxDQXFIMUI7SUFBRCxxQkFBQztDQUFBLEFBckhELElBcUhDO0FBckhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJhZGlvT3B0aW9uIH0gZnJvbSBcIi4vcmFkaW8tb3B0aW9uXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIml0ZW0ubW9kYWwuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBmcmFtZXdvcmtzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgY2hlY2tUZXN0OiBib29sZWFuO1xuICAgIHN1Z2FyQ2hlY2s/OiBBcnJheTxSYWRpb09wdGlvbj47XG4gICAgcmFkaW9PcHRpb25zPzogQXJyYXk8UmFkaW9PcHRpb24+O1xuICAgIG1vZGVsOk9iamVjdCA9IFtdO1xuICAgIHB1YmxpYyBvcHRpb25zOk9iamVjdD0gW107XG4gICAgdGVzdENoZWNraW5nOk9iamVjdCA9IHt9O1xuICAgIC8vQFZpZXdDaGlsZChcImVsZW1cIikgY2hlY2tUZXN0OiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtzLnB1c2gocGFyYW1zLmNvbnRleHQuaXRlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnJhbWV3b3Jrcyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gcGFyYW1zLmNvbnRleHQuaXRlbS5vcHRpb25zXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7ICBcbiAgICAgICAgdGhpcy50ZXN0Q2hlY2tpbmdbJ3RvdGFsJ10gPSBwYXJhbXMuY29udGV4dC5pdGVtLnByaWNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgIHRlc3RDaGVjazogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgLy90aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIFxuICAgICAgICAvLyBQbGFpbiBvbCcgaW5saW5lIEFycmF5IGRlZmluaXRpb24gY29taW5nIHVwIDopXG4gICAgICAgIHRoaXMuc3VnYXJDaGVjayA9IFtcbiAgICAgICAgICBuZXcgUmFkaW9PcHRpb24oXCJTdWdhclwiKSxcbiAgICAgICAgICBuZXcgUmFkaW9PcHRpb24oXCJOb24gU3VnYXJcIiksXG4gICAgICAgICAgLy9uZXcgUmFkaW9PcHRpb24oXCJSYWRpbyBvcHRpb24gM1wiKVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMucmFkaW9PcHRpb25zID0gW1xuICAgICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiUmFkaW8gb3B0aW9uIDFcIiksXG4gICAgICAgICAgICBuZXcgUmFkaW9PcHRpb24oXCJSYWRpbyBvcHRpb24gMlwiKSxcbiAgICAgICAgICAgIG5ldyBSYWRpb09wdGlvbihcIlJhZGlvIG9wdGlvbiAzXCIpXG4gICAgICAgICAgXTtcbiAgICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrZWRDaGFuZ2UobW9kZWxSZWYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2VkQ2hhbmdlOlwiLCBtb2RlbFJlZi5jaGVja2VkKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgXG4gICAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5nTW9kZWwgdmFsdWU6XCIsIHRoaXMuY2hlY2tUZXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJSZWFjdGl2ZSBGb3JtR3JvdXAgdmFsdWU6XCIsXG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KFwidGVzdENoZWNrXCIpLnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdENoZWNraW5nKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGNoYW5nZUNoZWNrZWRSYWRpbyhyYWRpb09wdGlvbjogUmFkaW9PcHRpb24pOiB2b2lkIHtcbiAgICAgICAgcmFkaW9PcHRpb24uc2VsZWN0ZWQgPSAhcmFkaW9PcHRpb24uc2VsZWN0ZWQ7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jaGVja1Rlc3QpO1xuICAgICAgICB0aGlzLnRlc3RDaGVja2luZ1sncmFkaW8nXSA9IHJhZGlvT3B0aW9uLnRleHQ7XG4gICAgICAgIGlmICghcmFkaW9PcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gdW5jaGVjayBhbGwgb3RoZXIgb3B0aW9uc1xuICAgICAgICB0aGlzLnJhZGlvT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi50ZXh0ICE9PSByYWRpb09wdGlvbi50ZXh0KSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vcHVibGljIGZpcnN0U3dpdGNoU3RhdGUgPSBcIk9GRlwiO1xuICAgICAgLy9wdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSBcIk9OXCI7XG4gIFxuICAgICAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcbiAgICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgICAgICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgLy8gdGhpcy5maXJzdFN3aXRjaFN0YXRlID0gXCJPTlwiO1xuICAgICAgICAgICAgICB0aGlzLnRlc3RDaGVja2luZ1snbWlsayddID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL3RoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IFwiT0ZGXCI7XG4gICAgICAgICAgICAgIHRoaXMudGVzdENoZWNraW5nWydtaWxrJ10gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB1YmxpYyBhZGRUb3RhbChwcmljZSxuYW1lKSB7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXN0Q2hlY2tpbmdbbmFtZV0pO1xuICAgICAgICBpZih0aGlzLnRlc3RDaGVja2luZ1tuYW1lXSA9PSB0cnVlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgVG90YWxcIilcbiAgICAgICAgdGhpcy50ZXN0Q2hlY2tpbmdbJ3RvdGFsJ10gKz0gcHJpY2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdENoZWNraW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0Q2hlY2tpbmdbJ3RvdGFsJ10gLT0gcHJpY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgXG5cbn0iXX0=