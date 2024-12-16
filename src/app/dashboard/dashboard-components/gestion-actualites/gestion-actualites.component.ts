import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-actualites',
  templateUrl: './gestion-actualites.component.html',
  styleUrls: ['./gestion-actualites.component.scss']
})
export class GestionActualitesComponent {
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
