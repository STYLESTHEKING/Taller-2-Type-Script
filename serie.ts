
export class serie {
    id: number;
    name: string;
    channel: string;
    season: number;
    description: string;
    review: string;
    picture: string;
  
    constructor(id: number, name: string, channel: string, season: number, description: string, review: string, picture: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.season = season;
      this.description = description;
      this.review = review;
      this.picture = picture;

    }
}
  