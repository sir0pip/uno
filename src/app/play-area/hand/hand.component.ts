import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  user!: UserService;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService;
  }

  onCardPlayed(card: Card) {
    this.user.RemoveCard(card);
  }
}
