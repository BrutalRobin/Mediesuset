import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slider, stepper } from './route-animations'
import { Router, RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider,
    stepper
  ]
})
export class AppComponent {
  title = 'mediesuset';
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}
prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
