import {Item} from "./items";

export class Cart {
    id: number;
    items:Item[];

    get totals(){
        return this.items.reduce((a,b) => a+ (b.price * b.quantity), 0)
    }

    constructor(raw: any) {
        Object.assign(this, raw);
      }
}
