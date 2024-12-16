import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-discipline',
  templateUrl: './gestion-discipline.component.html',
  styleUrls: ['./gestion-discipline.component.scss']
})
export class GestionDisciplineComponent {
  students = [
    { name: 'John Doe', reason: 'Manque de respect', status: 'eliminated', date: '2024-12-01' },
    { name: 'Jane Smith', reason: 'Violence', status: 'eliminated', date: '2024-12-02' },
    // Ajouter d'autres élèves
  ];

  displayedColumns: string[] = ['name', 'reason', 'status', 'action'];

  selectedStudent: any;
  response: string = '';

  convocationParent(student: any) {
    // Logique pour convocation des parents
    // Vous pouvez afficher un formulaire, envoyer une notification ou un email, etc.
    console.log('Convocation envoyée pour', student.name);
  }

  reinstateStudent(student: any) {
    // Réintégrer l'élève
    student.status = 'not-eliminated';
  }

  removeStudent(student: any) {
    // Supprimer l'élève de la liste
    const index = this.students.findIndex(s => s.name === student.name);
    if (index !== -1) {
      this.students.splice(index, 1);
      // Réaffecter la liste pour forcer la mise à jour
      this.students = [...this.students];
      // S'assurer que la suppression est bien prise en compte
      console.log(`L'élève ${student.name} a été supprimé.`);
    }
  }

  submitResponse() {
    // Soumettre la réponse de l'admin
    this.selectedStudent.response = this.response;
    this.response = '';
  }
}
