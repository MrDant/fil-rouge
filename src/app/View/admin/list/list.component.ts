import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnChanges {
  @Input() title: string;
  @Input() properties = [];
  @Input() service: any;
  items = [];
  gridTemplate = {
    gridTemplateColumns:
      "repeat(" + (this.properties.length - 1) + ", auto) 2fr",
  };
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.service.list().subscribe((items) => {
      this.items = items;
      this.gridTemplate.gridTemplateColumns =
        "repeat(" + this.properties.length + ", auto) 150px";
    });
  }

  delete(id): void {
    if (confirm("Êtes-vous sur de vouloir le supprimer ?")) {
      this.service.delete(id).subscribe(() => {
        this.items = this.items.filter((e) => e.id !== id);
      });
    }
  }
}
