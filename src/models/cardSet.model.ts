import { CardFaceEnum } from "src/enums/cardFace.enum";
import { Card } from "./card.model";
import { CardColorEnum } from "src/enums/cardColor.enum";

export class CardSet {
    public cards: Card[];

    constructor() {
        let cardId = 1;
        this.cards = [
            new Card(cardId++, CardFaceEnum.Zero, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Zero)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Red, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.Zero, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Zero)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Green, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.Zero, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Zero)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Yellow, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.Zero, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Zero)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.One, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.One)),
            new Card(cardId++, CardFaceEnum.Two, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Two)),
            new Card(cardId++, CardFaceEnum.Three, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Three)),
            new Card(cardId++, CardFaceEnum.Four, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Four)),
            new Card(cardId++, CardFaceEnum.Five, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Five)),
            new Card(cardId++, CardFaceEnum.Six, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Six)),
            new Card(cardId++, CardFaceEnum.Seven, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Seven)),
            new Card(cardId++, CardFaceEnum.Eight, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Eight)),
            new Card(cardId++, CardFaceEnum.Nine, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Nine)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Skip, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Skip)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.Reverse, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.Reverse)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.DrawTwo, CardColorEnum.Blue, this.GetCardValue(CardFaceEnum.DrawTwo)),
            new Card(cardId++, CardFaceEnum.Wild, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.Wild)),
            new Card(cardId++, CardFaceEnum.Wild, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.Wild)),
            new Card(cardId++, CardFaceEnum.Wild, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.Wild)),
            new Card(cardId++, CardFaceEnum.Wild, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.Wild)),
            new Card(cardId++, CardFaceEnum.WildDrawFour, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.WildDrawFour)),
            new Card(cardId++, CardFaceEnum.WildDrawFour, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.WildDrawFour)),
            new Card(cardId++, CardFaceEnum.WildDrawFour, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.WildDrawFour)),
            new Card(cardId++, CardFaceEnum.WildDrawFour, CardColorEnum.Black, this.GetCardValue(CardFaceEnum.WildDrawFour))
        ];
    }

    GetCardValue (face: string): number {
        switch(face) {
            case CardFaceEnum.Zero:
                return 0;
            case CardFaceEnum.One:
                return 1;
            case CardFaceEnum.Two:
                return 2;
            case CardFaceEnum.Three:
                return 3;
            case CardFaceEnum.Four:
                return 4;
            case CardFaceEnum.Five:
                return 5;
            case CardFaceEnum.Six:
                return 6;
            case CardFaceEnum.Seven:
                return 7;
            case CardFaceEnum.Eight:
                return 8;
            case CardFaceEnum.Nine:
                return 9;
            case CardFaceEnum.Skip:
            case CardFaceEnum.Reverse:
            case CardFaceEnum.DrawTwo:
                return 20;
            case CardFaceEnum.Wild:
                return 40;
            case CardFaceEnum.WildDrawFour:
                return 50;
            default:
                return 0;
        }
    }

}