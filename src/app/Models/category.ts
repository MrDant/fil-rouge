import { environment } from "../../environments/environment";

export class Category {
  name: string;
  image: string;
  details: string;

  constructor(raw: Category) {
    Object.assign(this, raw);
    this.image = this.image
      ? environment.apiUrl + this.image
      : "/assets/img/not-found.jpeg";
  }
}
