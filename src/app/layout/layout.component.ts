import { Component } from '@angular/core';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  currentYear = new Date().getFullYear();
}
