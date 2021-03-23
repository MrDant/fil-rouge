import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "../../Models/user";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./myAccount.component.html",
  styleUrls: ["./myAccount.component.scss"],
})
export class MyAccountComponent implements OnInit {
  title = "Mon compte";
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  onSubmit(): void {
    this.userService.update(this.form.value).subscribe();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      postalcode: "",
      city: "",
      email: "",
    });
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.form.setValue(Object.assign(this.form.value, user));
      }
    });
  }
}
