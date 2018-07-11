"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-ui-listview/angular");
var forms_1 = require("nativescript-angular/forms");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var home_component_1 = require("./components/home/home.component");
var shop_home_component_1 = require("./components/shop-home/shop-home.component");
var drink_component_1 = require("./components/drink/drink.component");
var item_custom_component_1 = require("./components/item-custom/item-custom.component");
var drink_options_component_1 = require("./components/drink/drink-options/drink-options.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
//import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
var angular_3 = require("nativescript-checkbox/angular");
var forms_2 = require("@angular/forms");
var angular_4 = require("nativescript-drop-down/angular");
//import { ModalComponent } from "./components/shop-home/item.modal";
var item_modal_component_1 = require("./components/shop-home/item-modal/item-modal.component");
var firebase = require("nativescript-plugin-firebase");
var nativescript_feedback_1 = require("nativescript-feedback");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                forms_2.ReactiveFormsModule,
                angular_3.TNSCheckBoxModule,
                forms_1.NativeScriptFormsModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_4.DropDownModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                home_component_1.HomeComponent,
                shop_home_component_1.ShopHomeComponent,
                item_modal_component_1.ItemModalComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                dashboard_component_1.DashboardComponent,
                drink_component_1.DrinkComponent,
                drink_options_component_1.DrinkOptionsComponent,
                item_custom_component_1.ItemCustomComponent
            ],
            entryComponents: [item_modal_component_1.ItemModalComponent, drink_options_component_1.DrinkOptionsComponent],
            providers: [
                item_service_1.ItemService,
                nativescript_feedback_1.Feedback
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsNERBQWdGO0FBQ2hGLG9EQUFxRTtBQUNyRSw4REFBb0Y7QUFFcEYsb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsbUVBQWlFO0FBQ2pFLGtGQUErRTtBQUMvRSxzRUFBaUU7QUFDakUsd0ZBQWtGO0FBQ2xGLG9HQUE4RjtBQUU5RixzRUFBaUU7QUFDakUsK0VBQTBFO0FBQzFFLGtGQUE2RTtBQUc3RSxzRkFBc0Y7QUFDdEYseURBQWtFO0FBQ2xFLHdDQUFxRDtBQUNyRCwwREFBZ0U7QUFFaEUscUVBQXFFO0FBQ3JFLCtGQUE0RjtBQUM1Rix1REFBMEQ7QUFFMUQsK0RBQStDO0FBRS9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFHWCxDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsUUFBUTtJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUM7QUFFSiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUEwQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXhDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHNDQUE0QjtnQkFDNUIsMkJBQW1CO2dCQUNuQiwyQkFBaUI7Z0JBQ2pCLCtCQUF1QjtnQkFDdkIsd0NBQThCO2dCQUM5Qix3QkFBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDhCQUFhO2dCQUNiLHVDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQixnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLHdDQUFrQjtnQkFDbEIsZ0NBQWM7Z0JBQ2QsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7YUFDdEI7WUFDRCxlQUFlLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBQywrQ0FBcUIsQ0FBQztZQUMzRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsZ0NBQVE7YUFDWDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaG9wSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2hvcC1ob21lL3Nob3AtaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RHJpbmtDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJpbmsvZHJpbmsuY29tcG9uZW50XCJcbmltcG9ydCB7SXRlbUN1c3RvbUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9pdGVtLWN1c3RvbS9pdGVtLWN1c3RvbS5jb21wb25lbnRcIlxuaW1wb3J0IHtEcmlua09wdGlvbnNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJpbmsvZHJpbmstb3B0aW9ucy9kcmluay1vcHRpb25zLmNvbXBvbmVudFwiXG5cbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCJcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCJcblxuXG4vL2ltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5cbi8vaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Nob3AtaG9tZS9pdGVtLm1vZGFsXCI7XG5pbXBvcnQgeyBJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Nob3AtaG9tZS9pdGVtLW1vZGFsL2l0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgRmVlZGJhY2t9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIlxuXG5maXJlYmFzZS5pbml0KHtcbiAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgfSkudGhlbihcbiAgICBpbnN0YW5jZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICB9LFxuICAgIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgIH1cbiAgKTtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBEcm9wRG93bk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFNob3BIb21lQ29tcG9uZW50LFxuICAgICAgICBJdGVtTW9kYWxDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBEcmlua0NvbXBvbmVudCxcbiAgICAgICAgRHJpbmtPcHRpb25zQ29tcG9uZW50LFxuICAgICAgICBJdGVtQ3VzdG9tQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtJdGVtTW9kYWxDb21wb25lbnQsRHJpbmtPcHRpb25zQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIEZlZWRiYWNrXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19