import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pacientes } from 'src/app/interfaces/pacientes.interface';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit {

  pacientes: Pacientes[] = [];

  public multiBloque = new FormGroup({
    datosPaciente: new FormGroup({
      nombre: new FormControl('')
    })
  })

  constructor(public pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacienteService.getPaciente().subscribe(( resp: any) => {
      this.pacientes = resp;
    })
  }

}
