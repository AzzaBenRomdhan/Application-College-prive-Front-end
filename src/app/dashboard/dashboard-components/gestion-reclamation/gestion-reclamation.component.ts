import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-gestion-reclamation',
  templateUrl: './gestion-reclamation.component.html',
  styleUrls: ['./gestion-reclamation.component.scss']
})
export class GestionReclamationComponent implements OnInit{
  reclamations: any[] = [];
  displayedColumns: string[] = ['type', 'description', 'status', 'action'];
  selectedReclamation: any;
  response: string = '';

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.loadReclamations();
  }

  loadReclamations() {
    this.reclamationService.getAllReclamations().subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des réclamations :', error);
      }
    );
  }

  viewReclamation(reclamation: any) {
    this.selectedReclamation = reclamation;
  }

  resolveReclamation(reclamation: any) {
    reclamation.status = 'resolue';
    // Optionnel : Mettre à jour côté serveur si nécessaire
    this.reclamationService.getReclamationById(reclamation.id).subscribe(
      () => {
        console.log('Réclamation résolue');
      },
      (error) => {
        console.error('Erreur lors de la résolution :', error);
      }
    );
  }

  submitResponse() {
    if (this.selectedReclamation) {
      this.reclamationService.respondToReclamation(this.selectedReclamation.id, this.response).subscribe(
        () => {
          console.log('Réponse envoyée');
          this.selectedReclamation.response = this.response;
          this.response = '';
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de la réponse :', error);
        }
      );
    }
  }
}
