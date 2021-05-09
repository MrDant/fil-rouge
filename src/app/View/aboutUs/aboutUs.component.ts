import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-about-us",
  templateUrl: "./aboutUs.component.html",
  styleUrls: ["./aboutUs.component.scss"],
})
export class AboutUsComponent implements OnInit {
  form: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
  }

  onSubmit(): void {
    confirm("Mail envoyé");
  }
}
