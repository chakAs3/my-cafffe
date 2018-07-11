"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var firebase = require("nativescript-plugin-firebase");
var nativescript_feedback_1 = require("nativescript-feedback");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var firebaseApi = require("nativescript-plugin-firebase/app");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, feedback, _changeDetectionRef) {
        this.router = router;
        this.feedback = feedback;
        this._changeDetectionRef = _changeDetectionRef;
        this.shops = [];
        this.coffees = [];
        this.items = [];
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        /*if(!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
            }*/
        //else{
        //console.log('User is Authenticated');
        firebase.getCurrentUser()
            .then(function (user) {
            //console.log("User uid: " + user.uid)
            _this.User = user;
            console.log(_this.User);
            if (!user.emailVerified) {
                _this.feedback.warning({
                    message: "Email is not Verified"
                });
                firebase.sendEmailVerification().then(function () {
                    console.log("Email verification sent");
                }, function (error) {
                    console.log("Error sending email verification: " + error);
                });
            }
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
        //}
        var citiesShops = firebaseApi.firestore().collection("shops");
        citiesShops.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                _this.shops.push(doc);
            });
        });
        //this.coffees = [{"name":"Hello"},{"name":"Hello"}];
        var citiesCoffees = firebaseApi.firestore().collection("product");
        citiesCoffees.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                _this.coffees.push(doc.data());
            });
        });
        this.items.push({
            itemName: "Latte",
            itemDesc: "Funeral",
            image: "~/images/coffee/latte.png"
        }, {
            itemName: "Hot Chocolate",
            itemDesc: "For Emma, Forever Ago",
            image: "~/images/coffee/milk-coffee.png"
        }, {
            itemName: "Espresso",
            itemDesc: "Random Access Memories",
            image: "~/images/coffee/black.png"
        }, {
            itemName: "Black Coffee",
            itemDesc: "Build a Rocket Boys!",
            image: "~/images/coffee/espresso.png"
        });
    };
    DashboardComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    };
    Object.defineProperty(DashboardComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    DashboardComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], DashboardComponent.prototype, "drawerComponent", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, nativescript_feedback_1.Feedback, core_1.ChangeDetectorRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUc7QUFDakcsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUM1RCx1REFBMEQ7QUFDMUQsK0RBQWlGO0FBQ2pGLDhEQUE0RjtBQUU1RixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQVFoRTtJQU9FLDRCQUEyQixNQUF3QixFQUFVLFFBQWtCLEVBQVUsbUJBQXNDO1FBQXBHLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFKL0gsVUFBSyxHQUFjLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxFQUFFLENBQUM7SUFFd0gsQ0FBQztJQUtsSSw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVJLHFDQUFRLEdBQWY7UUFBQSxpQkF5RUM7UUF2RUMsSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztRQUVyVDs7ZUFFTztRQUNOLE9BQU87UUFDSCx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUN2QixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sc0NBQXNDO1lBQ3RDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7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QXNCOytEQUFDO0lBVHZFLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FRbUMseUJBQWdCLEVBQW9CLGdDQUFRLEVBQStCLHdCQUFpQjtPQVBwSCxrQkFBa0IsQ0FrSDlCO0lBQUQseUJBQUM7Q0FBQSxBQWxIRCxJQWtIQztBQWxIWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0ICwgQWZ0ZXJWaWV3SW5pdCAsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBGZWVkYmFjaywgRmVlZGJhY2tUeXBlLCBGZWVkYmFja1Bvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmNvbnN0IGZpcmViYXNlQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgLCBPbkluaXQge1xuXG4gIFVzZXI6T2JqZWN0O1xuICBzaG9wczpBcnJheTxhbnk+ID0gW107XG4gIGNvZmZlZXM6QXJyYXk8YW55PiA9IFtdO1xuICBpdGVtcyA9IFtdO1xuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGZlZWRiYWNrOiBGZWVkYmFjaywgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgIFxuICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG5cbiAgICAvKmlmKCFBcHBsaWNhdGlvblNldHRpbmdzLmdldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIGZhbHNlKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9Ki9cbiAgICAgLy9lbHNle1xuICAgICAgICAgLy9jb25zb2xlLmxvZygnVXNlciBpcyBBdXRoZW50aWNhdGVkJyk7XG4gICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXG4gICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJVc2VyIHVpZDogXCIgKyB1c2VyLnVpZClcbiAgICAgICAgICAgICAgdGhpcy5Vc2VyID0gdXNlcjsgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuVXNlcik7XG4gICAgICAgICAgICAgIGlmKCF1c2VyLmVtYWlsVmVyaWZpZWQpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIGlzIG5vdCBWZXJpZmllZFwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5zZW5kRW1haWxWZXJpZmljYXRpb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgdmVyaWZpY2F0aW9uIHNlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBlbWFpbCB2ZXJpZmljYXRpb246IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpKTtcbiAgICAgLy99XG4gICAgIGNvbnN0IGNpdGllc1Nob3BzID0gZmlyZWJhc2VBcGkuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInNob3BzXCIpO1xuXG4gICAgIGNpdGllc1Nob3BzLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke0pTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpfWApO1xuICAgICAgICB0aGlzLnNob3BzLnB1c2goZG9jKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy90aGlzLmNvZmZlZXMgPSBbe1wibmFtZVwiOlwiSGVsbG9cIn0se1wibmFtZVwiOlwiSGVsbG9cIn1dO1xuICAgIGNvbnN0IGNpdGllc0NvZmZlZXMgPSBmaXJlYmFzZUFwaS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicHJvZHVjdFwiKTtcblxuICAgIGNpdGllc0NvZmZlZXMuZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcbiAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgIC8vY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke0pTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpfWApO1xuICAgICAgIHRoaXMuY29mZmVlcy5wdXNoKGRvYy5kYXRhKCkpO1xuICAgICAgIFxuICAgICAgIH0pO1xuICAgfSk7XG5cblxuICAgIHRoaXMuaXRlbXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbU5hbWU6IFwiTGF0dGVcIixcbiAgICAgICAgICAgIGl0ZW1EZXNjOiBcIkZ1bmVyYWxcIixcbiAgICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL2xhdHRlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBcIkhvdCBDaG9jb2xhdGVcIixcbiAgICAgICAgICAgIGl0ZW1EZXNjOiBcIkZvciBFbW1hLCBGb3JldmVyIEFnb1wiLFxuICAgICAgICAgICAgaW1hZ2U6XCJ+L2ltYWdlcy9jb2ZmZWUvbWlsay1jb2ZmZWUucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbU5hbWU6IFwiRXNwcmVzc29cIixcbiAgICAgICAgICAgIGl0ZW1EZXNjOiBcIlJhbmRvbSBBY2Nlc3MgTWVtb3JpZXNcIixcbiAgICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL2JsYWNrLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBcIkJsYWNrIENvZmZlZVwiLFxuICAgICAgICAgICAgaXRlbURlc2M6IFwiQnVpbGQgYSBSb2NrZXQgQm95cyFcIixcbiAgICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL2VzcHJlc3NvLnBuZ1wiXG4gICAgICAgIH1cbiAgICApXG5cbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShcImF1dGhlbnRpY2F0ZWRcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==