import { Component } from '@angular/core';
import { ActualiesService } from 'src/app/services/actualies.service';

@Component({
  selector: 'app-gestion-actualites',
  templateUrl: './gestion-actualites.component.html',
  styleUrls: ['./gestion-actualites.component.scss']
})
export class GestionActualitesComponent {
  /* previousPosts = [
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
 */
  titre: string = '';
  description: string = '';
  cible: string = 'ELEVE';  // Exemple de cible (ELEVE, ENSEIGNANT, etc.)
  video: File | null = null;
  fichier: File | null = null;

  constructor(private actualiteService: ActualiesService) {}

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    const actualite = {
      titre: this.titre,
      description: this.description,
      cible: this.cible
    };

    this.actualiteService.createActualite(actualite, this.video, this.fichier).subscribe({
      next: (response) => {
        console.log('Actualité créée avec succès', response);
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'actualité', error);
      }
    });
  }

  // Méthodes pour gérer les fichiers téléchargés
  onVideoChange(event: any): void {
    this.video = event.target.files[0];
  }

  onFichierChange(event: any): void {
    this.fichier = event.target.files[0];
  }
}
