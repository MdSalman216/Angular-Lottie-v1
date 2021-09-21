import { Component } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_beQfNm.json',
    autoplay: true,
    loop: true,
  };

  animationCreated(anim: any): void {
    this.anim = anim;
    // console.warn(anim);

    setTimeout(function () {
      // console.log('RENDERERS: ', anim.renderer);
      console.log('ELEMENTS: ', anim.renderer.elements);
      // console.log(anim.renderer.elements[1]);
      // anim.renderer.elements[1].updateDocumentData({ t: 'took train' });
    }, 3000);
  }

  private anim: any;
  public animationSpeed: number = 1;

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: string) {
    this.animationSpeed = Number(speed);
    this.anim.setSpeed(Number(speed));
  }
}
