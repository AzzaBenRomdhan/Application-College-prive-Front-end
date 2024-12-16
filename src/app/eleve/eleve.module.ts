import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleveRoutingModule } from './eleve-routing.module';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TawasalnaModule } from '../tawasalna-module';


@NgModule({
  declarations: [
    MesCoursComponent
  ],
  imports: [
    CommonModule,
    EleveRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    TawasalnaModule,
    FormsModule,
  ]
})
export class EleveModule { }
