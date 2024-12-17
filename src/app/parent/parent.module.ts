import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { MoyenneEtNoteComponent } from './moyenne-et-note/moyenne-et-note.component';
import { TawasalnaModule } from '../tawasalna-module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FeatherModule } from 'angular-feather';
import { MesElevesComponent } from './mes-eleves/mes-eleves.component';
import { SharedModule } from '../shared/shared.module';
import { SelectionEleveComponent } from './selection-eleve/selection-eleve.component';


@NgModule({
  declarations: [
    HomeParentComponent,
    MoyenneEtNoteComponent,
    MesElevesComponent,
    SelectionEleveComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    TawasalnaModule,
    DashboardModule,
    FeatherModule,
    SharedModule  
  ]
})
export class ParentModule { }
