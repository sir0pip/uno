import { Component } from '@angular/core';
import { Player } from 'src/models/player.model';
import { GameStateService } from 'src/services/gameState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game: GameStateService;
  
  constructor(private gameStateService: GameStateService) {
    this.game = gameStateService;
  }
}