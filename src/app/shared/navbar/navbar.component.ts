import { Component } from '@angular/core';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {
    this.isDarkMode = this.darkModeService.isDarkMode();
  }

  toggleDarkMode() {
    this.darkModeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}