import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCoursComponent } from './mes-cours/mes-cours.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'mescours', component: MesCoursComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleveRoutingModule { }
