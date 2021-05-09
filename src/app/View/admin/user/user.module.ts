import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { AdminModule } from "../admin.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [UsersComponent, AddComponent, EditComponent, FormComponent],
  imports: [CommonModule, AdminModule, ReactiveFormsModule, UserRoutingModule],
})
export class UserModule {}
