import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {   
            id: 1,
            "title": "Affogato",
            "url": "/wiki/Affogato",
            "name": "Affogato",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 2,
            "title": "Americano",
            "url": "/wiki/Americano",
            "name": "Americano",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 3,
            "title": "Bicerin",
            "url": "/wiki/Bicerin",
            "name": "Bicerin",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 4,
            "title": "Breve",
            "url": "/wiki/Breve",
            "name": "Breve",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 5,
            "title": "Café Bombón",
            "url": "/wiki/Caf%C3%A9_Bomb%C3%B3n",
            "name": "Café Bombón",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 6,
            "title": "Café au lait",
            "url": "/wiki/Caf%C3%A9_au_lait",
            "name": "Café au lait",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 7,
            "title": "Caffé corretto",
            "url": "/wiki/Caff%C3%A9_corretto",
            "name": "Caffé Corretto",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 8,
            "title": "Café Crema",
            "url": "/wiki/Caf%C3%A9_Crema",
            "name": "Café Crema",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 9,
            "title": "Caffé latte",
            "url": "/wiki/Caff%C3%A9_latte",
            "name": "Caffé Latte",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 10,
            "title": "Caffé macchiato",
            "url": "/wiki/Caff%C3%A9_macchiato",
            "name": "Caffé macchiato",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 11, 
            "title": "Café mélange",
            "url": "/wiki/Caf%C3%A9_m%C3%A9lange",
            "name": "Café mélange",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 12,  
            "title": "Coffee milk",
            "url": "/wiki/Coffee_milk",
            "name": "Coffee milk",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 13,
            "title": "Cafe mocha",
            "url": "/wiki/Cafe_mocha",
            "name": "Cafe mocha",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 14, 
            "title": "Ca phe sua da",
            "url": "/wiki/Ca_phe_sua_da",
            "name": "Ca phe sua da",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 15,  
            "title": "Cappuccino",
            "url": "/wiki/Cappuccino",
            "name": "Cappuccino",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 16, 
            "title": "Carajillo",
            "url": "/wiki/Carajillo",
            "name": "Carajillo",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 17, 
            "title": "Cortado",
            "url": "/wiki/Cortado",
            "name": "Cortado",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 18, 
            "title": "Cuban espresso",
            "url": "/wiki/Cuban_espresso",
            "name": "Cuban espresso",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 19, 
            "title": "Espresso",
            "url": "/wiki/Espresso",
            "name": "Espresso",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 20, 
            "title": "Eiskaffee",
            "url": "/wiki/Eiskaffee",
            "name": "Eiskaffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 21,  
            "title": "The Flat White",
            "url": "/wiki/The_Flat_White",
            "name": "The Flat White",
            "img":'~/images/cup.jpg', "price":40
          },
          {

            id: 22,
            "title": "Frappuccino",
            "url": "/wiki/Frappuccino",
            "name": "Frappuccino",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 23,  
            "title": "Galao",
            "url": "/wiki/Galao",
            "name": "Galao",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 24,
            "title": "Greek frappé coffee",
            "url": "/wiki/Greek_frapp%C3%A9_coffee",
            "name": "Greek frappé coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 26,  
            "title": "Iced Coffee",
            "url": "/wiki/Iced_Coffee",
            "name": "Iced Coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 27,  
            "title": "Indian filter coffee",
            "url": "/wiki/Indian_filter_coffee",
            "name": "Indian filter coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 28,  
            "title": "Instant coffee",
            "url": "/wiki/Instant_coffee",
            "name": "Instant coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 29,  
            "title": "Irish coffee",
            "url": "/wiki/Irish_coffee",
            "name": "Irish coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 30,  
            "title": "Liqueur coffee",
            "url": "/wiki/Liqueur_coffee",
            "name": "Liqueur coffee",
            "img":'~/images/cup.jpg', "price":40
          },
          {
            id: 31,  
            "title": "Kopi Luwak",
            "url": "/wiki/Kopi_Luwak",
            "name": "Kopi Luwak",
            "img":'~/images/cup.jpg', "price":40
          }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
