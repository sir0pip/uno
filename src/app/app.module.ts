import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { DeckAreaComponent } from './deck-area/deck-area.component';
import { DeckComponent } from './deck-area/deck/deck.component';
import { DiscardComponent } from './deck-area/discard/discard.component';
import { DrawCardComponent } from './play-area/draw-card/draw-card.component';
import { HandComponent } from './play-area/hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    DeckAreaComponent,
    DeckComponent,
    DiscardComponent,
    DrawCardComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
