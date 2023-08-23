
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { environment } from '../../../environments/environment';


enum MapTypes {
  ROADMAP = 'roadmap',
  SATELLITE = 'satellite',
  HYBRID = 'hybrid',
  TERRAIN = 'terrain'
}


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private _apiKeys = environment || {};
  private _defaultMapConfiguration: google.maps.MapOptions = {
    center: {
      lat: -1.367988812997701, 
      lng: -798.0917434925067
    },
    minZoom: 3,
    maxZoom: 18,
    disableDefaultUI: true,
    mapTypeId: MapTypes.ROADMAP
  }

  constructor( private _httpClient: HttpClient ) {}
  
  getIsApiLoaded(): Observable<boolean> {
    const { maps_key } = this._apiKeys;

    if ( maps_key ) {
      return this._httpClient.jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${ maps_key }`, 
        'callback'
      ).pipe(
        map(() => true),
        catchError(() => of(false)),
      );
    }

    return of( false );
    
  }

  getDefaultMapConfiguration(): google.maps.MapOptions {
    return { ...this._defaultMapConfiguration };
  }

  getStaticImageMap( location: google.maps.LatLngLiteral, zoom: number ): string {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${ location.lat },${ location.lng }&zoom=${ zoom }&size=400x200&key=${ this._apiKeys.maps_key }`;
  }

}