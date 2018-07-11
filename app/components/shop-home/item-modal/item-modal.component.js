"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var firebase = require("nativescript-plugin-firebase/app");
var ItemModalComponent = /** @class */ (function () {
    /*public frameworks: Array<any> = [];
      checkTest: boolean;
      model:Object = [];
      public options:Object= [];
      testChecking:Object = {};*/
    function ItemModalComponent(params) {
        var _this = this;
        this.params = params;
        this.product = [];
        this.addons = [];
        this.options = [];
        this.testChecking = { total: 0 };
        //console.log(params.context);
        //this.base_price = params.context.item.base_price;
        this.testChecking['total'] = Number(params.context.item.base_price);
        this.productInfoFromParam = params.context.item;
        console.log(this.productInfoFromParam);
        var productsfromShop = firebase.firestore().collection("product").doc(params.context.item.id);
        productsfromShop.get().then(function (doc) {
            if (doc.exists) {
                _this.product.push(doc);
                //this.product.base_price = params.context.base_price;
            }
            else {
                console.log("No such document!");
            }
        });
    }
    ItemModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.options = [];
        var productAddon = firebase.firestore().collection("product-addon");
        var query = productAddon
            .where("shop-product", "==", this.productInfoFromParam.shopId);
        query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
                _this.options.push(doc);
                //console.log(doc.data());
            });
        });
        /*productAddon.get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.addons.push(doc.data());
            console.log(this.addons[0]['shop-product']);
            //console.log(this.productInfoFromParam.shopId);
            //if(this.productInfoFromParam.shopId == this.addons[0]['shop-product']){
            //console.log(doc.data());
            //this.options.push(doc);
            //}
          });
        });*/
        setTimeout(function () {
            //console.log(this.productInfoFromParam.id);
            _this.product.forEach(function (element) {
                //console.log(this.product[0].data());
            });
        }, 1500);
    };
    ItemModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ItemModalComponent.prototype.submit = function () {
        console.log(this.testChecking);
    };
    ItemModalComponent.prototype.addTotal = function (price, name) {
        var _this = this;
        //var Amount = parseInt(price);
        setTimeout(function () {
            //console.log(this.testChecking[name]);
            if (_this.testChecking[name] == true) {
                console.log(Number(_this.testChecking['total'] + price));
                _this.testChecking['total'] = Number(_this.testChecking['total'] + price);
                console.log(_this.testChecking);
            }
            else {
                //this.testChecking['total'] = Number(this.testChecking['total']-price);
            }
        }, 100);
    };
    ItemModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-item-modal',
            templateUrl: './item-modal.component.html',
            styleUrls: ['./item-modal.component.scss']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ItemModalComponent);
    return ItemModalComponent;
}());
exports.ItemModalComponent = ItemModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFFNUUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFRN0Q7SUFPRTs7OztpQ0FJNkI7SUFDN0IsNEJBQW9CLE1BQXlCO1FBQTdDLGlCQWVDO1FBZm1CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBWHRDLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQWEsRUFBRSxDQUFBO1FBQzdCLGlCQUFZLEdBQVUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFPOUIsOEJBQThCO1FBQzlCLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2QyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLHNEQUFzRDtZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBK0JFO1FBOUJBLG9CQUFvQjtRQUNwQixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RFLElBQU0sS0FBSyxHQUFHLFlBQVk7YUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxhQUFhO1lBQzVCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUN2QiwrRkFBK0Y7Z0JBQy9GLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QiwwQkFBMEI7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMOzs7Ozs7Ozs7O2FBVUs7UUFHTCxVQUFVLENBQUM7WUFDVCw0Q0FBNEM7WUFDNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUMxQixzQ0FBc0M7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUcsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUssa0NBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVRLG1DQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0scUNBQVEsR0FBZixVQUFnQixLQUFLLEVBQUMsSUFBSTtRQUExQixpQkFlRDtRQWRHLCtCQUErQjtRQUMvQixVQUFVLENBQUM7WUFDWCx1Q0FBdUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCx3RUFBd0U7WUFDNUUsQ0FBQztRQUVMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFyRlksa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBYTRCLDJCQUFpQjtPQVpsQyxrQkFBa0IsQ0F1RjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZGRCxJQXVGQztBQXZGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBwYXJzZUludEF1dG9SYWRpeCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9zcmMvaTE4bi9mb3JtYXRfbnVtYmVyJztcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwcm9kdWN0OkFycmF5PGFueT4gPSBbXTtcbiAgcHVibGljIGJhc2VfcHJpY2U6TnVtYmVyO1xuICBwdWJsaWMgcHJvZHVjdEluZm9Gcm9tUGFyYW07XG4gIHB1YmxpYyBhZGRvbnM6QXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgb3B0aW9uczpBcnJheTxhbnk+ID1bXVxuICB0ZXN0Q2hlY2tpbmc6T2JqZWN0ID0ge3RvdGFsOjB9O1xuICAvKnB1YmxpYyBmcmFtZXdvcmtzOiBBcnJheTxhbnk+ID0gW107XG4gICAgY2hlY2tUZXN0OiBib29sZWFuO1xuICAgIG1vZGVsOk9iamVjdCA9IFtdO1xuICAgIHB1YmxpYyBvcHRpb25zOk9iamVjdD0gW107XG4gICAgdGVzdENoZWNraW5nOk9iamVjdCA9IHt9OyovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyBcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcy5jb250ZXh0KTtcbiAgICAvL3RoaXMuYmFzZV9wcmljZSA9IHBhcmFtcy5jb250ZXh0Lml0ZW0uYmFzZV9wcmljZTtcbiAgICB0aGlzLnRlc3RDaGVja2luZ1sndG90YWwnXSA9IE51bWJlcihwYXJhbXMuY29udGV4dC5pdGVtLmJhc2VfcHJpY2UpO1xuICAgIHRoaXMucHJvZHVjdEluZm9Gcm9tUGFyYW0gPSBwYXJhbXMuY29udGV4dC5pdGVtO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdEluZm9Gcm9tUGFyYW0pO1xuICAgIGNvbnN0IHByb2R1Y3RzZnJvbVNob3AgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicHJvZHVjdFwiKS5kb2MocGFyYW1zLmNvbnRleHQuaXRlbS5pZCk7XG4gICAgcHJvZHVjdHNmcm9tU2hvcC5nZXQoKS50aGVuKGRvYyA9PiB7XG4gICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICB0aGlzLnByb2R1Y3QucHVzaChkb2MpO1xuICAgICAgICAvL3RoaXMucHJvZHVjdC5iYXNlX3ByaWNlID0gcGFyYW1zLmNvbnRleHQuYmFzZV9wcmljZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgICB9XG4gICAgfSk7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy90aGlzLm9wdGlvbnMgPSBbXTtcbiAgICBjb25zdCBwcm9kdWN0QWRkb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicHJvZHVjdC1hZGRvblwiKTtcbiAgICBjb25zdCBxdWVyeSA9IHByb2R1Y3RBZGRvblxuICAgIC53aGVyZShcInNob3AtcHJvZHVjdFwiLCBcIj09XCIsIHRoaXMucHJvZHVjdEluZm9Gcm9tUGFyYW0uc2hvcElkKTtcbiAgICBxdWVyeS5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYFJlbGF0aXZlbHkgc21hbGwgQ2FsaWZvcm5pYW4gY2l0eTogJHtkb2MuaWR9ID0+ICR7SlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSl9YCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKGRvYyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgLypwcm9kdWN0QWRkb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICB0aGlzLmFkZG9ucy5wdXNoKGRvYy5kYXRhKCkpOyBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hZGRvbnNbMF1bJ3Nob3AtcHJvZHVjdCddKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RJbmZvRnJvbVBhcmFtLnNob3BJZCk7XG4gICAgICAgIC8vaWYodGhpcy5wcm9kdWN0SW5mb0Zyb21QYXJhbS5zaG9wSWQgPT0gdGhpcy5hZGRvbnNbMF1bJ3Nob3AtcHJvZHVjdCddKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcbiAgICAgICAgLy90aGlzLm9wdGlvbnMucHVzaChkb2MpO1xuICAgICAgICAvL31cbiAgICAgIH0pO1xuICAgIH0pOyovXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RJbmZvRnJvbVBhcmFtLmlkKTtcbiAgICAgIHRoaXMucHJvZHVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdFswXS5kYXRhKCkpO1xuICAgICAgfSk7XG4gICAgfSAsIDE1MDApO1xuICAgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbn1cblxuICBwdWJsaWMgc3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdENoZWNraW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb3RhbChwcmljZSxuYW1lKSB7XG4gICAgLy92YXIgQW1vdW50ID0gcGFyc2VJbnQocHJpY2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2codGhpcy50ZXN0Q2hlY2tpbmdbbmFtZV0pO1xuICAgIGlmKHRoaXMudGVzdENoZWNraW5nW25hbWVdID09IHRydWUpe1xuICAgIGNvbnNvbGUubG9nKE51bWJlcih0aGlzLnRlc3RDaGVja2luZ1sndG90YWwnXStwcmljZSkpO1xuICAgIHRoaXMudGVzdENoZWNraW5nWyd0b3RhbCddID0gTnVtYmVyKHRoaXMudGVzdENoZWNraW5nWyd0b3RhbCddK3ByaWNlKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdENoZWNraW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy90aGlzLnRlc3RDaGVja2luZ1sndG90YWwnXSA9IE51bWJlcih0aGlzLnRlc3RDaGVja2luZ1sndG90YWwnXS1wcmljZSk7XG4gICAgICAgIH1cblxuICAgIH0sIDEwMCk7XG59XG5cbn1cbiJdfQ==