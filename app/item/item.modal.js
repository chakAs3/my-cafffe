"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var forms_1 = require("@angular/forms");
var radio_option_1 = require("./radio-option");
var ModalComponent = /** @class */ (function () {
    //@ViewChild("elem") checkTest: ElementRef;
    function ModalComponent(params, formBuilder) {
        this.params = params;
        this.formBuilder = formBuilder;
        this.frameworks = [];
        this.model = [];
        this.testChecking = { 'sugar': false, 'milk': false };
        console.log(params.context);
        this.frameworks.push(params.context.item);
        console.log(this.frameworks);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0ubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsbUVBQTRFO0FBQzVFLHdDQUFvRTtBQUNwRSwrQ0FBNkM7QUFPN0M7SUFTSSwyQ0FBMkM7SUFFM0Msd0JBQTJCLE1BQXlCLEVBQVUsV0FBd0I7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVQvRSxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBS25DLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBVSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDO1FBSS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3RDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztRQUVILDJDQUEyQztRQUUzQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixJQUFJLDBCQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3hCLElBQUksMEJBQVcsQ0FBQyxXQUFXLENBQUM7U0FFN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsSUFBSSwwQkFBVyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pDLElBQUksMEJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqQyxJQUFJLDBCQUFXLENBQUMsZ0JBQWdCLENBQUM7U0FDbEMsQ0FBQztJQUNOLENBQUM7SUFFSSw4QkFBSyxHQUFaLFVBQWEsR0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEIsVUFBcUIsUUFBUTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNFLDBCQUEwQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUNULDJCQUEyQixFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQ3RDLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLFdBQXdCO1FBQ3pDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzdDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUM5QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUUxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUUzQix1Q0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3RCLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkIsZ0NBQWdDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQTVGTSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxDQUFDO3lDQVlxQywyQkFBaUIsRUFBdUIsbUJBQVc7T0FYN0UsY0FBYyxDQStGMUI7SUFBRCxxQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJhZGlvT3B0aW9uIH0gZnJvbSBcIi4vcmFkaW8tb3B0aW9uXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1tb2RhbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiaXRlbS5tb2RhbC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICBjaGVja1Rlc3Q6IGJvb2xlYW47XG4gICAgc3VnYXJDaGVjaz86IEFycmF5PFJhZGlvT3B0aW9uPjtcbiAgICByYWRpb09wdGlvbnM/OiBBcnJheTxSYWRpb09wdGlvbj47XG4gICAgbW9kZWw6T2JqZWN0ID0gW107XG4gICAgdGVzdENoZWNraW5nOk9iamVjdCA9IHsnc3VnYXInOmZhbHNlLCdtaWxrJzpmYWxzZX07XG4gICAgLy9AVmlld0NoaWxkKFwiZWxlbVwiKSBjaGVja1Rlc3Q6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwpIHtcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmZyYW1ld29ya3MucHVzaChwYXJhbXMuY29udGV4dC5pdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mcmFtZXdvcmtzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICB0ZXN0Q2hlY2s6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICBcbiAgICAgICAgLy8gUGxhaW4gb2wnIGlubGluZSBBcnJheSBkZWZpbml0aW9uIGNvbWluZyB1cCA6KVxuICAgICAgICB0aGlzLnN1Z2FyQ2hlY2sgPSBbXG4gICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiU3VnYXJcIiksXG4gICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiTm9uIFN1Z2FyXCIpLFxuICAgICAgICAgIC8vbmV3IFJhZGlvT3B0aW9uKFwiUmFkaW8gb3B0aW9uIDNcIilcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnJhZGlvT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIG5ldyBSYWRpb09wdGlvbihcIlJhZGlvIG9wdGlvbiAxXCIpLFxuICAgICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiUmFkaW8gb3B0aW9uIDJcIiksXG4gICAgICAgICAgICBuZXcgUmFkaW9PcHRpb24oXCJSYWRpbyBvcHRpb24gM1wiKVxuICAgICAgICAgIF07XG4gICAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja2VkQ2hhbmdlKG1vZGVsUmVmKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZENoYW5nZTpcIiwgbW9kZWxSZWYuY2hlY2tlZCk7XG4gICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZ01vZGVsIHZhbHVlOlwiLCB0aGlzLmNoZWNrVGVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiUmVhY3RpdmUgRm9ybUdyb3VwIHZhbHVlOlwiLFxuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChcInRlc3RDaGVja1wiKS52YWx1ZVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRlc3RDaGVja2luZyk7XG4gICAgICB9XG4gICAgXG4gICAgICBjaGFuZ2VDaGVja2VkUmFkaW8ocmFkaW9PcHRpb246IFJhZGlvT3B0aW9uKTogdm9pZCB7XG4gICAgICAgIHJhZGlvT3B0aW9uLnNlbGVjdGVkID0gIXJhZGlvT3B0aW9uLnNlbGVjdGVkO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY2hlY2tUZXN0KTtcbiAgICAgICAgdGhpcy50ZXN0Q2hlY2tpbmdbJ3JhZGlvJ10gPSByYWRpb09wdGlvbi50ZXh0O1xuICAgICAgICBpZiAoIXJhZGlvT3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIHVuY2hlY2sgYWxsIG90aGVyIG9wdGlvbnNcbiAgICAgICAgdGhpcy5yYWRpb09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGlmIChvcHRpb24udGV4dCAhPT0gcmFkaW9PcHRpb24udGV4dCkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvL3B1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gXCJPRkZcIjtcbiAgICAgIC8vcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gXCJPTlwiO1xuICBcbiAgICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XG4gICAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcbiAgICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xuICAgICAgICAgICAgIC8vIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IFwiT05cIjtcbiAgICAgICAgICAgICAgdGhpcy50ZXN0Q2hlY2tpbmdbJ21pbGsnXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy90aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBcIk9GRlwiO1xuICAgICAgICAgICAgICB0aGlzLnRlc3RDaGVja2luZ1snbWlsayddID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcblxufSJdfQ==