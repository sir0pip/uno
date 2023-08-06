export class Card {
    public readonly id: number;
    public face: string;
    public color: string;
    public active: boolean;

    constructor (id: number, face: string, color: string) {
        this.id = id;
        this.face = face;
        this.color = color;
        this.active = true;
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