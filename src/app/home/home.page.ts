import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cl1: string = "Luz";
  cl2: string = "Luz";
  cl3: string = "Luz";
  cl4: string = "Luz";
  cl5: string = "Luz";
  cl6: string = "Luz";

  constructor(private database: Database) {}

  ngOnInit() {
    this.actualizarEstado("/Casa/Baño", (valor) => this.cl1 = valor);
    this.actualizarEstado("/Casa/Cocina", (valor) => this.cl2 = valor);
    this.actualizarEstado("/Casa/Cuarto", (valor) => this.cl3 = valor);
    this.actualizarEstado("/Casa/Garaje", (valor) => this.cl4 = valor);
    this.actualizarEstado("/Casa/Lavandería", (valor) => this.cl5 = valor);
    this.actualizarEstado("/Casa/Sala", (valor) => this.cl6 = valor);
  }

  actualizarEstado(ruta: string, actualizar: (valor: string) => void) {
    const rutaRef = ref(this.database, ruta);
    object(rutaRef).subscribe(atributos => {
      const valores_db = atributos.snapshot.val();
      console.log(valores_db);
      if (valores_db) {
        actualizar("warning");
      } else {
        actualizar("Luz");
      }
    });
  }
}
