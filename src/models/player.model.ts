import { Card } from 'src/models/card.model';

export class Player {
    public name: string;
    public cardHand: Card[];
    public turnOrder: number;

    constructor (name: string) {
        this.name = name;
        this.cardHand = [];
        this.turnOrder = 0;
    }
}