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
        {
          titulo: 'Datos del doctor',
          url: '/dashboard/datos-doctor',
        },
      ],
    },
{
      titulo: 'Historial Clinico',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Datos del doctor',
          url: '/dashboard/datos-doctor',
        },
      ],
    },
  ];

  constructor() {}
}
