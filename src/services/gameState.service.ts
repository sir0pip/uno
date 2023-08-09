import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";
import { CardSet } from "../models/cardSet.model";
import { DirectionOfPlay } from "../enums/directionOfPlay.enum";
import { Player } from "../models/player.model";
import { CardColorEnum } from "src/enums/cardColor.enum";
import { CardFaceEnum } from "src/enums/cardFace.enum";

@Injectable({ providedIn: "root"})
export class GameStateService {
    public drawDeck: Card[];
    public discardDeck: Card[];
    public playerCount: number;
    public players: Player[];
    public activePlayer: number;
    public directionOfPlay: string;
    public activeColor: string;
    public activeFace: string;

    constructor() {
        this.drawDeck = [];
        this.ShuffleDrawDeck();
        this.discardDeck = [];
        this.playerCount = 0;
        this.players = [];
        this.activePlayer = 0;
        this.directionOfPlay = DirectionOfPlay.Forward;
        this.activeColor = CardColorEnum.Black;
        this.activeFace = CardFaceEnum.Wild;
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

    SetupNewGame() {
        this.ResetPlayerHands();
        this.drawDeck.length = 0;
        this.drawDeck.push(...new CardSet().cards);
        this.ShuffleDrawDeck();
        this.DealInitialCards();
        this.DiscardTopCard();
    }

    DrawCard() {
        if(this.drawDeck.length === 0) {
            this.drawDeck = this.discardDeck;
            this.discardDeck = [];
            this.ShuffleDrawDeck();
        }
        let card = this.drawDeck.pop();
        return card;
    }

    SetNextActivePlayer() {
        if(this.directionOfPlay === DirectionOfPlay.Forward) {
            this.activePlayer++;
            if(this.activePlayer >= this.players.length)
                this.activePlayer = 0;
        }
        else {
            this.activePlayer++;
            if(this.activePlayer < 0)
                this.activePlayer = this.players.length-1;
        }
    }

    SetActiveCards(player: Player) {
        let activeCardCount: number = 0;
        let drawFourWild: Card[] = [];
        console.log("Checking active cards");
        player.cardHand.forEach((card) => {
            card.active = false;
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
    }
}