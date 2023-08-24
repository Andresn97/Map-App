import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from 'src/app/maps/maps-routing.module';



interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [ CommonModule, MapsRoutingModule ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/zoom-range', name: 'ZoomRange' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
  ];

}
