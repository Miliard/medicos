export class Pacientes {
  public idpacientes: string;
  public nompaciente: string;
  public edadpaciente: string;
  public telpaciente: string;
  public dirpaciente: string;


  constructor(

   idpacientes: string,
   nompaciente: string,
   edadpaciente: string,
   telpaciente: string,
   dirpaciente: string,

  ){

   this.idpacientes = idpacientes
   this.nompaciente = nompaciente
   this.edadpaciente =edadpaciente 
   this.telpaciente = telpaciente
   this.dirpaciente = dirpaciente

  }


}