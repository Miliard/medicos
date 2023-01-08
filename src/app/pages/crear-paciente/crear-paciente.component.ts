import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  pacientes: any = {};

  constructor(public pacientesService: PacientesService, public router: Router ) { }

  ngOnInit(): void {
  }

  altaPaciente() {
    this.pacientesService.altaPaciente(this.pacientes).subscribe( 
      {
        next: result => {
          this.router.navigate(['/dashboard/nuevo-historial']);
        },
        error: err => {
          console.log(err.error);
        }
      }
    );

  }
 
}
