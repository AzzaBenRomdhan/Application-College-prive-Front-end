import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { DetailsEnseigantComponent } from './details-enseigant/details-enseigant.component';
import { ModifierEnseignantComponent } from './modifier-enseignant/modifier-enseignant.component';
import { ConfirmationSuppressionComponent } from './confirmation-suppression/confirmation-suppression.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-enseignants',
  templateUrl: './gestion-enseignants.component.html',
  styleUrls: ['./gestion-enseignants.component.scss']
})
export class GestionEnseignantsComponent implements OnInit{
  users: any[] = [];
  constructor(private dialog: MatDialog, private userService:UserService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user:any) => user.profil === 'enseignant');
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des enseignants:', err);
      }
    });
  }
  openAddEnseignant(){
    const dialogRef = this.dialog.open(AddEnseignantComponent, {
      width: '600px' 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Utilisateur ajouté!");
        window.location.reload();
      } else {
        console.log("Ajout annulée");
      }
    });
  }
  detailsEnseignant(){
    this.dialog.open(DetailsEnseigantComponent, {
      width: '600px' 
    });
  }

  modifierEnseignant(user:any) {
      const dialogRef= this.dialog.open(ModifierEnseignantComponent, {
        width: '600px' ,
        data: user
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Utilisateur modifé!");
          window.location.reload();
        } else {
          console.log("Modification annulée");
        }
      });
  }
  openConfirmationDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmationSuppressionComponent, {
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("enseignant supprimé!");
        window.location.reload();
      } else {
        console.log("Suppression annulée");
      }
    });
  }
}
