import { Component, Input } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
	selector: "app-virtual-scroll",
	templateUrl: "./virtual-scroll.component.html",
	styleUrls: ["./virtual-scroll.component.scss"],
})
export class VirtualScrollComponent {
	@Input() itemSize: number;

	constructor() {}
}
