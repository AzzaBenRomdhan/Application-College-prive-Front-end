import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { NoteEtMoyenneComponent } from './note-et-moyenne/note-et-moyenne.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'mescours', component: MesCoursComponent },
      { path: 'notes-moyenne', component: NoteEtMoyenneComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleveRoutingModule { }
