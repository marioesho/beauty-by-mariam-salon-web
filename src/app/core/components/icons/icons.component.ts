import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  template: `<div></div>`
})
export class IconsComponent implements OnInit {
  constructor(public ref: ElementRef) {}

  ngOnInit(): void {
    window
      .fetch('https://spark-assets.netlify.app/spark-icons-v14.svg', {})
      .then(response => response.text())
      .then(svg => {
        this.ref.nativeElement.innerHTML += svg;
      });
  }
}
