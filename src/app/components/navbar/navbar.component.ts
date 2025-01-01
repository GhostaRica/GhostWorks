import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ConfigService } from '../../services/config.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [RouterLink, CommonModule]
})
export class NavbarComponent {
  darkModeService: DarkModeService = inject(DarkModeService);
  isDarkMode = false;

  constructor() {
    this.isDarkMode = this.darkModeService.isDarkMode();
  }

  toggleDarkMode() {
    this.darkModeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}