import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { AppDeckAreaComponent } from './app-deck-area/app-deck-area.component';
import { AppDeckComponent } from './app-deck-area/app-deck/app-deck.component';
import { AppDiscardComponent } from './app-deck-area/app-discard/app-discard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    AppDeckAreaComponent,
    AppDeckComponent,
    AppDiscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
