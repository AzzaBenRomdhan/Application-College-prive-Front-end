import { Component, OnInit } from '@angular/core';
import { DisciplineService } from 'src/app/services/discipline.service';

@Component({
  selector: 'app-gestion-discipline',
  templateUrl: './gestion-discipline.component.html',
  styleUrls: ['./gestion-discipline.component.scss']
})
export class GestionDisciplineComponent implements OnInit{
  disciplines: any[] = [];
  displayedColumns: string[] = ['eleve', 'enseignant', 'status', 'action'];
  selectedDiscipline: any = null;
  response: string = '';
  status: string = '';
  constructor(private disciplineService: DisciplineService) {}

  ngOnInit(): void {
    this.getAllDisciplines();
  }

  getAllDisciplines() {
    this.disciplineService.getDisciplines().subscribe(
      (response: any[]) => {
        this.disciplines = response.filter((discipline:any) => discipline.statusDisc ==="PENDING_APPROVAL");
        console.log('Liste récupérée avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
  
  removeDiscipline(discipline: any) {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir suprimer cette discipline ?');
    if(confirmation){
    this.disciplineService.deleteDiscipline(discipline.id).subscribe(
      () => {
        this.disciplines = this.disciplines.filter(d => d.id !== discipline.id);
        console.log(`Discipline de l'élève ${discipline.eleve.nom} supprimée.`);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la discipline', error);
      }
    );
   } else {
    console.log("supprission annulé");
   }
  }

cancel(){
  this.selectedDiscipline = null;
}
  submitResponse() {
    if (this.selectedDiscipline) {
      const status = this.status; 
      const adminComment = this.response;
      const confirmation = window.confirm('Êtes-vous sûr d\'envoyer cette réponse ?');
      if(confirmation){
        this.disciplineService.validerOuRefuser(this.selectedDiscipline.id, status, adminComment).subscribe(
          () => {
            console.log(`Réponse envoyée pour ${this.selectedDiscipline.eleve.nom}`);
            this.response = '';
            this.selectedDiscipline = null;
          },
          (error) => {
            console.error('Erreur lors de l\'envoi de la réponse', error);
          }
        );
      } else {
        console.error('Envoie annulé');
      }
      
    }
  }
  
  openDisciplineDetails(discipline: any) {
    this.selectedDiscipline = discipline;
  }
}
