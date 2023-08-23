import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements OnInit {

  // public mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.ROADMAP ;
  public zoom: number = 10;
  public currentLngLat: google.maps.LatLngLiteral = {
    lat: 40,
    lng: -74.5
  };
  public mapOptions: google.maps.MapOptions = {
    center: {
      lat: 40,
      lng: -74.5
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    tilt: 45,
    disableDefaultUI: true,
  }

  ngOnInit(): void {
    this.mapListeners();
    
  }

  mapListeners() {
    // if ( !this.map ) throw 'Mapa no inicializado';
    // this.zoomChanged().subscribe()

    // this.map.on('zoom', (ev) => {
    //   this.zoom = this.map!.getZoom();
    // });

  }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }

  zoomChanged( value: string ): void {
    this.zoom = Number(value);
  }

  moveMap( event: google.maps.MapMouseEvent ) {
    if ( event.latLng !== null ) { 
      this.currentLngLat = event.latLng.toJSON();
    }
  }

}
