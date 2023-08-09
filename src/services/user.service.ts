import { Injectable } from "@angular/core";
import { Card } from "src/models/card.model";
import { GameStateService } from "./gameState.service";
import { Player } from "src/models/player.model";

@Injectable({ providedIn: "root"})
export class UserService {
    playerPosition: number;
    player: Player;

    constructor(private gameStateService: GameStateService) {
        this.playerPosition = 0;
        this.player = gameStateService.players[this.playerPosition];
    }

    DrawCard() {
        let card = this.gameStateService.DrawCard();
        if(card) {
            this.player.cardHand.push(card);
        }
    }

    PlayCard(card: Card) {
        let index: number = this.gameStateService.players[this.playerPosition].cardHand.indexOf(card);
        if( index >= 0 ) {
            this.player.cardHand.splice(index, 1);
            this.gameStateService.PlayCard(card);
        }
    }

}