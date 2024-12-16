import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { EmploiService } from 'src/app/services/emploi.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SallesService } from 'src/app/services/salles.service';

@Component({
  selector: 'app-gestion-clendrier',
  templateUrl: './gestion-clendrier.component.html',
  styleUrls: ['./gestion-clendrier.component.scss'],
})
export class GestionClendrierComponent implements OnInit {
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
    private matiereService: MatieresService
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
      const body = JSON.stringify(this.emploiForm.value);
      console.log("heda l objet",body)
      // Passer tous les arguments à la méthode creerEmploi
      this.emploiService.creerEmploi(emploiData, email, nomSalle, nomMatiere, nomClasse).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.success = response === 'true';
          this.message = 'Emploi créé avec succès.' ;
        },
        error: (err) => {
          this.isLoading = false;
          this.success = false;
          console.error('Erreur lors de la soumission:', err);
          this.message = 'Une erreur est survenue. Veuillez réessayer.';
        },
      });
    } else {
      this.message = 'Veuillez remplir tous les champs requis.';
    }
  }
}
