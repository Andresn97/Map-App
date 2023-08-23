import { Component, OnInit } from '@angular/core';

import { MapsService } from '../../services/maps.service';


@Component({
  selector: 'maps-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements OnInit {

  public mapDefaultOptions: google.maps.MapOptions = {};

  constructor( private _mapsService: MapsService ) { }
  
  ngOnInit(): void {
    this.mapDefaultOptions = {
      ...this._mapsService.getDefaultMapConfiguration(),
      zoom: 8,
    };
  }

}
