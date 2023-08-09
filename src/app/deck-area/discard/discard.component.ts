import { Component } from '@angular/core';
import { Card } from 'src/models/card.model';
import { GameStateService } from 'src/services/gameState.service';

@Component({
  selector: 'app-discard',
  templateUrl: './discard.component.html',
  styleUrls: ['./discard.component.css']
})
export class DiscardComponent {
  discardDeck: Card[];
  gs: GameStateService;

  constructor(private gameStateService: GameStateService) {
    this.discardDeck = gameStateService.discardDeck;
    this.gs = gameStateService;
  }
}
