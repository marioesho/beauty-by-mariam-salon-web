import { SocialMedia } from '../core/models/social-media';

export class Artist {
  public imageUrl!: string;
  public routeParam!: string;
  public name!: string;
  public skills!: string;
  public socialMedia?: SocialMedia;
  public quote?: string;
}
