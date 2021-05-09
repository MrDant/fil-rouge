import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../../Services/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      phone: [""],
      email: ["", Validators.email],
      postalcode: [""],
      address: "",
      city: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    });
  }

  onSubmit(): void {
    this.userService.register(this.form.value).subscribe(() => {
      this.router.navigate(["/admin/users"]);
    });
  }
}
