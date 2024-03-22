// Importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  room_state:any
  constructor(private database: Database) {}

  ngOnInit() {
      const route = ref(this.database, "/Casa");
      object(route).subscribe(attributes => {
         this.room_state = (attributes.snapshot.val());
         console.log(this.room_state['Cocina'])
      });
    };
  }

