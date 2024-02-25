import { Component } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private d: SidenavService){

  }
  close(){
    this.d.close();
  }
  open(){
    this.d.open();
  }
}
