import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/models/player.model';
import { GameStateService } from 'src/services/gameState.service';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.component.html',
  styleUrls: ['./invite-player.component.css']
})
export class InvitePlayerComponent {
  playerName: string;
  nameTaken: boolean;

  constructor(private gameStateService: GameStateService, private router: Router) {
    this.playerName = "";
    this.nameTaken = false;
  }
  
  CreateNewPlayer() {
    this.nameTaken = false;
    this.gameStateService.players.forEach((player) => {
      if(player.name === this.playerName)
        this.nameTaken = true;
    });
    if(this.nameTaken) {
      return;
    }
    this.gameStateService.players.push(new Player(this.playerName));
    this.router.navigate(["/"]);
  }
}
