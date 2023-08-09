import { Component } from '@angular/core';
import { Player } from 'src/models/player.model';
import { GameStateService } from 'src/services/gameState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uno';
  players: Player[];
  player: Player;

  constructor(private gameStateService: GameStateService) {
    this.gameStateService.playerCount = 4;
    this.gameStateService.players.push(new Player("Main"));
    this.gameStateService.players.push(new Player("Second"));
    this.gameStateService.players.push(new Player("Third"));
    this.gameStateService.players.push(new Player("Fourth"));

    this.players = this.gameStateService.players;
    this.player = this.gameStateService.players[0];
  }

  StartNewGame() {
    this.gameStateService.SetupNewGame();
  }
}