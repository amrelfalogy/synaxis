import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  stats = [
    { label: 'Projects', value: 70, icon: 'checklist' },
    { label: 'Employees', value: 140, icon: 'group' },
    { label: 'Customers', value: 340, icon: 'groups' },
  ];

  private statsAnimated = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const statisticsSection = document.querySelector('.statistics');
    if (statisticsSection) {
      const sectionTop = statisticsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && !this.statsAnimated) {
        this.animateStats();
        this.statsAnimated = true;
      }
    }
  }

  animateStats(): void {
    this.stats.forEach((stat, index) => {
      const element = document.getElementById(`stat-${index}`);
      if (element) {
        let count = 0;
        const target = stat.value;
        const increment = Math.ceil(target / 50);
        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          element.innerText = count.toString();
        }, 50);
      }
    });
  }
}
