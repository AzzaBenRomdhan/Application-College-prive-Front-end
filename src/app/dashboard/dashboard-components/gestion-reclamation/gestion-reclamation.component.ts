import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-reclamation',
  templateUrl: './gestion-reclamation.component.html',
  styleUrls: ['./gestion-reclamation.component.scss']
})
export class GestionReclamationComponent {
  reclamations = [
    { type: 'technique', description: 'Problème de connexion', status: 'en-attente', date: '2024-12-05' },
    { type: 'enseignement', description: 'Manque de matériel', status: 'en-attente', date: '2024-12-06' },
    // Ajouter plus de réclamations
  ];

  displayedColumns: string[] = ['type', 'description', 'status', 'action'];

  filterType = 'all';
  filterStatus = 'all';
  selectedReclamation: any;
  response: string = '';

  viewReclamation(reclamation: any) {
    this.selectedReclamation = reclamation;
  }

  resolveReclamation(reclamation: any) {
    // Marquer la réclamation comme résolue et mettre à jour la liste
    reclamation.status = 'resolue';
  }

  submitResponse() {
    // Soumettre la réponse de l'admin
    this.selectedReclamation.response = this.response;
    this.response = '';
  }
}
