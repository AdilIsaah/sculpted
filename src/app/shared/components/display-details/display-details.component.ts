import { Component, OnInit, Input } from "@angular/core";
import { Record } from "src/app/core/models/record";

@Component({
	selector: "app-display-details",
	templateUrl: "./display-details.component.html",
	styleUrls: ["./display-details.component.scss"],
})
export class DisplayDetailsComponent implements OnInit {
	@Input() data: Array<Record>;
	@Input() loading: boolean;
	constructor() {}

	ngOnInit(): void {}
}
