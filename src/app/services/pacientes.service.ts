import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  public menu = [
    {
      titulo: 'Doctores',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Datos del doctor',
          url: '/dashboard/datos-doctor',
        },
      ],
    },

    {
      titulo: 'Pacientes',
      icono: 'mdi mdi-gauge',
      submenu: [
        
         {titulo: 'Registrar Paciente', url: '/dashboard/crear-paciente'},
         {titulo: 'Datos de paciente', url: '/dashboard/datos-paciente'}
        
      ],
    },
{
      titulo: 'Historial Clinico',
      icono: 'mdi mdi-bullseye',
      submenu: [
        {
          titulo: 'Nuevo Historial',
          url: '/dashboard/nuevo-historial',
        },
          {titulo:'Historial', url: '/dashboard/historial-pacientes'}

      ],
    },
  ];

  constructor() {}
}
