import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "FilRouge";
  backgroundColor = "linear-gradient(#333333, #AFAFAF)";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((nav: NavigationEnd) => {
        if (
          nav.url.includes("login") ||
          nav.url.includes("account") ||
          nav.url.includes("change-password") ||
          nav.url.includes("admin") ||
          nav.url.includes("about")
        ) {
          this.backgroundColor = "#FAFAFA";
        } else {
          this.backgroundColor = "linear-gradient(#333333, #AFAFAF)";
        }
      });
  }
}
