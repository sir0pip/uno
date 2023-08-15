import { Component } from '@angular/core';
import { Card } from 'src/models/card.model';
import { GameStateService } from 'src/services/gameState.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent {
  allowDraw: boolean  = true;
  drawDeck: Card[];

  constructor(private userService: UserService, private gameStateService: GameStateService) {
    this.drawDeck = gameStateService.drawDeck;
  }

  CanDraw() {
    return this.allowDraw;
  }

  OnDrawCard() {
    this.userService.DrawCard();
    //this.allowDraw = false;
  }
}
