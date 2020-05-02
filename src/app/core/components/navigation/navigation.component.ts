import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
	searchText: string;
	navigations = [
		{ icon: "home", name: "Home", link: "/" },
		{ icon: "bug_report", name: "Corona Virus", link: "corona-virus" },
		{ icon: "cloud", name: "World Weather", link: "world-weather" },
	];
	constructor() {}

	ngOnInit(): void {}
}
