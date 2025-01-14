import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-gestion-paiement',
  templateUrl: './gestion-paiement.component.html',
  styleUrls: ['./gestion-paiement.component.scss']
})
export class GestionPaiementComponent {
  payementForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  loading: boolean = false;

  modepayOptions = ['Mensiel', 'Annuel', 'Trimestre'];
  modalitePayOptions = ['CASH', 'CHECK', 'ONLINE'];
  typepayOptions = ['Scolaire', 'Cantine'];
  statuspayOptions = ['enattente', 'réussie', 'FAILED'];
  trimestreOptions = ['Trimestre1', 'Trimestre2', 'Trimestre3'];

  constructor(private fb: FormBuilder, private payementService: PaiementService) {
    this.payementForm = this.fb.group({
      matricule: ['', Validators.required],
      amountPaye: [null, [Validators.required, Validators.min(1)]], // Montant minimum doit être > 0
      modepay: ['', Validators.required],
      modalitePay: ['', Validators.required],
      typepay: ['', Validators.required],
      statuspay: ['', Validators.required],
      trimestre: [''],
      date: [''],
    });
  }

  // Fonction d'affichage des messages d'erreur pour un champ donné
  getErrorMessage(fieldName: string): string | null {
    const field = this.payementForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'Ce champ est requis.';
    }
    if (field?.hasError('min')) {
      return 'Le montant doit être supérieur à zéro.';
    }
    return null;
  }

  onSubmit() {
    if (this.payementForm.valid) {
      this.loading = true;  // Affichage du loader

      this.payementService.enregistrerPayement(this.payementForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'Paiement enregistré avec succès.';
          this.errorMessage = null;
          this.loading = false;  // Masquage du loader
          console.log('Réponse du serveur :', response);
        },
        error: (error) => {
          this.successMessage = null;
          // Récupère le message d'erreur du backend s'il existe
          this.errorMessage = error;
          this.loading = false;  // Masquage du loader
          console.error('Erreur:', error);
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
      this.successMessage = null;
    }
  }
}
