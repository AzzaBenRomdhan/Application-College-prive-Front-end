import { Component } from '@angular/core';

@Component({
  selector: 'app-calendrier-emploi',
  templateUrl: './calendrier-emploi.component.html',
  styleUrls: ['./calendrier-emploi.component.scss']
})
export class CalendrierEmploiComponent {
  menuItems = [
      { name: 'Emploi du temps', icon: 'fas fa-calendar-alt', action: () => this.openEmploi() },
      { name: 'Calendrier examen', icon: 'fas fa-calendar-check', action: () => this.openCalendrier() },
    ];
  
    routerActive: string = "activelink";
    showEmploiForm = false;
    showCalendrierForm = false;
  openEmploi(): void {
    this.showEmploiForm = !this.showEmploiForm; 
    this.showCalendrierForm = false; 
  }

  openCalendrier(): void {
    this.showCalendrierForm = !this.showCalendrierForm; 
    this.showEmploiForm = false; 
  }
  handleMenuClick(item: any): void {
    item.action();
  }
}
