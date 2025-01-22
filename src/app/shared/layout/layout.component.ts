import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  imports: [SidenavComponent, BodyComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
