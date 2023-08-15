import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayAreaComponent } from './play-game/play-area/play-area.component';
import { DeckAreaComponent } from './play-game/deck-area/deck-area.component';
import { DeckComponent } from './play-game/deck-area/deck/deck.component';
import { DiscardComponent } from './play-game/deck-area/discard/discard.component';
import { DrawCardComponent } from './play-game/play-area/draw-card/draw-card.component';
import { HandComponent } from './play-game/play-area/hand/hand.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './play-game/card/card.component';
import { UserService } from 'src/services/user.service';
import { OtherPlayerComponent } from './play-game/other-player/other-player.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { RouterModule, Routes } from '@angular/router';
import { InvitePlayerComponent } from './invite-player/invite-player.component';
import { PlayGameComponent } from './play-game/play-game.component';

const appRoutes: Routes =  [
  {
    path: "",
    component: PlayGameComponent
  },
  {
    path: "inviteplayer",
    component: InvitePlayerComponent
  },
  {
    path: "creategame",
    component: CreateGameComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    DeckAreaComponent,
    DeckComponent,
    DiscardComponent,
    DrawCardComponent,
    HandComponent,
    CardComponent,
    OtherPlayerComponent,
    CreateGameComponent,
    PlayGameComponent,
    InvitePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }