import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClasseService } from 'src/app/services/classe.service';
import { EmploiService } from 'src/app/services/emploi.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SallesService } from 'src/app/services/salles.service';

@Component({
  selector: 'app-gestion-emploi',
  templateUrl: './gestion-emploi.component.html',
  styleUrls: ['./gestion-emploi.component.scss']
})
export class GestionEmploiComponent implements OnInit {
  
  emploiForm: FormGroup;
  isLoading = false;
  message: string = '';
  success: boolean = false;

  salles: any[] = [];
  matieres: any[] = [];
  classes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private emploiService: EmploiService,
    private salleService: SallesService,
    private classService: ClasseService,
    private matiereService: MatieresService,
    private snackBar: MatSnackBar
  ) {
    this.emploiForm = this.fb.group({
      nomjour: ['', Validators.required],
      heure: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomSalle: ['', Validators.required],
      nomMatiere: ['', Validators.required],
      nomClasse: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadSalles();
    this.loadMatieres();
    this.loadClasses();
  }

  loadSalles() {
    this.salleService.afficherSalles().subscribe((salles) => {
      this.salles = salles;
    });
  }

  loadMatieres() {
    this.matiereService.allMatieres().subscribe((matieres) => {
      this.matieres = matieres;
    });
  }

  loadClasses() {
    this.classService.allClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  onSubmit(): void {
    if (this.emploiForm.valid) {
      this.isLoading = true; // Activer le loader
      const { nomjour, heure, email, nomSalle, nomMatiere, nomClasse } = this.emploiForm.value;
  
      // Créer l'objet emploiData
      const emploiData = {
        nomjour,
        heure,
      };
  
      this.emploiService.creerEmploi(emploiData, email, nomSalle, nomMatiere, nomClasse).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          if (typeof response === 'string') {
            // If the response is a string, it is an error message
            this.success = false;
            this.message = response;
            this.snackBar.open(response, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
          } else {
            this.success = response === 'true';
            this.message = 'Emploi créé avec succès.';
            this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['success-snackbar'] });
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.success = false;
          console.error('Erreur lors de la soumission:', err);
          this.message = 'Une erreur est survenue. Veuillez réessayer.';
          this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs requis.';
      this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
    }
  }
 
}
