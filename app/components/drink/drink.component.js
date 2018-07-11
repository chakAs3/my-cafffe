"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var drink_options_component_1 = require("./drink-options/drink-options.component");
var DrinkComponent = /** @class */ (function () {
    function DrinkComponent(modal, vcRef) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.items = [];
    }
    DrinkComponent.prototype.ngOnInit = function () {
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
        }, {
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
    DrinkComponent.prototype.showModal = function (item) {
        var options = {
            context: { item: item },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(drink_options_component_1.DrinkOptionsComponent, options).then(function (res) {
            console.log(res);
        });
    };
    DrinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-drink',
            templateUrl: './drink.component.html',
            styleUrls: ['./drink.component.scss']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], DrinkComponent);
    return DrinkComponent;
}());
exports.DrinkComponent = DrinkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLG1FQUErRTtBQUMvRSxtRkFBZ0Y7QUFRaEY7SUFFRSx3QkFBb0IsS0FBeUIsRUFBVSxLQUF1QjtRQUExRCxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRDlFLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHVixDQUFDO0lBRUYsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiO1lBQ0ksUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFDLDJCQUEyQjtTQUNwQyxFQUNEO1lBQ0ksUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxLQUFLLEVBQUMsaUNBQWlDO1NBQzFDLEVBQ0Q7WUFDSSxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLEtBQUssRUFBQywyQkFBMkI7U0FDcEMsRUFDRDtZQUNJLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsS0FBSyxFQUFDLDhCQUE4QjtTQUN2QyxFQUNEO1lBQ0UsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFDLDJCQUEyQjtTQUNwQyxFQUNEO1lBQ0ksUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxLQUFLLEVBQUMsaUNBQWlDO1NBQzFDLEVBQ0Q7WUFDSSxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLEtBQUssRUFBQywyQkFBMkI7U0FDcEMsRUFDRDtZQUNJLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsS0FBSyxFQUFDLDhCQUE4QjtTQUN2QyxDQUNGLENBQUE7SUFDRixDQUFDO0lBRU0sa0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNwQixJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUM7WUFDcEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLCtDQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1RFksY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FHMkIsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQUZuRSxjQUFjLENBOEQxQjtJQUFELHFCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyBcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgRHJpbmtPcHRpb25zQ29tcG9uZW50IH0gZnJvbSBcIi4vZHJpbmstb3B0aW9ucy9kcmluay1vcHRpb25zLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZHJpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXRlbXMgPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgXG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBcIkxhdHRlXCIsXG4gICAgICAgICAgICBpdGVtRGVzYzogXCJGdW5lcmFsXCIsXG4gICAgICAgICAgICBpbWFnZTpcIn4vaW1hZ2VzL2NvZmZlZS9sYXR0ZS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtTmFtZTogXCJIb3QgQ2hvY29sYXRlXCIsXG4gICAgICAgICAgICBpdGVtRGVzYzogXCJGb3IgRW1tYSwgRm9yZXZlciBBZ29cIixcbiAgICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL21pbGstY29mZmVlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBcIkVzcHJlc3NvXCIsXG4gICAgICAgICAgICBpdGVtRGVzYzogXCJSYW5kb20gQWNjZXNzIE1lbW9yaWVzXCIsXG4gICAgICAgICAgICBpbWFnZTpcIn4vaW1hZ2VzL2NvZmZlZS9ibGFjay5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtTmFtZTogXCJCbGFjayBDb2ZmZWVcIixcbiAgICAgICAgICAgIGl0ZW1EZXNjOiBcIkJ1aWxkIGEgUm9ja2V0IEJveXMhXCIsXG4gICAgICAgICAgICBpbWFnZTpcIn4vaW1hZ2VzL2NvZmZlZS9lc3ByZXNzby5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXRlbU5hbWU6IFwiTGF0dGVcIixcbiAgICAgICAgICBpdGVtRGVzYzogXCJGdW5lcmFsXCIsXG4gICAgICAgICAgaW1hZ2U6XCJ+L2ltYWdlcy9jb2ZmZWUvbGF0dGUucG5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgaXRlbU5hbWU6IFwiSG90IENob2NvbGF0ZVwiLFxuICAgICAgICAgIGl0ZW1EZXNjOiBcIkZvciBFbW1hLCBGb3JldmVyIEFnb1wiLFxuICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL21pbGstY29mZmVlLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIGl0ZW1OYW1lOiBcIkVzcHJlc3NvXCIsXG4gICAgICAgICAgaXRlbURlc2M6IFwiUmFuZG9tIEFjY2VzcyBNZW1vcmllc1wiLFxuICAgICAgICAgIGltYWdlOlwifi9pbWFnZXMvY29mZmVlL2JsYWNrLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIGl0ZW1OYW1lOiBcIkJsYWNrIENvZmZlZVwiLFxuICAgICAgICAgIGl0ZW1EZXNjOiBcIkJ1aWxkIGEgUm9ja2V0IEJveXMhXCIsXG4gICAgICAgICAgaW1hZ2U6XCJ+L2ltYWdlcy9jb2ZmZWUvZXNwcmVzc28ucG5nXCJcbiAgICAgIH1cbiAgICApXG4gICB9XG5cbiAgIHB1YmxpYyBzaG93TW9kYWwoaXRlbSkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBjb250ZXh0OiB7aXRlbTppdGVtfSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRHJpbmtPcHRpb25zQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG59XG5cbn1cbiJdfQ==