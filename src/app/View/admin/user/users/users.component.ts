import { Component } from "@angular/core";
import { User } from "../../../../Models/user";
import { UserService } from "../../../../Services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  users: User[];
  properties = [
    {
      label: "Nom",
      key: "lastname",
    },
    {
      label: "Prénom",
      key: "firstname",
    },
    {
      label: "Email",
      key: "email",
    },
  ];
  constructor(public userService: UserService) {}
}
