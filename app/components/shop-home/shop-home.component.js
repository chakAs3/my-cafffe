"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { CardView } from 'nativescript-cardview';
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var item_modal_component_1 = require("./item-modal/item-modal.component");
var firebase = require("nativescript-plugin-firebase/app");
var ShopHomeComponent = /** @class */ (function () {
    function ShopHomeComponent(route, modal, vcRef) {
        this.route = route;
        this.modal = modal;
        this.vcRef = vcRef;
        this.products = [];
        this.shopProducts = [];
        this.currentShop = [];
    }
    ShopHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
            //console.log(this.id);
        });
        var productsfromShop = firebase.firestore().collection("shops").doc(this.id);
        productsfromShop.get().then(function (doc) {
            if (doc.exists) {
                _this.currentShop = doc;
            }
            else {
                console.log("No such document!");
            }
        });
        var productsCollection = firebase.firestore().collection("shop-product");
        /*productsCollection.get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            //console.log(doc.data().shop.id)
            if(doc.data().shop.id == this.id){
            this.products.push(doc.data());
            }
            });
            //console.log(this.products);
          })*/
        var query = productsCollection
            .where("shop", "==", this.id);
        query
            .get()
            .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
                _this.products.push(doc.data());
                //console.log(doc.data());
            });
        });
        setTimeout(function () {
            for (var i = 0; i < _this.products.length; i++) {
                var productsfromShop_1 = firebase.firestore().collection("product").doc(_this.products[i].product);
                productsfromShop_1.get().then(function (doc) {
                    if (doc.exists) {
                        _this.shopProducts.push(doc);
                    }
                    else {
                        console.log("No such document!");
                    }
                });
            }
        }, 1500);
        //console.log(this.products);
        setTimeout(function () {
            //console.log(this.shopProducts[0]);
            for (var i = 0; i < _this.shopProducts.length; i++) {
                console.log('Name ' + _this.shopProducts[i]);
                console.log(_this.products[i].product);
                _this.products.forEach(function (element) {
                    if (element.product == _this.shopProducts[i].id) {
                        console.log(element);
                        _this.shopProducts[i].base_price = element.base_price;
                        _this.shopProducts[i].description = element.description;
                        _this.shopProducts[i].shopId = element.shop;
                        //this.shopProducts[i].name = element.name;
                    }
                });
                /*if(this.shopProducts[i].id == this.products[i].product.id){
                  console.log(this.products[i].product);
                }*/
            }
        }, 2500);
    };
    ;
    ShopHomeComponent.prototype.showModal = function (item) {
        var options = {
            context: { item: item },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(item_modal_component_1.ItemModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    ShopHomeComponent.prototype.showProducts = function () {
        console.log(this.shopProducts[0].data());
    };
    ShopHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shop-home',
            templateUrl: './shop-home.component.html',
            styleUrls: ['./shop-home.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], ShopHomeComponent);
    return ShopHomeComponent;
}());
exports.ShopHomeComponent = ShopHomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3AtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFDaEYsMENBQWlEO0FBRWpELG1EQUFtRDtBQUNuRCxtRUFBK0U7QUFDL0UsMEVBQXVFO0FBQ3ZFLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBUTdEO0lBS0UsMkJBQW9CLEtBQXFCLEVBQVMsS0FBeUIsRUFBVSxLQUF1QjtRQUF4RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFINUcsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFjLEVBQUUsQ0FBQztJQUNvRixDQUFDO0lBQ2pILG9DQUFRLEdBQVI7UUFBQSxpQkEyRUc7UUExRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2Qix1QkFBdUI7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztn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TCxDQUFDO1FBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUFBLENBQUM7SUFFSyxxQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQztZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMseUNBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVDLHdDQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBakdRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNMkIsdUJBQWMsRUFBZ0IsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQUxqRyxpQkFBaUIsQ0FrRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWxHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5Jztcbi8vaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLW1vZGFsL2l0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNob3AtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9wLWhvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG9wLWhvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlkOiBhbnk7XG4gIHByb2R1Y3RzOkFycmF5PGFueT4gPSBbXTtcbiAgc2hvcFByb2R1Y3RzOkFycmF5PGFueT4gPSBbXTtcbiAgY3VycmVudFNob3A6QXJyYXk8YW55PiA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbXCJpZFwiXTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5pZCk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2R1Y3RzZnJvbVNob3AgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwic2hvcHNcIikuZG9jKHRoaXMuaWQpO1xuICBwcm9kdWN0c2Zyb21TaG9wLmdldCgpLnRoZW4oZG9jID0+IHtcbiAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgdGhpcy5jdXJyZW50U2hvcCA9IGRvYztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICB9XG4gIH0pOyBcblxuXG5cblxuICBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwic2hvcC1wcm9kdWN0XCIpO1xuICAgIC8qcHJvZHVjdHNDb2xsZWN0aW9uLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZG9jLmRhdGEoKS5zaG9wLmlkKVxuICAgICAgICBpZihkb2MuZGF0YSgpLnNob3AuaWQgPT0gdGhpcy5pZCl7XG4gICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChkb2MuZGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcbiAgICAgIH0pKi9cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcHJvZHVjdHNDb2xsZWN0aW9uXG4gICAgLndoZXJlKFwic2hvcFwiLCBcIj09XCIsIHRoaXMuaWQpO1xuICAgIHF1ZXJ5XG4gICAgICAgIC5nZXQoKVxuICAgICAgICAudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYFJlbGF0aXZlbHkgc21hbGwgQ2FsaWZvcm5pYW4gY2l0eTogJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goZG9jLmRhdGEoKSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBwcm9kdWN0c2Zyb21TaG9wID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInByb2R1Y3RcIikuZG9jKHRoaXMucHJvZHVjdHNbaV0ucHJvZHVjdCk7XG4gICAgICBwcm9kdWN0c2Zyb21TaG9wLmdldCgpLnRoZW4oZG9jID0+IHtcbiAgICAgICAgaWYgKGRvYy5leGlzdHMpIHtcbiAgICAgICAgICB0aGlzLnNob3BQcm9kdWN0cy5wdXNoKGRvYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7ICBcbiAgICB9XG4gICAgXG4gICAgfSwgMTUwMCk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2hvcFByb2R1Y3RzWzBdKTtcbiAgICAgICBmb3IodmFyIGk9MDsgaSA8IHRoaXMuc2hvcFByb2R1Y3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgY29uc29sZS5sb2coJ05hbWUgJyArIHRoaXMuc2hvcFByb2R1Y3RzW2ldKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0ucHJvZHVjdCk7XG4gICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgIGlmKGVsZW1lbnQucHJvZHVjdCA9PSB0aGlzLnNob3BQcm9kdWN0c1tpXS5pZCl7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgIHRoaXMuc2hvcFByb2R1Y3RzW2ldLmJhc2VfcHJpY2UgPSBlbGVtZW50LmJhc2VfcHJpY2U7XG4gICAgICAgICAgICAgICB0aGlzLnNob3BQcm9kdWN0c1tpXS5kZXNjcmlwdGlvbiA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICB0aGlzLnNob3BQcm9kdWN0c1tpXS5zaG9wSWQgPSBlbGVtZW50LnNob3A7XG4gICAgICAgICAgICAgICAvL3RoaXMuc2hvcFByb2R1Y3RzW2ldLm5hbWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICB9KTtcbiAgICAgICAgIC8qaWYodGhpcy5zaG9wUHJvZHVjdHNbaV0uaWQgPT0gdGhpcy5wcm9kdWN0c1tpXS5wcm9kdWN0LmlkKXtcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5wcm9kdWN0KTtcbiAgICAgICAgIH0qL1xuICAgICAgIH1cbiAgICB9LCAyNTAwKTtcbiAgICBcbiAgICB9O1xuXG4gICAgcHVibGljIHNob3dNb2RhbChpdGVtKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjb250ZXh0OiB7aXRlbTogaXRlbX0sXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICB9O1xuICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoSXRlbU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cblxuICAgIHNob3dQcm9kdWN0cygpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5zaG9wUHJvZHVjdHNbMF0uZGF0YSgpKTtcbiAgICB9XG59XG4iXX0=