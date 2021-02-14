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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const document = event.target as Document;
    if (document.body.classList.contains('on-scrollbar') === false) {
      document.body.classList.add('on-scrollbar');
      setTimeout(() => document.body.classList.remove('on-scrollbar'), 1000);
    }
  }

  private screenSupportedCheck(currentWindow: Window = window): void {
    this.isScreenSupported = currentWindow.innerWidth < 250 ? false : true;
  }
}
