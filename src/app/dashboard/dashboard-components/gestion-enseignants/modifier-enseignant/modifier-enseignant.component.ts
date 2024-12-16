import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.scss']
})
export class ModifierEnseignantComponent {
  selectedClasse: string = 'classe1';  // Valeur initiale de la classe, à ajuster selon l'enseignant actuel

  constructor(private dialogRef: MatDialogRef<ModifierEnseignantComponent>) {}

  
  availableClasses = ['Term S', 'Term L', 'Term ES', 'Term STMG', 'Term STI2D']; // Liste des classes disponibles
  availableMatiere = ['Mathématiques', 'Français', 'Physique', 'SVT', 'Anglais']; // Liste des matières disponibles

  // Exemple d'enseignant à modifier
  enseignant = {
    nom: 'Dupont',
    prenom: 'Jean',
    username: 'jdupont',
    libelle: 'Professeur de Mathématiques',
    email: 'j.dupont@ecole.fr',
    classes: ['Term S', 'Term L'],  // Classes déjà affectées
    dateRecrutement: '2015-09-01',
    matiere: ['Mathématiques', 'Français']
  };

  // Variable pour la nouvelle classe à ajouter
  newClass: string = '';

// Méthode pour ajouter une nouvelle classe
assignNewClass() {
  // Pour cette version statique, on ne gère pas d'input utilisateur dynamique. La classe à ajouter peut être "statique".
  if (this.newClass && !this.enseignant.classes.includes(this.newClass)) {
    this.enseignant.classes.push(this.newClass);
    this.newClass = ''; // Réinitialiser après ajout
    alert('Classe ajoutée avec succès.');
  } else {
    alert('Cette classe est déjà assignée ou invalide.');
  }
}

  // Méthode pour enregistrer les modifications
  saveChanges() {

  }
  enregistrerModification() {
    // Logique d'enregistrement ici
    // Par exemple, mettre à jour la classe de l'enseignant avec la valeur de selectedClasse
    console.log('Classe modifiée :', this.selectedClasse);
    this.dialogRef.close(); // Ferme la fenêtre de dialogue après l'enregistrement
  }
}
