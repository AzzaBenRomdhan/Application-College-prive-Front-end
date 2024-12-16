import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-enseignant',
  templateUrl: './home-enseignant.component.html',
  styleUrls: ['./home-enseignant.component.scss']
})
export class HomeEnseignantComponent {
  constructor(private router: Router) {}

navigateTo(route: string) {
  this.router.navigate([route]);
}
  teacherMenuItems = [
    { name: 'Cours', icon: 'fas fa-book-open', route: '/cours' },
    { name: 'Réclamations', icon: 'fas fa-comment-dots', route: '/reclamations' },
    { name: 'Présence et Absence', icon: 'fas fa-user-check', route: '/presence-absence' },
    { name: 'Planning des Cours', icon: 'fas fa-calendar-alt', route: '/planning-cours' },
    { name: 'Calendrier Examens', icon: 'fas fa-calendar-day', route: '/calendrier-examens' },
    { name: 'Notes et Évaluations', icon: 'fas fa-clipboard-list', route: '/notes-evaluations' }
  ];
  
}
