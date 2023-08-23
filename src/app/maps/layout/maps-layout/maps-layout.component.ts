import { Component, OnInit } from '@angular/core';

import { MapsService } from '../../services/maps.service';


@Component({
  selector: 'maps-layout-page',
  templateUrl: './maps-layout.component.html',
  styleUrls: ['./maps-layout.component.css']
})
export class MapsLayoutComponent implements OnInit{

  public apiLoaded: boolean = false;

  constructor( private _mapsService: MapsService ) {}

  ngOnInit(): void {
    this._mapsService.getIsApiLoaded().subscribe(
      isLoaded => this.apiLoaded = isLoaded
    );
  }

}

