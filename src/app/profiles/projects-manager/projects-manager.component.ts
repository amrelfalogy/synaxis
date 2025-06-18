import { Component } from '@angular/core';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects-manager',
  templateUrl: './projects-manager.component.html',
  styleUrls: ['./projects-manager.component.css'],
})
export class ProjectsManagerComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  profile: any; 

  isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}

getCardDirection(profile: any): 'rtl' | 'ltr' {
  const titleIsArabic = this.isArabicText(profile.title || '');
  const descriptionIsArabic = this.isArabicText(profile.description || '');
  return titleIsArabic || descriptionIsArabic ? 'rtl' : 'ltr';
}


  skills = [
    {
      name: 'AUTOCAD',
      desc: 'A powerful CAD software used for drafting, designing, and modeling architectural and engineering projects with precision.',
      icon: 'icon-autocad',
      color: 'border-autocad',
    },
    {
      name: 'SAP 2000',
      desc: 'A structural analysis and design software widely used for analyzing complex structures, including buildings and bridges.',
      icon: 'icon-sap2000',
      color: 'border-sap',
    },
    {
      name: 'REVIT',
      desc: 'Building Information Modeling (BIM) software that enables architects and engineers to design and visualize structures in 3D.',
      icon: 'icon-revit',
      color: 'border-revit',
    },
    {
      name: 'PHOTOSHOP',
      desc: 'An industry-leading software for image editing, graphic design, and digital art, offering tools for photo manipulation and design creation.',
      icon: 'icon-photoshop',
      color: 'border-photoshop',
    },
    {
      name: 'ILLUSTRATOR',
      desc: 'A vector graphics software used for creating logos, illustrations, and complex designs with precision and scalability.',
      icon: 'icon-illustrator',
      color: 'border-illustrator',
    },
    {
      name: 'EXCEL',
      desc: 'A spreadsheet application used for data analysis, financial modeling, and automation through functions, formulas, and pivot tables.',
      icon: 'icon-excel',
      color: 'border-excel',
    },
  ];
}
