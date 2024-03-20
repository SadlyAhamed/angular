import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: "<store></store>",
  template: "<router-outlet></router-outlet>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}
