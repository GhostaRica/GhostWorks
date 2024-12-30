import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ConfigService } from '../../services/config.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [RouterLink]
})
export class NavbarComponent {
  darkModeService: DarkModeService = inject(DarkModeService);
  isDarkMode = false;
  baseUrl: string;

  constructor(private configService: ConfigService) {
    this.isDarkMode = this.darkModeService.isDarkMode();
    this.baseUrl = this.configService.getBaseUrl();
  }

  toggleDarkMode() {
    this.darkModeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}