export class Card {
    public face: string;
    public color: string;
    public playable: boolean;

    constructor (face: string, color: string) {
        this.face = face;
        this.color = color;
        this.playable = false;
    }

    DoAction() {
        switch(this.face) {
            case "R":
                //reverse direction
                return;
            case "+2":
                // next person draws 2 cards
                return;
            case "S":
                // skip next person's turn
                return;
            case "W":
                // select active color
                return;
            case "W+4":
                // select active color
                // next person draws 4 cards
                return;
        }
    }
}