import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { GestionEnseignantsComponent } from './dashboard/dashboard-components/gestion-enseignants/gestion-enseignants.component';
import { GestionElevesComponent } from './dashboard/dashboard-components/gestion-eleves/gestion-eleves.component';
import { GestionParentsComponent } from './dashboard/dashboard-components/gestion-parents/gestion-parents.component';
import { GestionActualitesComponent } from './dashboard/dashboard-components/gestion-actualites/gestion-actualites.component';
import { GestionClassComponent } from './dashboard/dashboard-components/gestion-class/gestion-class.component';
import { GestionReclamationComponent } from './dashboard/dashboard-components/gestion-reclamation/gestion-reclamation.component';
import { GestionDisciplineComponent } from './dashboard/dashboard-components/gestion-discipline/gestion-discipline.component';
import { HomeEnseignantComponent } from './enseignant/home-enseignant/home-enseignant.component';
import { GestionSallesComponent } from './dashboard/dashboard-components/gestion-salles/gestion-salles.component';
import { GestionMatiereComponent } from './dashboard/dashboard-components/gestion-matiere/gestion-matiere.component';
import { HomeMoyenneEtNoteComponent } from './dashboard/dashboard-components/GestionMoyenneEtNote/home-moyenne-et-note/home-moyenne-et-note.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CalendrierEmploiComponent } from './dashboard/dashboard-components/gestion-calendrier-emploi/calendrier-emploi/calendrier-emploi.component';
import { AcceuilComponent } from './dashboard/dashboard-components/gestion-Menu/acceuil/acceuil.component';
import { GestionPaiementComponent } from './dashboard/dashboard-components/gestion-paiement/gestion-paiement.component';
import { EleveGuard } from './guards/eleve.guard';
import { ParentGuard } from './guards/parent.guard';
import { EnseignantGuard } from './guards/enseignant.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path : 'auth', loadChildren:() => 
      import('./authentification/authentification.module').then(
        (m) => m.AuthentificationModule
      )
  },
  {
    path: '', redirectTo: 'auth', pathMatch:'full'
  },
  {
    path : 'eleve',
    component:NavbarComponent,loadChildren:() => 
      import('./eleve/eleve.module').then(
        (m) => m.EleveModule
      ),
      canActivate: [EleveGuard]
  },
  {
    path : 'parent',
    component:NavbarComponent,loadChildren:() => 
      import('./parent/parent.module').then(
        (m) => m.ParentModule
      ),
      canActivate: [authGuard, ParentGuard]
  },
  {
    path : 'enseignant',
    component:NavbarComponent,loadChildren:() => 
      import('./enseignant/enseignant.module').then(
        (m) => m.EnseignantModule
      ),
      canActivate: [authGuard, EnseignantGuard]
  },
  {
    path : 'shared',loadChildren:() => 
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
      //canActivate: [authGuard, AgentGuard]
  },
  {
    path:"dashboard",
    component:FullComponent,
    children: [
      {path:"auth", redirectTo:"/auth", pathMatch:"full"},
      {path:"gestion-paiement", component:GestionPaiementComponent},
      {path:"enseignants", component:GestionEnseignantsComponent},
      {path:"eleves", component:GestionElevesComponent},
      {path:"parents", component:GestionParentsComponent},
      {path:"actualites", component:GestionActualitesComponent},
      {path:"classes", component:GestionClassComponent},
      {path:"reclamations", component:GestionReclamationComponent},
      {path:"discipline", component:GestionDisciplineComponent},
      {path:"home-enseignant", component:HomeEnseignantComponent},
      {path:"home", component:DashboardComponent},
      {path:"salles-departements", component:GestionSallesComponent},
      {path:"moyennes-notes/:id", component:HomeMoyenneEtNoteComponent},
      {path:"gestion-menu", component:AcceuilComponent},
      {path:"matieres", component:GestionMatiereComponent},
      {path:"calendrier-emploi", component:CalendrierEmploiComponent},
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
