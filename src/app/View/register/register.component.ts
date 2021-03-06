import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../Services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
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
      this.router.navigate(["/login"]);
    });
  }
}
