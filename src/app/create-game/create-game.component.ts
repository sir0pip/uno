import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/models/player.model';
import { GameStateService } from 'src/services/gameState.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  gameName: string;
  playerName: string;
  
  constructor(private gameStateService: GameStateService, private userService: UserService, private router: Router) {
    this.gameName = "";
    this.playerName = "";
  }

  CreateNewGame() {
    this.gameStateService.SetupNewGame(this.gameName);
    this.gameStateService.players.push(new Player(this.playerName));
    this.userService.player = this.gameStateService.players[0];
    this.gameStateService.localPlayer = this.gameStateService.players[0];

    this.router.navigate(["/"]);
  }
}
