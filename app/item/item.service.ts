import { Injectable } from "@angular/core";

import { Item } from "./item";
import { itemOptions } from "./item-options";


@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {   
            id: 1,
            "title": "Affogato",
            "url": "/wiki/Affogato",
            "name": "Affogato",
            "img":'~/images/cup.jpg', 
            "price":40,
            options:[{
              "name":"Sugar",
              price:4
            },
            {"name":"Milk",
            price:4
          }]
        },
        {   
          id: 2,
          "title": "Coffee",
          "url": "/wiki/Coffee",
          "name": "Coffee",
          "img":'~/images/cup.jpg', 
          "price":20,
          options:[{
            "name":"Sugar",
            price:2,
          },{
            "name":"Milk",
            price:4
          }]
      }       
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
