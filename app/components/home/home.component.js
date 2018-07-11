"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
var firebase = require("nativescript-plugin-firebase/app");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.shops = [];
        this.docIds = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var shopsCollection = firebase.firestore().collection("shops");
        //shopsCollection.get().then(doc =>{ });
        shopsCollection.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id + " => " + JSON.stringify(doc.data()));
                //this.docIds.push(doc.id);
                _this.shops.push(doc);
            });
        });
        setTimeout(function () {
            _this.getShops();
        }, 1500);
    };
    HomeComponent.prototype.getShops = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBRWpELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQzVDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBUzdEO0lBR0U7UUFGTyxVQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBYyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRWpCLGdDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEUsd0NBQXdDO1FBQ3hDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxhQUFhO1lBQ3RDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFJLEdBQUcsQ0FBQyxFQUFFLFlBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUcsQ0FBQyxDQUFDO2dCQUMxRCwyQkFBMkI7Z0JBQzNCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDWCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBdkJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O09BQ1csYUFBYSxDQTJCekI7SUFBRCxvQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHNob3BzOkFycmF5PGFueT4gPSBbXTtcbiAgcHVibGljIGRvY0lkczpBcnJheTxhbnk+ID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIGNvbnN0IHNob3BzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJzaG9wc1wiKVxuICAgIC8vc2hvcHNDb2xsZWN0aW9uLmdldCgpLnRoZW4oZG9jID0+eyB9KTtcbiAgICBzaG9wc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgIC8vdGhpcy5kb2NJZHMucHVzaChkb2MuaWQpO1xuICAgICAgICB0aGlzLnNob3BzLnB1c2goZG9jKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGhpcy5nZXRTaG9wcygpO1xuICAgIH0sIDE1MDApO1xuICB9XG5cbiAgZ2V0U2hvcHMoKSB7XG4gICBcbiAgfVxuXG5cblxufVxuIl19