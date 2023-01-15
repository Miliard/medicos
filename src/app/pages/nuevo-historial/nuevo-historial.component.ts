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

  public bloque: any = 1;
  public multiBloque = new FormGroup({
    datosPaciente: new FormGroup({
      nombre: new FormControl(''),
      peso: new FormControl(''),
      talla: new FormControl(''),
      frC: new FormControl(''),
      temperatura: new FormControl(''),
    }),
    datosPaciente2: new FormGroup({
      ah: new FormControl(''),
      apnp: new FormControl(''),
      hemotipo: new FormControl(''),
      alergias: new FormControl(''),
      app: new FormControl(''),
    }),
    datosPaciente3: new FormGroup({
      cita: new FormControl(''),
      diagnóstico: new FormControl('')
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

  submit() {
      
  }

}
