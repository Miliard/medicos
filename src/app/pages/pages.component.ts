import { Component,OnInit } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public pacientesService: PacientesService) {}

  ngOnInit(): void {
    
  }

}
