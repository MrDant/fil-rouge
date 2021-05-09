import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../../Services/user.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      phone: [""],
      email: ["", Validators.email],
      postalcode: [""],
      address: "",
      city: "",
      password: "",
      roles: false,
    });
  }

  onSubmit(): void {
    const user = this.form.value;
    user.roles = user.roles ? ["ROLE_ADMIN"] : ["ROLE_CLIENT"];
    console.log(user);
    this.userService.update(user).subscribe(() => {
      this.router.navigate(["/admin/users"]);
    });
  }

  ngOnInit(): void {
    this.userService.get(this.route.snapshot.params.id).subscribe((user) => {
      // @ts-ignore
      user.roles = !!user.roles.includes("ROLE_ADMIN");
      delete user.id;
      this.form.setValue(Object.assign(this.form.value, user));
    });
  }
}
