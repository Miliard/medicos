import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes.interface';

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

// crear pacientes

  altaPaciente(pacientes: Pacientes) {
    return this.http.post(`${this.url}AltaPaciente.php`, JSON.stringify(pacientes));
  }

  // obtener pacientes
  getPaciente(){
    return this.http.get(`${this.url}ObtenerPacientes.php`);
  }


  //seleccionar al paciente por medio de un boton editar
  seleccionarPaciente(idpaciente: number){
    return this.http.get(`${this.url}SeleccionarPaciente.php?idpaciente=${idpaciente}`)

  }

  // editar paciente

  editarPaciente(pacientes: Pacientes) {
    return this.http.post(`${this.url}EditarPaciente.php`, JSON.stringify(pacientes));
  }
  
  //elimminar paciente 
  eliminarPaciente(idpaciente: any) {
    return this.http.get(`${this.url}EliminarPaciente.php?idpaciente=${idpaciente}`)
  }

}
