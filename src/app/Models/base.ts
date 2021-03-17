import { environment } from "../../environments/environment";

export class VisualObject {
  image: string;
  constructor(raw) {
    Object.assign(this, raw);
    this.image = this.image
      ? environment.apiUrl + this.image
      : "/assets/img/not-found.jpeg";
  }
}
