import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes.interface';
import { Historial } from '../interfaces/historial.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url: any = 'http://localhost/api/';

  public menu = [
    {
      titulo: 'Doctores',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Datos del Doctor', url: '/dashboard/datos-doctor' }
      ]
    },
    {
      titulo: 'Pacientes',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Registrar Paciente', url: '/dashboard/crear-paciente' },
        { titulo: 'Datos de Pacientes', url: '/dashboard/datos-paciente' }
      ]
    },
    {
      titulo: 'Historial Clínico',
      icono: 'mdi mdi-bullseye',
      submenu: [
        { titulo: 'Nuevo Historial', url: '/dashboard/nuevo-historial' },
        { titulo: 'Historial', url: '/dashboard/historial-paciente' }
      ]
    }
  ]

  constructor( public http: HttpClient) { }

  // Crear Paciente
  altaPaciente(pacientes: Pacientes) {
    return this.http.post(`${this.url}AltaPaciente.php`, JSON.stringify(pacientes));
  }

  // Obtener pacientes
  getPaciente() {
    return this.http.get(`${this.url}ObtenerPacientes.php`);
  }
  
  // Seleccionar al paciente por medio un boton Editar
  seleccionarPaciente(idpaciente: number ) {
    return this.http.get(`${this.url}SeleccionarPaciente.php?idpaciente=${idpaciente}`);
  }
  
  //Editar paciente
  editarPaciente(pacientes: Pacientes) {
    return this.http.post(`${this.url}EditarPaciente.php`, JSON.stringify(pacientes));
  }

  //Eliminar paciente
  eliminarPaciente(idpaciente: any) {
    return this.http.get(`${this.url}EliminarPaciente.php?idpaciente=${idpaciente}`);
  }

  //Nuevo Historial
  altaHistorial(newhistorial: Historial) {
    return this.http.post(`${this.url}NuevoHistorial.php`, JSON.stringify(newhistorial));
  }
  
}
