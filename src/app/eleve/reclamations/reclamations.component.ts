import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent {

  reclamationForm: FormGroup; // Pour gérer le formulaire
  successMessage: string | null = null; // Pour afficher un message de succès
  errorMessage: string | null = null;   

  constructor(
    private reclamationsService: ReclamationService,
    private fb: FormBuilder
  ) {
    // Initialisation du formulaire
    this.reclamationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required]
    });
  }

  // Soumettre la réclamation
  onSubmit() {
    if (this.reclamationForm.valid) {
      const { email, sujet } = this.reclamationForm.value;

      this.reclamationsService.reclamer({ sujet }, email).subscribe({
        next: (response) => {
          this.successMessage = 'Réclamation envoyée avec succès.';
          this.errorMessage = null;
          console.log('Réponse du serveur :', response);
        },
        error: (error) => {
          this.successMessage = null;
          this.errorMessage = 'Erreur lors de l\'envoi de la réclamation.';
          console.error('Erreur:', error);
        }
      });
    }
  }
  
}