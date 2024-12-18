import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TawasalnaModule } from '../tawasalna-module'
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './dashboard-components/sales/sales.component';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { ProductComponent } from './dashboard-components/product/product.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatisticsComponent } from './statistics/statistics.component';
import { GestionEnseignantsComponent } from './dashboard-components/gestion-enseignants/gestion-enseignants.component';
import { GestionElevesComponent } from './dashboard-components/gestion-eleves/gestion-eleves.component';
import { AddEnseignantComponent } from './dashboard-components/gestion-enseignants/add-enseignant/add-enseignant.component';
import { AddEleveComponent } from './dashboard-components/gestion-eleves/add-eleve/add-eleve.component';
import { GestionParentsComponent } from './dashboard-components/gestion-parents/gestion-parents.component';
import { AddParentComponent } from './dashboard-components/gestion-parents/add-parent/add-parent.component';
import { DetailsEnseigantComponent } from './dashboard-components/gestion-enseignants/details-enseigant/details-enseigant.component';
import { ModifierEnseignantComponent } from './dashboard-components/gestion-enseignants/modifier-enseignant/modifier-enseignant.component';
import { ConfirmationSuppressionComponent } from './dashboard-components/gestion-enseignants/confirmation-suppression/confirmation-suppression.component';
import { ModifierEleveComponent } from './dashboard-components/gestion-eleves/modifier-eleve/modifier-eleve.component';
import { DetailsEleveComponent } from './dashboard-components/gestion-eleves/details-eleve/details-eleve.component';
import { ConfirmationDeleteEleveComponent } from './dashboard-components/gestion-eleves/confirmation-delete-eleve/confirmation-delete-eleve.component';
import { ConfirmationDeleteParentComponent } from './dashboard-components/gestion-parents/confirmation-delete-parent/confirmation-delete-parent.component';
import { DetailsParentComponent } from './dashboard-components/gestion-parents/details-parent/details-parent.component';
import { ModifierParentComponent } from './dashboard-components/gestion-parents/modifier-parent/modifier-parent.component';
import { GestionActualitesComponent } from './dashboard-components/gestion-actualites/gestion-actualites.component';
import { GestionClassComponent } from './dashboard-components/gestion-class/gestion-class.component';
import { AddClassComponent } from './dashboard-components/gestion-class/add-class/add-class.component';
import { DetailsClassComponent } from './dashboard-components/gestion-class/details-class/details-class.component';
import { GestionReclamationComponent } from './dashboard-components/gestion-reclamation/gestion-reclamation.component';
import { GestionDisciplineComponent } from './dashboard-components/gestion-discipline/gestion-discipline.component';
import { AssignerElevesComponent } from './dashboard-components/gestion-parents/assigner-eleves/assigner-eleves.component';
import { HomeParentComponent } from './dashboard-components/home-parent/home-parent.component';
import { HomeEnseignantComponent } from '../enseignant/home-enseignant/home-enseignant.component';
import { HomeEleveComponent } from '../eleve/home-eleve/home-eleve.component';
import { GestionSallesComponent } from './dashboard-components/gestion-salles/gestion-salles.component';
import { ModiferSalleComponent } from './dashboard-components/gestion-salles/modifer-salle/modifer-salle.component';
import { GestionMatiereComponent } from './dashboard-components/gestion-matiere/gestion-matiere.component';
import { GestionClendrierComponent } from './dashboard-components/gestion-calendrier-emploi/gestion-clendrier/gestion-clendrier.component';
import { HomeMoyenneEtNoteComponent } from './dashboard-components/GestionMoyenneEtNote/home-moyenne-et-note/home-moyenne-et-note.component';
import { NotesDetailsComponent } from './dashboard-components/GestionMoyenneEtNote/notes-details/notes-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from '../parent/profile/profile.component';
import { CalendrierEmploiComponent } from './dashboard-components/gestion-calendrier-emploi/calendrier-emploi/calendrier-emploi.component';
import { GestionEmploiComponent } from './dashboard-components/gestion-calendrier-emploi/gestion-emploi/gestion-emploi.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
    CardsComponent,
    StatisticsComponent,
    GestionEnseignantsComponent,
    GestionElevesComponent,
    AddEnseignantComponent,
    AddEleveComponent,
    GestionParentsComponent,
    AddParentComponent,
    DetailsEnseigantComponent,
    ModifierEnseignantComponent,
    ConfirmationSuppressionComponent,
    ModifierEleveComponent,
    DetailsEleveComponent,
    ConfirmationDeleteEleveComponent,
    ConfirmationDeleteParentComponent,
    DetailsParentComponent,
    ModifierParentComponent,
    GestionActualitesComponent,
    GestionClassComponent,
    AddClassComponent,
    DetailsClassComponent,
    GestionReclamationComponent,
    GestionDisciplineComponent,
    AssignerElevesComponent,
    HomeParentComponent,
    HomeEnseignantComponent,
    HomeEleveComponent,
    GestionSallesComponent,
    ModiferSalleComponent,
    GestionMatiereComponent,
    GestionClendrierComponent,
    HomeMoyenneEtNoteComponent,
    NotesDetailsComponent,
    ProfileComponent,
    CalendrierEmploiComponent,
    GestionEmploiComponent,
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
    HomeEnseignantComponent,
    HomeEleveComponent
  ]
})
export class DashboardModule { }
