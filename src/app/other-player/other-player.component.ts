import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-other-player',
  templateUrl: './other-player.component.html',
  styleUrls: ['./other-player.component.css']
})
export class OtherPlayerComponent implements OnInit{
@Input() player!: Player;

ngOnInit() {}
}
