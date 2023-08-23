
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private _apiKeys = environment || {};;

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

}