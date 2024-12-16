import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatieresService } from 'src/app/services/matieres.service';

@Component({
  selector: 'app-gestion-matiere',
  templateUrl: './gestion-matiere.component.html',
  styleUrls: ['./gestion-matiere.component.scss']
})
export class GestionMatiereComponent {
  matieres: any[] = [];
  openFormdiv: boolean = false;
  matiereForm!: FormGroup;


  constructor(
    private matiereService: MatieresService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllMatieres();
    this.matiereForm = this.fb.group({
      nom: ['', [Validators.required]],
      coefficient: ['', [Validators.required]], // Contient le nom du département
    });
  }
  // Ajouter une salle
  ajouteMatiere(): void {
    if (this.matiereForm.valid) {
      const matierData = {
        nom: this.matiereForm.value.nom,
        coefficient: this.matiereForm.value.coefficient
      };

      this.matiereService.addMatiere(matierData).subscribe({
        next: (response) => {
          console.log('Matiere ajoutée avec succès:', response);
          this.getAllMatieres(); // Rafraîchir la liste
          this.matiereForm.reset();
          this.openFormdiv = false; // Fermer le formulaire
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la salle:', error);
        },
      });
    }
  }

  getAllMatieres(): void {
    this.matiereService.allMatieres().subscribe({
      next: (response) => {
        this.matieres = response;
        console.log('Matieres récupérées:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des matieres:', error);
      },
    });
  }

  openForm(): void {
    this.openFormdiv = !this.openFormdiv;
  }

}
