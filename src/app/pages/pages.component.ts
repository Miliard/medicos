import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public pacientesService: PacientesService, public router:Router) {

  }

  ngOnInit(): void {
    
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
