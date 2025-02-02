import { Component } from '@angular/core';
import { AnchorButtonComponent } from '../../components/ui/anchor-button/anchor-button.component';

@Component({
    selector: 'app-home',
    imports: [AnchorButtonComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToSection(div: HTMLDivElement): void {
    const offset = 64;
    const topPosition = div.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  }
}
