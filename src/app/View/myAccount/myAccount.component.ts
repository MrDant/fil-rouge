import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
    this.userService.update(this.form.value).subscribe(() => {
      alert("Les informations ont été mise à jour");
    });
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
      id: "",
    });
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.form.setValue(Object.assign(this.form.value, user));
      }
    });
  }
}
