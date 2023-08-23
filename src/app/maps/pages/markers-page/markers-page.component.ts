import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

import { MapsService } from '../../services/maps.service';


interface Mark {
  center: google.maps.LatLngLiteral;
  color: string;
}


@Component({
  selector: 'maps-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements OnInit{

  @ViewChild('map') googleMap!: GoogleMap ;
  public mapDefaultOptions: google.maps.MapOptions = {};
  public center: google.maps.LatLngLiteral = {
    lat: -2.9003130147561715, 
    lng: -78.99968737138448
  }
  public marks: Mark[] = [];
  public markerOptions: google.maps.MarkerOptions = { draggable: true };

  constructor( private _mapsService: MapsService ) {}

  ngOnInit(): void {
    this.mapDefaultOptions = {
      ...this._mapsService.getDefaultMapConfiguration(),
      zoom: 16,
    };

    this.readFromLocalStorage();
  }

  createMarker() {
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const newMark: Mark = {
      center: this.googleMap.getCenter()!.toJSON(),
      color
    }    
    
    this.addMark( newMark );
  }
  
  addMark( mark: Mark ): void {
    this.marks.push(mark);
    this.saveToLocalStorage( this.marks );
  }
  
  getMarkItemIcon( color: string ): google.maps.Symbol {
    const svgMarker: google.maps.Symbol = {
      path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: color,
      fillOpacity: 1,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(0, 20),
    };

    return svgMarker;

  }

  deleteMark( index: number ): void {
    this.marks.splice( index, 1 );
    this.saveToLocalStorage( this.marks );
  }

  onClickMark( location: google.maps.LatLngLiteral ): void {
    this.center = location;
  }

  onDraggable( event: google.maps.MapMouseEvent, index: number ) {
    this.marks[index].center = event.latLng!.toJSON();
    this.saveToLocalStorage( this.marks );
  }

  saveToLocalStorage( marks: Mark[] ): void {
    localStorage.setItem('plainMarks', JSON.stringify( marks ));
  }

  readFromLocalStorage() {
    const plainMarksString = localStorage.getItem('plainMarks') ?? '[]';
    const plainMarks: Mark[] = JSON.parse( plainMarksString );
    
    plainMarks.forEach( mark => this.addMark( mark ) );    
  }

}
