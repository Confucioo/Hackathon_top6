import { Component, OnInit } from '@angular/core';
import * as L from "leaflet"
import { RabbitmqService } from './rabbitmq.service';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map!: L.Map;
  markers!: L.LayerGroup;

  constructor (private rmq: RabbitmqService){

  }

  ngOnInit(): void {
    this.map = L.map("map", { center: [-23.989686, -46.290439], zoom: 11 })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.markers = L.layerGroup().addTo(this.map);
    // this.markers.addLayer(L.marker([-23.989686, -46.290439]))
    this.rmq.track.pipe(filter(val => val != null), tap(_=>this.markers.clearLayers()))
    .subscribe(track => track?.seascape.forEach(ship => this.markers.addLayer(L.marker([Number(ship.lat), Number(ship.lon)]))));

  }
  clearMarkers(): void {
    this.markers.clearLayers();
  }
}

