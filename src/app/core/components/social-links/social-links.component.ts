import { Component, Input, OnInit } from '@angular/core';

import { DefaultSocialLinks, SocialLinks } from '../../models/social-links';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  @Input() socialLinks?: SocialLinks = DefaultSocialLinks;
  @Input() hasContainer = false;

  constructor() { }

  ngOnInit(): void {
  }

}
