import { Component, OnInit, Output, Input } from "@angular/core";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
	@Output() search: string;

	constructor() {}

	ngOnInit(): void {}
}
