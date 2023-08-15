import { Component } from '@angular/core';
import { GameStateService } from 'src/services/gameState.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent {
  game: GameStateService;
  user: UserService;

  constructor(private gameStateService: GameStateService, private userService: UserService) {
    this.game = gameStateService;
    this.user = userService;
  }

  StartGame() {
    this.game.StartNewGame();
  }

  ResetGame() {
    this.game.ResetGame();
  }
}
