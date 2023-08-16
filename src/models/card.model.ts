export class Card {
    public readonly id: number;
    public face: string;
    public color: string;
    public value: number;
    public active: boolean;
    public stackorder: number;

    constructor (id: number, face: string, color: string, value: number) {
        this.id = id;
        this.face = face;
        this.color = color;
        this.value = value;
        this.active = true;
        this.stackorder = 0;
    }
}