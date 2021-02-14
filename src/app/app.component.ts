import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isScreenSupported = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenSupported = (event.target as Window).innerWidth < 250 ? false : true;
  }
}
