import { environment } from "../../environments/environment";

export class Category {
  id: number;
  name: string;
  image: string;

  constructor(raw: Category) {
    Object.assign(this, raw);
    this.image = this.image
      ? environment.apiUrl + this.image
      : "/assets/img/not-found.jpeg";
  }
}
