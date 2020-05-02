import {
	Directive,
	ElementRef,
	OnInit,
	EventEmitter,
	Output,
} from "@angular/core";
import * as worldAtlasCountries from "world-atlas/countries-50m.json";
import { feature } from "topojson-client";
import {
	GeoProjection,
	GeoPath,
	GeoPermissibleObjects,
	geoMercator,
	geoPath,
	select,
	zoom,
	event,
} from "d3";
import { Render } from "../../models/render";
import { AppState } from "src/app/store/states/app";
import { Store } from "@ngrx/store";

@Directive({
	selector: "[appWorldMap]",
})
export class WorldMapDirective implements OnInit, Render {
	@Output() clickedOncountry = new EventEmitter();

	private worldAtlasCountries: any = (worldAtlasCountries as any).default;
	private projection: GeoProjection;
	private pathGenerator: GeoPath<any, GeoPermissibleObjects>;

	constructor(private el: ElementRef, private store: Store<AppState>) {
		this.worldAtlasCountries = feature(
			this.worldAtlasCountries,
			this.worldAtlasCountries.objects.countries
		);
	}

	ngOnInit(): void {
		const element = this.el.nativeElement;

		this.projection = geoMercator()
			.scale(153)
			.translate([
				element.parentElement.offsetWidth / 2,
				element.parentElement.offsetHeight / 2,
			])
			.precision(0.1);
		this.pathGenerator = geoPath().projection(this.projection);

		const innerElement = this.draw(element);
		this.el.nativeElement.innerHtml = innerElement;
	}

	draw(nativeElement: any): any {
		const svg = select(nativeElement).attr(
			"viewBox",
			`0 0 ${nativeElement.parentElement.offsetWidth} ${nativeElement.parentElement.offsetHeight}`
		);
		const group = svg.append("g");

		svg.call(
			zoom().on("zoom", () => {
				group.attr("transform", event.transform);
			})
		);

		group
			.selectAll("path")
			.data(this.worldAtlasCountries.features)
			.enter()
			.append("path")
			.attr("class", "label")
			.attr("d", (geoObject: GeoPermissibleObjects) =>
				this.pathGenerator(geoObject)
			)
			.on("mouseover", function () {
				select(this).attr("fill", "#FB3640");
			})
			.on("mouseout", function () {
				select(this).attr("fill", "inherit");
			})
			.on("click", (d: any) => {
				this.clickedOncountry.emit({
					id: d.id,
					country: d.properties.name,
				});
			})
			.append("title")
			.text((d: any) => d.properties.name);

		return group;
	}
}
