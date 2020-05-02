import { Directive, ElementRef, OnInit, Input } from "@angular/core";
import { Render } from "../../models/render";
import { Record } from "src/app/core/models/record";
import { select, pie, arc as ARC, scaleOrdinal } from "d3";

@Directive({
	selector: "[appPieChart]",
})
export class PieChartDirective implements OnInit, Render {
	@Input() data: Array<Record>;
	@Input() colors: Array<string>;
	private width: number;
	private height: number;
	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		const element = this.el.nativeElement;
		this.width = element.offsetWidth;
		this.height = 350;
		const innerElement = this.draw(element);
		this.el.nativeElement.innerHtml = innerElement;
	}

	draw(nativeElement: any): any {
		const radius = Math.min(this.width, this.height) / 2;
		const svg = select(nativeElement)
			.append("svg")
			.attr("viewBox", `0 0 ${this.width} ${this.height}`)
			.data([this.data])
			.append("g")
			.attr(
				"transform",
				`translate(${this.width / 2},${this.height / 2})`
			);

		const pieChart = pie().value(function (d: any) {
			return d;
		});
		const path: any = ARC()
			.outerRadius(radius - 10)
			.innerRadius(0);
		const label = ARC()
			.outerRadius(radius - 40)
			.innerRadius(radius - 40);
		const values = this.data.map((data) => data.value);
		const arc = svg
			.selectAll(".arc")
			.data(pieChart(values))
			.enter()
			.append("g")
			.attr("class", "arc");

		const pieColor = scaleOrdinal(this.colors);

		arc.append("path")
			.attr("d", path)
			.attr("fill", function (d, i: any) {
				return pieColor(i);
			});

		arc.append("text")
			.attr("transform", (datum: any) => {
				datum.innerRadius = 0;
				datum.outerRadius = radius;
				return `translate(${label.centroid(datum)})`;
			})
			.text((d, index) => this.data[index].value)
			.style("text-anchor", "middle");
	}
}
