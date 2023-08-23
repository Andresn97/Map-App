import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

import { MapsService } from '../../services/maps.service';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements OnInit{

  @ViewChild('map') googleMap!: GoogleMap ;
  public zoom: number = 8;
  public currentLngLat: google.maps.LatLngLiteral = {
    lat: 40,
    lng: -74.5
  };
  public mapDefaultOptions: google.maps.MapOptions = {};

  constructor( private _mapsService: MapsService ) {}

  ngOnInit(): void {
    this.mapDefaultOptions = this._mapsService.getDefaultMapConfiguration();
  }

  zoomIn(): void {
    if ( this.zoom === 18 ) return;

    this.zoom++;
  }

  zoomOut() {
    if ( this.zoom === 3 ) return;

    this.zoom--;
  }

  zoomInputChanged( value: string ): void {
    this.zoom = Number(value);
  }

  moveMap( event: google.maps.MapMouseEvent ) {
    if ( event.latLng !== null ) { 
      this.currentLngLat = event.latLng.toJSON();
    }
  }

  handleZoomChange(): void {
    this.zoom = this.googleMap.getZoom()!;
  }

  handleCenterChange(): void {
    this.currentLngLat = this.googleMap.getCenter()!.toJSON();
  }

}
