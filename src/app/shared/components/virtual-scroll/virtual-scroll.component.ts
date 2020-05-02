import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-virtual-scroll",
	templateUrl: "./virtual-scroll.component.html",
	styleUrls: ["./virtual-scroll.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class VirtualScrollComponent {
	@Input() itemSize: number;

	constructor() {}
}
