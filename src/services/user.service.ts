import { Card } from "src/models/card.model";

export class UserService {
    hand: Card[];
    userName: string = "";

    constructor() {
        //this.hand = new Array<Card>();
        this.hand = [ new Card(1, "1", "red"), new Card(2, "6", "blue"), new Card(3, "S", "yellow"), new Card(4, "+2", "green")];
    }

    AddCard(card: Card) {
        this.hand.push(card);
    }

    RemoveCard(card: Card) {
        let index: number = this.hand.indexOf(card);
        if( index>=0 ) {   
            this.hand.splice(index, 1);
        }
    }

}