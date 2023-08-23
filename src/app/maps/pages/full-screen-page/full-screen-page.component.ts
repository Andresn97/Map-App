import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'maps-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent {

  public mapOptions: google.maps.MapOptions = {
    center: {
      lat: 40,
      lng: -77.5
    },
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    tilt: 45,
    disableDefaultUI: true,
  }

}
