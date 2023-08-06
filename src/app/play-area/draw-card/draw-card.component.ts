import { Component } from '@angular/core';
import { Card } from 'src/models/card.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent {
  allowDraw: boolean  = true;

  constructor(private userService: UserService) {}

  CanDraw() {
    return this.allowDraw;
  }

  OnDrawCard() {
    this.userService.AddCard(new Card(10, "W", "black"));
    //this.allowDraw = false;
  }
}
