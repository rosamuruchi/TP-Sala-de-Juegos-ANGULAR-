import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { AuthFirebaseService } from '../../servicios/auth-firebase.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  terminoJuego:boolean;
  gano:boolean;
  resultado:string;
  opciones:string[] = ['piedra', 'papel', 'tijera']
  opcionUsuario:string;
  opcionMaquina:string;
  claseBtnUsuario:string;
  claseBtnMaquina:string;

  constructor() {
    this.opcionMaquina = "";
    this.opcionUsuario = "";
    this.terminoJuego = false;
   }

  ngOnInit(): void {
  }

  //Asigna la opción que eligió el usuario
  ElegirOpcion(opcion:string) {

    this.opcionUsuario = opcion;
    this.claseBtnUsuario = 'btn-' + opcion;

  }

  //Elige un resultado para la maquina
  GenerarOpcionRandom() {
    let indiceRandom  = Math.floor( Math.random() * (this.opciones.length - 0) + 0);

    this.opcionMaquina = this.opciones[indiceRandom];
    this.claseBtnMaquina = 'btn-' + this.opcionMaquina;
  }

  //Compara las opciones y muestra el resultado
  CompararResultado() {

    //Generar una opción para la máquina:
    this.GenerarOpcionRandom();

    if(this.opcionUsuario == this.opcionMaquina) {
      this.gano = false;
      this.resultado = 'EMPATE';
    }
    else
    {
      switch(this.opcionUsuario) {
        case 'piedra':
          if(this.opcionMaquina == 'tijera') {
            this.gano = true;
            this.resultado = 'GANASTE'
          } else {
            this.gano = false;
            this.resultado = 'PERDISTE'
          }
          break;

        case 'papel':
          if(this.opcionMaquina == 'piedra') {
            this.gano = true;
            this.resultado = 'GANASTE'
          } else {
            this.gano = false;
            this.resultado = 'PERDISTE'
          }
          break;

        case 'tijera':
          if(this.opcionMaquina == 'papel') {
            this.gano = true;
            this.resultado = 'GANASTE'
          } else {
            this.gano = false;
            this.resultado = 'PERDISTE'
          }
          break;
      }
    }
    this.terminoJuego = true;
  }

}
