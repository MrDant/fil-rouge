import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ListComponent } from "./list/list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [ListComponent],
})
export class AdminModule {}
