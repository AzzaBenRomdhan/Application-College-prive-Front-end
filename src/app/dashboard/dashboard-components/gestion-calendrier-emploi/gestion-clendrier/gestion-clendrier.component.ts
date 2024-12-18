import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { EmploiService } from 'src/app/services/emploi.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SallesService } from 'src/app/services/salles.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-clendrier',
  templateUrl: './gestion-clendrier.component.html',
  styleUrls: ['./gestion-clendrier.component.scss'],
})
export class GestionClendrierComponent implements OnInit{
  calendarForm!: FormGroup;
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
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.calendarForm = this.fb.group({
      date: ['', Validators.required],
      nomjour: ['', Validators.required],
      periode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomSalle: ['', Validators.required],
      nomMatiere: ['', Validators.required],
      nomClasse: ['', Validators.required],
      typecalendrier: ['', Validators.required]
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
    if (this.calendarForm.valid) {
      this.isLoading = true; // Activer le loader
      const { date, nomjour, periode, email, nomSalle, nomMatiere, nomClasse, typecalendrier } = this.calendarForm.value;

      // Créer l'objet calendrier
      const calendrier = {
        date: date,
        nomjour: nomjour,
        periode: periode
      };

      this.emploiService.creerCalendrier(calendrier, email, nomSalle, nomMatiere, nomClasse, typecalendrier).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          if (typeof response === 'string') {
            // Si la réponse est un message d'erreur sous forme de chaîne
            this.success = false;
            this.message = response;
            this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
          } else if (response === 'true') {
            // Si la réponse est 'true' indiquant que l'action a réussi
            this.success = true;
            this.message = 'Calendrier créé avec succès.';
            this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['success-snackbar'] });
            this.router.navigate(['/success-path']);  // Redirection après succès, remplace '/success-path' par le chemin approprié.
          } else {
            // Si une autre réponse est reçue
            this.success = false;
            this.message = 'Une erreur inconnue est survenue, veuillez réessayer.';
            this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.success = false;
          console.error('Erreur lors de la soumission:', err);
          this.message = 'Une erreur est survenue lors de la soumission du calendrier. Veuillez réessayer.';
          this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs requis.';
      this.snackBar.open(this.message, 'Fermer', { duration: 3000, panelClass: ['error-snackbar'] });
    }
  }
}