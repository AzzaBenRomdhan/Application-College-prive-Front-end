import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-eleve',
  templateUrl: './home-eleve.component.html',
  styleUrls: ['./home-eleve.component.scss']
})
export class HomeEleveComponent {
  constructor(private router: Router) {}

navigateTo(route: string) {
  this.router.navigate([route]);
}
  menuItems = [
    { name: 'Cours', icon: 'fas fa-book', route: '/eleve/mescours' },
    { name: 'Moyennes', icon: 'fas fa-chart-line', route: '/eleve/notes-moyenne' },
    { name: 'Menu', icon: 'fas fa-utensils', route: '/menu' },
    { name: 'Réclamation', icon: 'fas fa-comments', route: '/reclamation' },
    { name: 'Emploi du Temps', icon: 'fas fa-calendar-alt', route: '/emploi-du-temps' },
    { name: 'Calendrier Examen', icon: 'fas fa-calendar-check', route: '/calendrier-examen' }
  ];
  
  previousPosts = [
    {
      title: 'Annonce : Nouvelle inscription',
      description: 'Annonce concernant les nouvelles inscriptions pour l’année scolaire.',
      icon: '📢',
      date: '2024-12-01'
    },
    {
      title: 'Événement : Fête de fin d’année',
      description: 'Venez célébrer avec nous à la fête de fin d’année.',
      icon: '🎉',
      date: '2024-11-25'
    },
    {
      title: 'Actualité : Résultats des examens',
      description: 'Annonce des résultats des examens de cette session.',
      icon: '📰',
      date: '2024-11-10'
    }
  ];

  onSubmit(): void {
    console.log('Offre publiée');
  }
}
