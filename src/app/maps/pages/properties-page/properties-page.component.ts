import { Component } from '@angular/core';
import { MapsService } from '../../services/maps.service';


interface House {
  title: string;
  description: string;
  latLng: google.maps.LatLngLiteral;
}


@Component({
  selector: 'maps-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public houses: House[] = [
    {
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      latLng: { lat: 45.280015511264466, lng: -75.92722289474008 }
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      latLng: { lat: 16.828940930185748, lng: -99.91287720907991 }
    },
    {
      title: 'Apartamento, Argentina',
      description: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      latLng: {  lat: -34.57150108832866, lng: -58.430166677283445 }
    },
    {
      title: 'Local comercial, España',
      description: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      latLng: { lat: 40.42567285425766, lng: -3.7112735618380177 }
    },
  ]

  constructor( private _mapsService: MapsService ) {}

  getMapPath( location: google.maps.LatLngLiteral, zoom: number ): string {
    return this._mapsService.getStaticImageMap( location, zoom );
  }

}
