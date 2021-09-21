import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
