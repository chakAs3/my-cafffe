import {itemOptions} from './item-options'

export interface Item {
    id: number;
    title: string;
    url: string;
    name: string;
    img: string;
    price: number;
    options:itemOptions[];
}
