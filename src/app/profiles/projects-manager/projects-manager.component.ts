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

  skills = [
    {
      name: 'AUTOCAD',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-autocad',
      color: 'border-autocad',
    },
    {
      name: 'SAP 2000',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-sap2000',
      color: 'border-sap',
    },
    {
      name: 'REVIT',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-revit',
      color: 'border-revit',
    },
    {
      name: 'PHOTOSHOP',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-photoshop',
      color: 'border-photoshop',
    },
    {
      name: 'ILLUSTRATOR',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-illustrator',
      color: 'border-illustrator',
    },
    {
      name: 'EXCEL',
      desc: 'lorem ipsuems stio narc mestiro karji of narrling',
      icon: 'icon-excel',
      color: 'border-excel',
    },
  ];
}
