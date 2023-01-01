import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { DatosDoctorComponent } from './datos-doctor/datos-doctor.component';
import { DatosPacinteComponent } from './datos-pacinte/datos-pacinte.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';
import { NuevoHistorialComponent } from './nuevo-historial/nuevo-historial.component';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    PerfilComponent,
    CrearPacienteComponent,
    DatosDoctorComponent,
    DatosPacinteComponent,
    ExpedienteComponent,
    HistorialPacienteComponent,
    NuevoHistorialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
