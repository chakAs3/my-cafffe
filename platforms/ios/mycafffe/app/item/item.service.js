"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({
            id: 1,
            "title": "Affogato",
            "url": "/wiki/Affogato",
            "name": "Affogato",
            "img": '~/images/cup.jpg'
        }, {
            id: 2,
            "title": "Americano",
            "url": "/wiki/Americano",
            "name": "Americano",
            "img": '~/images/cup.jpg'
        }, {
            id: 3,
            "title": "Bicerin",
            "url": "/wiki/Bicerin",
            "name": "Bicerin",
            "img": '~/images/cup.jpg'
        }, {
            id: 4,
            "title": "Breve",
            "url": "/wiki/Breve",
            "name": "Breve",
            "img": '~/images/cup.jpg'
        }, {
            id: 5,
            "title": "Café Bombón",
            "url": "/wiki/Caf%C3%A9_Bomb%C3%B3n",
            "name": "Café Bombón",
            "img": '~/images/cup.jpg'
        }, {
            id: 6,
            "title": "Café au lait",
            "url": "/wiki/Caf%C3%A9_au_lait",
            "name": "Café au lait",
            "img": '~/images/cup.jpg'
        }, {
            id: 7,
            "title": "Caffé corretto",
            "url": "/wiki/Caff%C3%A9_corretto",
            "name": "Caffé Corretto",
            "img": '~/images/cup.jpg'
        }, {
            id: 8,
            "title": "Café Crema",
            "url": "/wiki/Caf%C3%A9_Crema",
            "name": "Café Crema",
            "img": '~/images/cup.jpg'
        }, {
            id: 9,
            "title": "Caffé latte",
            "url": "/wiki/Caff%C3%A9_latte",
            "name": "Caffé Latte",
            "img": '~/images/cup.jpg'
        }, {
            id: 10,
            "title": "Caffé macchiato",
            "url": "/wiki/Caff%C3%A9_macchiato",
            "name": "Caffé macchiato",
            "img": '~/images/cup.jpg'
        }, {
            id: 11,
            "title": "Café mélange",
            "url": "/wiki/Caf%C3%A9_m%C3%A9lange",
            "name": "Café mélange",
            "img": '~/images/cup.jpg'
        }, {
            id: 12,
            "title": "Coffee milk",
            "url": "/wiki/Coffee_milk",
            "name": "Coffee milk",
            "img": '~/images/cup.jpg'
        }, {
            id: 13,
            "title": "Cafe mocha",
            "url": "/wiki/Cafe_mocha",
            "name": "Cafe mocha",
            "img": '~/images/cup.jpg'
        }, {
            id: 14,
            "title": "Ca phe sua da",
            "url": "/wiki/Ca_phe_sua_da",
            "name": "Ca phe sua da",
            "img": '~/images/cup.jpg'
        }, {
            id: 15,
            "title": "Cappuccino",
            "url": "/wiki/Cappuccino",
            "name": "Cappuccino",
            "img": '~/images/cup.jpg'
        }, {
            id: 16,
            "title": "Carajillo",
            "url": "/wiki/Carajillo",
            "name": "Carajillo",
            "img": '~/images/cup.jpg'
        }, {
            id: 17,
            "title": "Cortado",
            "url": "/wiki/Cortado",
            "name": "Cortado",
            "img": '~/images/cup.jpg'
        }, {
            id: 18,
            "title": "Cuban espresso",
            "url": "/wiki/Cuban_espresso",
            "name": "Cuban espresso",
            "img": '~/images/cup.jpg'
        }, {
            id: 19,
            "title": "Espresso",
            "url": "/wiki/Espresso",
            "name": "Espresso",
            "img": '~/images/cup.jpg'
        }, {
            id: 20,
            "title": "Eiskaffee",
            "url": "/wiki/Eiskaffee",
            "name": "Eiskaffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 21,
            "title": "The Flat White",
            "url": "/wiki/The_Flat_White",
            "name": "The Flat White",
            "img": '~/images/cup.jpg'
        }, {
            id: 22,
            "title": "Frappuccino",
            "url": "/wiki/Frappuccino",
            "name": "Frappuccino",
            "img": '~/images/cup.jpg'
        }, {
            id: 23,
            "title": "Galao",
            "url": "/wiki/Galao",
            "name": "Galao",
            "img": '~/images/cup.jpg'
        }, {
            id: 24,
            "title": "Greek frappé coffee",
            "url": "/wiki/Greek_frapp%C3%A9_coffee",
            "name": "Greek frappé coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 26,
            "title": "Iced Coffee",
            "url": "/wiki/Iced_Coffee",
            "name": "Iced Coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 27,
            "title": "Indian filter coffee",
            "url": "/wiki/Indian_filter_coffee",
            "name": "Indian filter coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 28,
            "title": "Instant coffee",
            "url": "/wiki/Instant_coffee",
            "name": "Instant coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 29,
            "title": "Irish coffee",
            "url": "/wiki/Irish_coffee",
            "name": "Irish coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 30,
            "title": "Liqueur coffee",
            "url": "/wiki/Liqueur_coffee",
            "name": "Liqueur coffee",
            "img": '~/images/cup.jpg'
        }, {
            id: 31,
            "title": "Kopi Luwak",
            "url": "/wiki/Kopi_Luwak",
            "name": "Kopi Luwak",
            "img": '~/images/cup.jpg'
        });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsVUFBVTtZQUNuQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEtBQUssRUFBQyxrQkFBa0I7U0FDekIsRUFDRDtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFFLFdBQVc7WUFDcEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixNQUFNLEVBQUUsV0FBVztZQUNuQixLQUFLLEVBQUMsa0JBQWtCO1NBQ3pCLEVBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBQyxrQkFBa0I7U0FDekIsRUFDRDtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsTUFBTSxFQUFFLE9BQU87WUFDZixLQUFLLEVBQUMsa0JBQWtCO1NBQ3pCLEVBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSw2QkFBNkI7WUFDcEMsTUFBTSxFQUFFLGFBQWE7WUFDckIsS0FBSyxFQUFDLGtCQUFrQjtTQUN6QixFQUNEO1lBQ0UsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsY0FBYztZQUN2QixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLEtBQUssRUFBQyxrQkFBa0I7U0FDekIsRUFDRDtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFF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QixFQUNEO1lBQ0UsRUFBRSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLEtBQUssRUFBQyxrQkFBa0I7U0FDekIsQ0FDTixDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBN05RLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0E4TnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTlORCxJQThOQztBQTlOWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFmZm9nYXRvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0FmZm9nYXRvXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBZmZvZ2F0b1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFtZXJpY2Fub1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9BbWVyaWNhbm9cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkFtZXJpY2Fub1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpY2VyaW5cIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvQmljZXJpblwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmljZXJpblwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJyZXZlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0JyZXZlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCcmV2ZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhZsOpIEJvbWLDs25cIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvQ2FmJUMzJUE5X0JvbWIlQzMlQjNuXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDYWbDqSBCb21iw7NuXCIsXG4gICAgICAgICAgICBcImltZ1wiOid+L2ltYWdlcy9jdXAuanBnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2Fmw6kgYXUgbGFpdFwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9DYWYlQzMlQTlfYXVfbGFpdFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2Fmw6kgYXUgbGFpdFwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhZmbDqSBjb3JyZXR0b1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9DYWZmJUMzJUE5X2NvcnJldHRvXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDYWZmw6kgQ29ycmV0dG9cIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDYWbDqSBDcmVtYVwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9DYWYlQzMlQTlfQ3JlbWFcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhZsOpIENyZW1hXCIsXG4gICAgICAgICAgICBcImltZ1wiOid+L2ltYWdlcy9jdXAuanBnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2FmZsOpIGxhdHRlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NhZmYlQzMlQTlfbGF0dGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhZmbDqSBMYXR0ZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDYWZmw6kgbWFjY2hpYXRvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NhZmYlQzMlQTlfbWFjY2hpYXRvXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDYWZmw6kgbWFjY2hpYXRvXCIsXG4gICAgICAgICAgICBcImltZ1wiOid+L2ltYWdlcy9jdXAuanBnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDExLCBcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDYWbDqSBtw6lsYW5nZVwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9DYWYlQzMlQTlfbSVDMyVBOWxhbmdlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDYWbDqSBtw6lsYW5nZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMiwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvZmZlZSBtaWxrXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NvZmZlZV9taWxrXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb2ZmZWUgbWlsa1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDYWZlIG1vY2hhXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NhZmVfbW9jaGFcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhZmUgbW9jaGFcIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTQsIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhIHBoZSBzdWEgZGFcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvQ2FfcGhlX3N1YV9kYVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2EgcGhlIHN1YSBkYVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxNSwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhcHB1Y2Npbm9cIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvQ2FwcHVjY2lub1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FwcHVjY2lub1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxNiwgXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2FyYWppbGxvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NhcmFqaWxsb1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FyYWppbGxvXCIsXG4gICAgICAgICAgICBcImltZ1wiOid+L2ltYWdlcy9jdXAuanBnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDE3LCBcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDb3J0YWRvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NvcnRhZG9cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvcnRhZG9cIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTgsIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkN1YmFuIGVzcHJlc3NvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0N1YmFuX2VzcHJlc3NvXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDdWJhbiBlc3ByZXNzb1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxOSwgXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXNwcmVzc29cIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvRXNwcmVzc29cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkVzcHJlc3NvXCIsXG4gICAgICAgICAgICBcImltZ1wiOid+L2ltYWdlcy9jdXAuanBnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIwLCBcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJFaXNrYWZmZWVcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvRWlza2FmZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFaXNrYWZmZWVcIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjEsICBcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmxhdCBXaGl0ZVwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9UaGVfRmxhdF9XaGl0ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIEZsYXQgV2hpdGVcIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG5cbiAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJGcmFwcHVjY2lub1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9GcmFwcHVjY2lub1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJhcHB1Y2Npbm9cIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjMsICBcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHYWxhb1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9HYWxhb1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FsYW9cIixcbiAgICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjQsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JlZWsgZnJhcHDDqSBjb2ZmZWVcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvR3JlZWtfZnJhcHAlQzMlQTlfY29mZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHcmVlayBmcmFwcMOpIGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyNiwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkljZWQgQ29mZmVlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0ljZWRfQ29mZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJY2VkIENvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyNywgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluZGlhbiBmaWx0ZXIgY29mZmVlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0luZGlhbl9maWx0ZXJfY29mZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJbmRpYW4gZmlsdGVyIGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyOCwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluc3RhbnQgY29mZmVlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0luc3RhbnRfY29mZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJbnN0YW50IGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyOSwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIklyaXNoIGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCIvd2lraS9JcmlzaF9jb2ZmZWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIklyaXNoIGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzMCwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpcXVldXIgY29mZmVlXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0xpcXVldXJfY29mZmVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMaXF1ZXVyIGNvZmZlZVwiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzMSwgIFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvcGkgTHV3YWtcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiL3dpa2kvS29waV9MdXdha1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS29waSBMdXdha1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZydcbiAgICAgICAgICB9XG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19