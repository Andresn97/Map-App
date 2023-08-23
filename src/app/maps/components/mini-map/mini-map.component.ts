import { Component, Input, OnInit } from '@angular/core';

import { MapsService } from '../../services/maps.service';


@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements OnInit{

  @Input() latLng?: google.maps.LatLngLiteral;
  public mapDefaultOptions: google.maps.MapOptions = {};

  // constructor( private _mapsService: MapsService ) { }
  
  ngOnInit(): void {
    this.mapDefaultOptions = {
      disableDefaultUI: true,
      zoom: 13,
      keyboardShortcuts: false,
      panControl: false,
    };
    if ( !this.latLng ) this.latLng = {
      lat: -1.367988812997701, 
      lng: -798.0917434925067
    }
  }

}
