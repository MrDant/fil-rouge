import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
