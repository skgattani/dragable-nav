import { Component, HostBinding, HostListener } from '@angular/core';

import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  isResizeLock: boolean=false;
  resizingEvent = {
    // whether the user is currently resizing the sidenav
    isResizing: false,

    // the x coordinate of the mouse when the user started resizing
    startingCursorX: 0,

    // the width of the sidenav when the user started resizing
    startingWidth: 0,
  };

  constructor(public sidenavService: SidenavService) {
    this.isResizeLock = this.sidenavService.getIsRe();
  }

  @HostBinding('class.resizing')
  get isResizing(): boolean {
    return this.resizingEvent.isResizing;
  }

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.sidenavService.sidenavWidth,
    };
    console.log(this.resizingEvent);
  }

  @HostListener('window:mousemove', ['$event'])
  updateSidenavWidth(event: MouseEvent) {
    if (!this.resizingEvent.isResizing) {
      return;
    }
    if (this.isResizeLock) {
      return;
    }

    const cursorDeltaX = this.resizingEvent.startingCursorX-event.clientX - 0;

    const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;

    this.sidenavService.setSidenavWidth(newWidth);
    console.log(event.clientX , this.resizingEvent.startingCursorX)
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizingEvent.isResizing = false;
  }
  close(){
    this.sidenavService.close();
  }
  lock(){
    
    this.sidenavService.setIsre();
    this.isResizeLock = this.sidenavService.getIsRe();
  }
}
