export class Card {
    public readonly id: number;
    public face: string;
    public color: string;
    public active: boolean;
    public stackorder: number;

    constructor (id: number, face: string, color: string) {
        this.id = id;
        this.face = face;
        this.color = color;
        this.active = true;
        this.stackorder = 0;
    }
}