import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isScreenSupported = true;

  ngOnInit(): void {
    this.screenSupportedCheck();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenSupportedCheck(event.target as Window);
  }

  private screenSupportedCheck(currentWindow: Window = window): void {
    this.isScreenSupported = currentWindow.innerWidth < 250 ? false : true;
  }
}
