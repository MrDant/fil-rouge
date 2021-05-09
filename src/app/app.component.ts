import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavigationEnd, Router,} from "@angular/router";
import { filter } from "rxjs/operators";
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent
} from "ngx-cookieconsent";
import {Subscription} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "FilRouge";
  backgroundColor = "linear-gradient(#333333, #AFAFAF)";

  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(private router: Router, private ccService: NgcCookieConsentService) {}

  ngOnInit(): void {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.changeBackground();
  }


  changeBackground(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((nav: NavigationEnd) => {
        if (
          nav.url.includes("login") ||
          nav.url.includes("account") ||
          nav.url.includes("change-password") ||
          nav.url.includes("admin") ||
          nav.url.includes("cart") ||
          nav.url.includes("about") ||
          nav.url.includes("storage")
        ) {
          this.backgroundColor = "#FAFAFA";
        } else {
          this.backgroundColor = "linear-gradient(#333333, #AFAFAF)";
        }
      });
  }

  ngOnDestroy(): void {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
