import { Component, OnInit, Input } from "@angular/core";
import { DetailTab } from "src/app/core/models/tabs";

@Component({
	selector: "app-detail-tabs",
	templateUrl: "./detail-tabs.component.html",
	styleUrls: ["./detail-tabs.component.scss"],
})
export class DetailTabsComponent implements OnInit {
	@Input()
	detailTabs: Array<DetailTab>;

	constructor() {}

	ngOnInit(): void {}
}
