import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../Services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  adminArea: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      this.adminArea = user && user.roles.includes("ROLE_ADMIN");
    });
  }

  get isConnected(): boolean {
    return this.userService.isConnected();
  }

  logout(): void {
    this.userService.logout();
  }
}
