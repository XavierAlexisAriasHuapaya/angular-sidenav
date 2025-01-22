import { Component, EventEmitter, HostListener, inject, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SublevelMenuComponent } from "./sublevel-menu.component";
import { fadeInOut, INavbarData } from './helper';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, RouterLink, RouterLinkActive, SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('500ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(1turn)', offset: '1' })
          ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  public router = inject(Router);

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onReize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

}
