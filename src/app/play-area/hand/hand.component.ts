import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { Player } from 'src/models/player.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  player: Player;

  constructor(private userService: UserService) {
    this.player = userService.player;
  }

  ngOnInit() {}

  onCardPlayed(card: Card) {
    this.userService.PlayCard(card);
  }
}
