import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", img: "~/images/cup.jpg" },
        { id: 3, name: "Piqué", role: "Defender", img: "~/images/cup.jpg" },
        { id: 4, name: "I. Rakitic", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 5, name: "Sergio", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 6, name: "Denis Suárez", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 7, name: "Arda", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 8, name: "A. Iniesta", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 9, name: "Suárez", role: "Forward", img: "~/images/cup.jpg" },
        { id: 10, name: "Messi", role: "Forward", img: "~/images/cup.jpg" },
        { id: 11, name: "Neymar", role: "Forward", img: "~/images/cup.jpg" },
        { id: 12, name: "Rafinha", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 13, name: "Cillessen", role: "Goalkeeper", img: "~/images/cup.jpg" },
        { id: 14, name: "Mascherano", role: "Defender", img: "~/images/cup.jpg" },
        { id: 17, name: "Paco Alcácer", role: "Forward", img: "~/images/cup.jpg" },
        { id: 18, name: "Jordi Alba", role: "Defender", img: "~/images/cup.jpg" },
        { id: 19, name: "Digne", role: "Defender", img: "~/images/cup.jpg" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 21, name: "André Gomes", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", img: "~/images/cup.jpg" },
        { id: 23, name: "Umtiti", role: "Defender", img: "~/images/cup.jpg" },
        { id: 24, name: "Mathieu", role: "Defender", img: "~/images/cup.jpg" },
        { id: 25, name: "Masip", role: "Goalkeeper", img: "~/images/cup.jpg" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
