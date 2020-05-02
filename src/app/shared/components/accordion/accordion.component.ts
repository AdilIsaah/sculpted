import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-accordion",
	templateUrl: "./accordion.component.html",
	styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
	@Input() isExpanded: boolean;
	@Input() index: number;
	@Input() icon: string;
	@Input() title: string;
	@Input() description: string;

	@Output() accordionOpened = new EventEmitter();
	@Output() accordionClosed = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	opened(): void {
		this.accordionOpened.emit();
	}

	closed(): void {
		this.accordionClosed.emit();
	}
}
