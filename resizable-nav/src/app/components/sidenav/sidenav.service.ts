import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  readonly sidenavMinWidth = 0;

  readonly sidenavMaxWidth = window.innerWidth - 20;
  isResizeLock: boolean = false;

  get sidenavWidth(): number {
    return parseInt(
      getComputedStyle(document.body).getPropertyValue('--sidenav-width'),
      10
    );
  }

  /**
   * Sets the width of the sidenav to given number (clamped between a min and a max) as pixels.
   */
  setSidenavWidth(width: number) {
    const clampedWidth = Math.min(
      Math.max(width, this.sidenavMinWidth),
      this.sidenavMaxWidth
    );
console.log(clampedWidth);
    document.body.style.setProperty('--sidenav-width', `${clampedWidth}px`);
  }
  close(){
    if(!this.isResizeLock){
    document.body.style.setProperty('--sidenav-width', `0px`);
    }
  }
  open(){
    if(!this.isResizeLock){
    document.body.style.setProperty('--sidenav-width', `200px`);
    }
  } setIsre(){
    this.isResizeLock=!this.isResizeLock;
  } 
  getIsRe(){
    return this.isResizeLock;
  }
}
