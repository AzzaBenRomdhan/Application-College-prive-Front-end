import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { HomeEnseignantComponent } from './home-enseignant/home-enseignant.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'mescours', component: MesCoursComponent },
      { path: 'disicplines', component:DisciplineComponent},
      { path: 'actualites', component:ActualitesComponent},
      { path: 'reclamations', component:ReclamationsComponent},
      { path: 'home-enseignant', component:HomeEnseignantComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
