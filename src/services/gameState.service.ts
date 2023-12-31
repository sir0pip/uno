import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";
import { CardSet } from "../models/cardSet.model";
import { DirectionOfPlay } from "../enums/directionOfPlay.enum";
import { Player } from "../models/player.model";
import { CardColorEnum } from "src/enums/cardColor.enum";
import { CardFaceEnum } from "src/enums/cardFace.enum";
import { UserService } from "./user.service";

@Injectable({ providedIn: "root"})
export class GameStateService {
    public gameName: string;
    public drawDeck: Card[];
    public discardDeck: Card[];
    public playerCount: number;
    public players: Player[];
    public activePlayer: number;
    public localPlayer!: Player;
    public directionOfPlay: string;
    public activeColor: string;
    public activeFace: string;
    public maxPlayers: number;
    public gameStarted: boolean;

    constructor() {
        this.drawDeck = [];
        //this.ShuffleDrawDeck();
        this.gameStarted = false;
        this.discardDeck = [];
        this.playerCount = 0;
        this.players = [];
        this.activePlayer = 0;
        this.directionOfPlay = DirectionOfPlay.Forward;
        this.activeColor = CardColorEnum.Black;
        this.activeFace = CardFaceEnum.Wild;
        this.gameName = "";
        this.maxPlayers = 10;
    }

    ResetPlayerHands() {
        this.players.forEach((player) => {
            player.cardHand.length = 0;
        })
    }

    ShuffleDrawDeck() {
        this.drawDeck.forEach(card => {
            card.stackorder = Math.random();
        });
        this.drawDeck.sort((cardA, cardB) => cardA.stackorder - cardB.stackorder);
    }

    DealInitialCards() {
        this.players.forEach((player) => {
            for(let cardCount: number = 1; cardCount <= 7; ++cardCount) {
                let card = this.drawDeck.pop();
                if(card) {
                    player.cardHand.push(card);
                }
            }
        })
    }

    DiscardTopCard() {
        let firstCard = this.drawDeck.pop();
        if(firstCard) {
            this.PlayCard(firstCard);
        }
    }

    ResetDrawDeck() {
        this.drawDeck.length = 0;
        this.drawDeck.push(...new CardSet().cards);
    }

    ShufflePlayerOrder() {
        this.players.forEach((player) => {
            player.turnOrder = Math.random();
        });
        this.players.sort((playerA, playerB) => playerA.turnOrder - playerB.turnOrder);
        this.players.forEach((player) => {
            console.log("Player " + player.name + " orderNum = " + player.turnOrder);
        })
    }

    ResetGame() {
        this.ResetPlayerHands();
        this.ResetDrawDeck();
        this.discardDeck.length = 0;
        this.ShuffleDrawDeck();
        this.gameStarted = false;
    }

    SetupNewGame(name: string) {
        this.gameName = name;
        this.ResetGame();
    }

    StartNewGame() {
        this.ShufflePlayerOrder();
        this.DealInitialCards();
        this.activePlayer = 0;
        this.DiscardTopCard();
        this.gameStarted = true;
    }

    DrawCard() {
        if(this.drawDeck.length === 0) {
            this.drawDeck.push(...this.discardDeck);
            this.discardDeck.length = 0;
            this.ShuffleDrawDeck();
        }
        let card = this.drawDeck.pop();
        if(card)
            this.players[this.activePlayer].cardHand.push();
        return card;
    }

    SetNextActivePlayer() {
        if(this.directionOfPlay === DirectionOfPlay.Forward) {
            this.activePlayer++;
            if(this.activePlayer >= this.players.length)
                this.activePlayer = 0;
        }
        else {
            this.activePlayer--;
            if(this.activePlayer < 0)
                this.activePlayer = this.players.length-1;
        }
    }

    SetActiveCards(player: Player) {
        let activeCardCount: number = 0;
        let drawFourWild: Card[] = [];
        player.cardHand.forEach((card) => {
            card.active = false;
            if(player !== this.players[this.activePlayer])
                return;
            if(card.face !== CardFaceEnum.WildDrawFour && (card.face === this.activeFace || card.color === this.activeColor || card.face === CardFaceEnum.Wild)) {
                card.active = true;
                ++activeCardCount;
            }
            else if(card.face === CardFaceEnum.WildDrawFour) {
                drawFourWild.push(card);
            }
        });
        if(drawFourWild.length > 0 && activeCardCount === 0) {
            drawFourWild.forEach((card) => {
                card.active = true;
            });
        }
    }

    TakeCardAction(card: Card) {
        switch(card.face) {
            case CardFaceEnum.Skip:
                this.SetNextActivePlayer();
                break;
            case CardFaceEnum.Reverse:
                if(this.directionOfPlay === DirectionOfPlay.Forward)
                    this.directionOfPlay = DirectionOfPlay.Backward;
                else
                    this.directionOfPlay = DirectionOfPlay.Forward;
                break;
            case CardFaceEnum.DrawTwo:
                this.SetNextActivePlayer();
                this.DrawCard();
                this.DrawCard();
                break;
            case CardFaceEnum.Wild:
                // select an active color
                break;
            case CardFaceEnum.WildDrawFour:
                // select an active color
                this.SetNextActivePlayer();
                this.DrawCard();
                this.DrawCard();
                this.DrawCard();
                this.DrawCard();
                break;
        }
    }

    PlayCard(card: Card) {
        this.discardDeck.push(card);
        this.activeColor = card.color === CardColorEnum.Black ? "" : card.color;
        this.activeFace = card.face;
        this.TakeCardAction(card);
        this.SetNextActivePlayer();
        this.players.forEach((player) => {
            this.SetActiveCards(player);
        });

        // Autoplay for other players
        if(this.players[this.activePlayer] !== this.localPlayer) {
            console.log("Autoplaying for player " + this.players[this.activePlayer].name);
            let card2 = this.players[this.activePlayer].cardHand.pop();
            if(!card2)
                card2 = this.DrawCard();
            if(card2)
                this.PlayCard(card2);
        }
    }
}