import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() cardPlayed: EventEmitter<Card> = new EventEmitter<Card>();
  @Input("displayCard") card!: Card;

  ngOnInit() {

  }

  OnPlayCard() {
    this.cardPlayed.emit(this.card);
  }
}
