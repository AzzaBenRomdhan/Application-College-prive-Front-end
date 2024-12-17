import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TawasalnaModule } from '../tawasalna-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MesCoursComponent,
    AddCoursComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EnseignantRoutingModule,
    DashboardModule,
    TawasalnaModule,
    FormsModule,
    SharedModule
  ]
})
export class EnseignantModule { }
