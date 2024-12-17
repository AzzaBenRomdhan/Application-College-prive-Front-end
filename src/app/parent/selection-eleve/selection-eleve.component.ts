import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'app-selection-eleve',
  templateUrl: './selection-eleve.component.html',
  styleUrls: ['./selection-eleve.component.scss']
})
export class SelectionEleveComponent {
  students: any[] = [];

  constructor(private parentService: ParentService, private router: Router) {}

  ngOnInit(): void {
   const emailParent = localStorage.getItem('email'); 
    console.log("this is my email ^parent", emailParent);
    this.parentService.getMesEleves(emailParent!).subscribe(
      (data) => {
        this.students = data;
        console.log("mes eleves", data)
      },
      (error) => {
        console.error('Erreur lors du chargement des élèves :', error);
      }
    );
  }

  selectStudent(student: any): void {
    console.log('Élève sélectionné :', student);
    this.router.navigate(["/parent/moyenne-note", student.eleve.id]);

  }
}
