import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @Input() pageTitle!: string;
  @Input() imageUrl!: string;
  @Input() height = 850;

  constructor() { }

  ngOnInit(): void {
  }

}
