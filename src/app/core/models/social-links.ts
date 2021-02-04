export class SocialLinks {
  public facebook?: SocialMedia;
  public twitter?: SocialMedia;
  public googlePlus?: SocialMedia;
  public linkedIn?: SocialMedia;
  public instagram?: SocialMedia;
  public pinterest?: SocialMedia;
}

export class SocialMedia {
  public link!: string;
  public description?: string;
}
