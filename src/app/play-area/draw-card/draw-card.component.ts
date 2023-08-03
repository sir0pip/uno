import { Component } from '@angular/core';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent {
  allowDraw: boolean  = true;

  CanDraw() {
    return this.allowDraw;
  }

  OnDrawCard() {
    this.allowDraw = false;
  }
}
