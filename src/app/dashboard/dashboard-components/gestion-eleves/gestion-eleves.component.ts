import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { DetailsEleveComponent } from './details-eleve/details-eleve.component';
import { ModifierEleveComponent } from './modifier-eleve/modifier-eleve.component';
import { ConfirmationDeleteEleveComponent } from './confirmation-delete-eleve/confirmation-delete-eleve.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-eleves',
  templateUrl: './gestion-eleves.component.html',
  styleUrls: ['./gestion-eleves.component.scss']
})
export class GestionElevesComponent implements OnInit{
  users: any[] = [];
  constructor(private dialog: MatDialog, private userService:UserService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user:any) => user.profil === 'eleve');
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des utilisateurs:', err);
      }
    });
  }

  openAddEleve(){
    const dialogRef = this.dialog.open(AddEleveComponent, {
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
  openConfirmationDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmationDeleteEleveComponent, {
      data: { id: id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Utilisateur supprimé!");
        // Dynamically update the list of users without reloading the page
        window.location.reload();
      } else {
        console.log("Suppression annulée");
      }
    });
  }
  

  detailsEleve(){
    this.dialog.open(DetailsEleveComponent, {
      width: '600px' 
    });
  }

  modifierEleve(user:any) {
    const dialogRef= this.dialog.open(ModifierEleveComponent, {
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
  
  redirectMoyenne(id:any){
    this.router.navigate(['/dashboard/moyennes-notes', id])
  }
}
