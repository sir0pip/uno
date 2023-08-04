import { Component } from '@angular/core';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {
  cardHand: Card[] = [ new Card("1", "red"), new Card("6", "blue"), new Card("S", "yellow"), new Card("+2", "green")];

  OnPlayCard(card: Card) {
    let cardIndex: number = this.cardHand.indexOf(card);

    this.cardHand.splice(cardIndex, 1);
  }
}
