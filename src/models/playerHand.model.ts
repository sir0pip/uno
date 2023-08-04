import { Card } from 'src/models/card.model';

export class PlayerHand {
    public cardHand: Card[];

    constructor () {
        this.cardHand = [];
    }
}