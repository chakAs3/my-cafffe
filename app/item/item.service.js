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
            "img": '~/images/cup.jpg',
            "price": 40,
            options: [{
                    "name": "Sugar",
                    price: 4
                },
                { "name": "Milk",
                    price: 4
                }]
        }, {
            id: 2,
            "title": "Coffee",
            "url": "/wiki/Coffee",
            "name": "Coffee",
            "img": '~/images/cup.jpg',
            "price": 20,
            options: [{
                    "name": "Sugar",
                    price: 2,
                }, {
                    "name": "Milk",
                    price: 4
                }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBREE7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsVUFBVTtZQUNuQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEtBQUssRUFBQyxrQkFBa0I7WUFDeEIsT0FBTyxFQUFDLEVBQUU7WUFDVixPQUFPLEVBQUMsQ0FBQztvQkFDUCxNQUFNLEVBQUMsT0FBTztvQkFDZCxLQUFLLEVBQUMsQ0FBQztpQkFDUjtnQkFDRCxFQUFDLE1BQU0sRUFBQyxNQUFNO29CQUNkLEtBQUssRUFBQyxDQUFDO2lCQUNSLENBQUM7U0FDSCxFQUNEO1lBQ0UsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsY0FBYztZQUNyQixNQUFNLEVBQUUsUUFBUTtZQUNoQixLQUFLLEVBQUMsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBQyxFQUFFO1lBQ1YsT0FBTyxFQUFDLENBQUM7b0JBQ1AsTUFBTSxFQUFDLE9BQU87b0JBQ2QsS0FBSyxFQUFDLENBQUM7aUJBQ1IsRUFBQztvQkFDQSxNQUFNLEVBQUMsTUFBTTtvQkFDYixLQUFLLEVBQUMsQ0FBQztpQkFDUixDQUFDO1NBQ0wsQ0FDRixDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBeENRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0F5Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgaXRlbU9wdGlvbnMgfSBmcm9tIFwiLi9pdGVtLW9wdGlvbnNcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFmZm9nYXRvXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0FmZm9nYXRvXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBZmZvZ2F0b1wiLFxuICAgICAgICAgICAgXCJpbWdcIjonfi9pbWFnZXMvY3VwLmpwZycsIFxuICAgICAgICAgICAgXCJwcmljZVwiOjQwLFxuICAgICAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgICAgICBcIm5hbWVcIjpcIlN1Z2FyXCIsXG4gICAgICAgICAgICAgIHByaWNlOjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XCJuYW1lXCI6XCJNaWxrXCIsXG4gICAgICAgICAgICBwcmljZTo0XG4gICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgeyAgIFxuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJDb2ZmZWVcIixcbiAgICAgICAgICBcInVybFwiOiBcIi93aWtpL0NvZmZlZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNvZmZlZVwiLFxuICAgICAgICAgIFwiaW1nXCI6J34vaW1hZ2VzL2N1cC5qcGcnLCBcbiAgICAgICAgICBcInByaWNlXCI6MjAsXG4gICAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgICAgXCJuYW1lXCI6XCJTdWdhclwiLFxuICAgICAgICAgICAgcHJpY2U6MixcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIFwibmFtZVwiOlwiTWlsa1wiLFxuICAgICAgICAgICAgcHJpY2U6NFxuICAgICAgICAgIH1dXG4gICAgICB9ICAgICAgIFxuICAgICk7XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdfQ==