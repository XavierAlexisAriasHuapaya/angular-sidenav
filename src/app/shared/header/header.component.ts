import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { Languages, Notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  imports: [CommonModule, OverlayModule, CdkMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = Languages;
  notifications = Notifications;
  useritems = userItems;

  @HostListener('window:resize', ['$event'])
  onReize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = Languages[0];
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

}
