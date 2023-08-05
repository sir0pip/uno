import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  cardHand: Card[];
  
  constructor() {
    this.cardHand = [ new Card("1", "red"), new Card("6", "blue"), new Card("S", "yellow"), new Card("+2", "green")];
  }

  ngOnInit() {}

  onCardPlayed(cardIndex: number) {
    this.cardHand.splice(cardIndex, 1);
  }
}
