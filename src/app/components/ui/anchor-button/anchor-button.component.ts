import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anchor-button',
  standalone: true,
  templateUrl: './anchor-button.component.html',
  styleUrls: ['./anchor-button.component.css'],
  imports: [RouterLink, CommonModule]
})
export class AnchorButtonComponent {
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() target: '_self' | '_blank' = '_self'; // Open in the same tab or new tab
}