import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BuscadorSrvService } from '../../services/buscador-srv.service';
import { Reciper } from '../../models/reciper.model';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styleUrls: ['./dashboard-principal.component.css']
})

export class DashboardPrincipalComponent implements OnInit {

  textReciper: any;
  error: boolean  = false;
  errorDesc: any;
  recipers: Array<Reciper> = [];
  titleReciper : string = "My recipe E-book";
  developerBy : string = "Developed by Javier García Alonso";
  copy: string = "Copyright©";

  constructor(private buscadorSrv: BuscadorSrvService) { }

  ngOnInit() {
  }

  /**
   * Method that calls the service based on the response shows an error or possible recipes
   * @param reciper Object contains reciper
   */
  onKey(event: any) {
    this.textReciper = event.target.value
    console.log(this.textReciper);
    if (this.textReciper) {
      //Search in api Service
      this.buscadorSrv.findReciper(this.textReciper).subscribe(
        res => {
          if (res && res.results.length > 0) {
            console.log("Se han encontrado " + res.results.length + " resultados");
            this.recipers = res.results;
            this.error = false;
          } else {
            this.recipers = [];
            this.error = true;
            this.errorDesc = "Sorry.... We didn't find any recipe with those ingredients."
          }
        },
        error => {
          console.error(error);
          this.recipers = [];
          this.error = true;
          this.errorDesc = "Sorry.... We didn't find any recipe with those ingredients."
        }
      );
    } else {
      this.recipers = [];
      this.error = false;
    }

  }

}
