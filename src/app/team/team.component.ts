import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamMembers: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.get('team.members').subscribe((members) => {
      this.teamMembers = members;
    });
  }
}
