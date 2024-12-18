import { Component } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent {
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
