import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import 'jarallax';

declare var jarallax: any;

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit, AfterViewInit {
  @Input() pageTitle?: string;
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

}
