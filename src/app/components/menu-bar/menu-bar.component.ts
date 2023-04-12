import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.responsive.component.css']
})
export class MenuBarComponent {
  linkedin:string = "https://www.linkedin.com/in/igor-neuhauser/";
  github:string = "https://github.com/IPNeuhauser";
  instagram:string = "https://www.instagram.com/ipneuhauser/";
}
