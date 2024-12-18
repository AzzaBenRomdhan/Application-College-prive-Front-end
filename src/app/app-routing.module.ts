import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
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
      //canActivate: [authGuard, AgentGuard]
  },
  {
    path : 'parent',
    component:NavbarComponent,loadChildren:() => 
      import('./parent/parent.module').then(
        (m) => m.ParentModule
      ),
      //canActivate: [authGuard, AgentGuard]
  },
  {
    path : 'enseignant',
    component:FullComponent,loadChildren:() => 
      import('./enseignant/enseignant.module').then(
        (m) => m.EnseignantModule
      ),
      //canActivate: [authGuard, AgentGuard]
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
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"enseignants", component:FormsComponent},
      {path:"matieres", component:GestionMatiereComponent},
      {path:"calendrier-emploi", component:CalendrierEmploiComponent},
      {path:"prospects", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},
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
