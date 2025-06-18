import { Component } from '@angular/core';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sw-engineer',
  templateUrl: './sw-engineer.component.html',
  styleUrls: ['./sw-engineer.component.css'],
})
export class SwEngineerComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  profile: any;

  isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}

getCardDirection(job: any): 'rtl' | 'ltr' {
  const titleIsArabic = this.isArabicText(job.title || '');
  const descriptionIsArabic = this.isArabicText(job.description || '');
  return titleIsArabic || descriptionIsArabic ? 'rtl' : 'ltr';
}


  skills = [
    {
      name: 'Frontend Development',
      desc: 'Experienced in building dynamic web applications using Angular. with state management, HTTP endpoints, directives, and observables.',
      icon: 'icon-autocad',
      color: 'border-autocad',
    },
    {
      name: 'Backend Development',
      desc: 'Developed full-stack solutions using MEAN stack including server-side logic, API integration, and database management.',
      icon: 'icon-sap2000',
      color: 'border-sap',
    },
    {
      name: 'Ui/UX',
      desc: 'Skilled in designing user interfaces with attention to visual hierarchy, usability, and modern design trends to enhance user experience.',
      icon: 'icon-revit',
      color: 'border-revit',
    },
    {
      name: 'Responsive Design',
      desc: 'Experienced in creating fully responsive web applications with cross-browser compatibility.',
      icon: 'icon-photoshop',
      color: 'border-photoshop',
    },
    {
      name: 'Embeded System',
      desc: 'Worked on hardware-based projects like Anti-Theft Systems, Fire Alarm Systems, and Self-Driving Cars.',
      icon: 'icon-illustrator',
      color: 'border-illustrator',
    },
    {
      name: 'Project Management',
      desc: 'Utilized Agile and Scrum methodologies to manage and deliver projects efficiently, timely delivery of milestones.',
      icon: 'icon-excel',
      color: 'border-excel',
    },
  ];
}
