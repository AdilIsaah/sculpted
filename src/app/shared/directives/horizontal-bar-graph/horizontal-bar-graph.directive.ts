import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { Record } from "src/app/core/models/record";
import {
	select,
	descending,
	scaleLinear,
	max,
	scaleOrdinal,
	axisLeft,
	axisBottom,
	scaleBand,
} from "d3";
import { Render } from "../../models/render";

@Directive({
	selector: "[appHorizontalBarGraph]",
})
export class HorizontalBarGraphDirective implements OnInit, Render {
	@Input() data: Array<Record>;

	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		const element = this.el.nativeElement;
		const innerElement = this.draw(element);
		this.el.nativeElement.innerHtml = innerElement;
	}

	draw(nativeElement: any): any {
		const sortedAndFilteredData = this.data
			.sort((a: Record, b: Record) => descending(a.value, b.value))
			.slice(0, 10);

		const margin = { top: 20, right: 30, bottom: 40, left: 90 };
		const width = 900 - margin.left - margin.right;
		const height = 500 - margin.top - margin.bottom;

		// Append the svg object to the body of the page
		const svg = select(nativeElement)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		// X axis
		const x = scaleLinear()
			.domain([0, sortedAndFilteredData[0].value])
			.range([1, width]);
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(axisBottom(x))
			.selectAll("text")
			.attr("transform", "translate(-10,0)rotate(-45)")
			.style("text-anchor", "end");

		// Y axis
		const y = scaleBand()
			.range([0, height])
			.domain(
				sortedAndFilteredData.map(function (d) {
					return d.key;
				})
			)
			.padding(0.1);
		svg.append("g").call(axisLeft(y));

		//Bars
		return svg
			.selectAll("myRect")
			.data(sortedAndFilteredData)
			.enter()
			.append("rect")
			.attr("height", y.bandwidth())
			.attr("x", x(0))
			.attr("y", function (d) {
				return y(d.key);
			})
			.transition()
			.duration(800)
			.delay((d, i) => i * 100)
			.attr("width", (d) => x(d.value))
			.attr("fill", "#69b3a2");
	}
}
