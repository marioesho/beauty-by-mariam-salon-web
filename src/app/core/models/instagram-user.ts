export class InstagramUser {
  public accessToken!: string;
  public userId!: number;

  constructor(user: any) {
    if (!user) { return; }

    this.accessToken = user.access_token;
    this.userId = user.user_id;
  }
}
