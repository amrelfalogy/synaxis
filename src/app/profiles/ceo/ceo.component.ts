import { Component } from '@angular/core';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css'],
})
export class CeoComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;

  skills = [
    {
      name: 'Investment & Management',
      desc: 'Managed client portfolios with an investment volume exceeding AED 6 billion.',
      icon: 'icon-autocad',
      color: 'border-autocad',
    },
    {
      name: 'Real Estate Development',
      desc: 'Extensive experience in real estate investment, and construction in the UAE, Saudi Arabia, Georgia, Turkey, and Egypt.',
      icon: 'icon-sap2000',
      color: 'border-sap',
    },
    {
      name: 'Business Strategy & Leadership',
      desc: 'A visionary leader focused on transferring international expertise to the Egyptian market, and fostering partnerships.',
      icon: 'icon-revit',
      color: 'border-revit',
    },
    {
      name: 'Crisis Management',
      desc: 'Demonstrated resilience and commitment during the COVID-19 crisis, supporting employees and maintaining projects.',
      icon: 'icon-photoshop',
      color: 'border-photoshop',
    },
    {
      name: 'Cross-Border Business Development',
      desc: 'Skilled in expanding business across multiple regions, understanding diverse markets, and facilitating international growth strategies.',
      icon: 'icon-illustrator',
      color: 'border-illustrator',
    },
    {
      name: 'Economic Development Vision',
      desc: "Dedicated to fostering Egypt's role as a leader in regional business and investment.",
      icon: 'icon-illustrator',
      color: 'border-excel',
    },
  ];
}
