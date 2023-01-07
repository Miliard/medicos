import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  pacientes: any = {};

  constructor(public pacientesService: PacientesService) { }

  ngOnInit(): void {
  }

  altaPaciente() {
    this.pacientesService.altaPaciente(this.pacientes).subscribe( 
      {
        next: result => {
          console.log(result);
        },
        error: err => {
          console.log(err.error);
        }
      }
    );

  }
 
}
