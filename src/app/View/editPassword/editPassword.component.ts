import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../Services/user.service";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-edit-password",
  templateUrl: "./editPassword.component.html",
  styleUrls: ["./editPassword.component.scss"],
})
export class EditPasswordComponent {
  form = this.formBuilder.group({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  onSubmit(): void {
    if (this.form.value.newPassword !== this.form.value.confirmNewPassword) {
      alert("La confirmation du mot de passe est invalide");
      return;
    }
    this.userService.changePassword(this.form.value).subscribe(
      () => {
        confirm("Votre mot de passe a été changé");
      },
      (error) => {
        alert(error.error.detail);
      }
    );
    this.form.reset();
  }
}
