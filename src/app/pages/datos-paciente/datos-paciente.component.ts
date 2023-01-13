import { Component, OnInit } from '@angular/core';
import { Pacientes } from 'src/app/interfaces/pacientes.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit {

  public pacientes: Pacientes[] = [];
  public paciente: any = {};


  constructor(public pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacienteService.getPaciente().subscribe((resp: any) => {
    this.pacientes = resp;
    console.log(this.pacientes);

    })
  }

  seleccionarPaciente(idpaciente: any ){
    this.pacienteService.seleccionarPaciente(idpaciente)
    .subscribe((resp: any) => {
      this.paciente = resp[0];  
      console.log(this.paciente);

    })
  }

  editarPaciente() {
    this.pacienteService.editarPaciente(this.paciente).subscribe((resp: any) => {
      if(resp['resultado'] == 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Paciente editado correctamente',
          showConfirmButton: false,
          timer: 2000
        })

      }
    })
  }

}
