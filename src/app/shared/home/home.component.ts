import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {}
  
  scrollToSection(div: HTMLDivElement): void {
    div.scrollIntoView({ behavior: 'smooth' });
  }
}
