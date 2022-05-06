export interface IDetails {}

export interface IDetail {
  id?: number | string;
  avatar_url?: string;
  bio?: string;
  name?: string;
  company?: string;
  location?: string;
  login?: string;
  followers?: number | string;
  following?: number | string;
  public_repos?: number;
  created_at?: Date | string;
  twitter_username?: string;
  blog?: string;
}
