import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Product } from "../../../../Models/product";

@Component({
  selector: "app-product-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnChanges {
  @Output() onSend: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() product: Product;
  form: FormGroup = this.formBuilder.group({
    name: "",
    price: "",
    stock: "",
    description: "",
  });
  constructor(private formBuilder: FormBuilder) {}

  formSubmit(): void {
    this.onSend.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.setValue(
      Object.assign(this.form.value, changes.product.currentValue)
    );
  }
}
