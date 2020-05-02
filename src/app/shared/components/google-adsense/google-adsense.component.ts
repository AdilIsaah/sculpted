import { Component, AfterViewInit } from "@angular/core";

@Component({
	selector: "app-google-adsense",
	template: ` <div>
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-6057749446067272"
			data-ad-slot="8184819393"
			data-ad-format="auto"
		>
		</ins>
	</div>`,
	styleUrls: ["./google-adsense.component.scss"],
})
export class GoogleAdsenseComponent implements AfterViewInit {
	constructor() {}

	ngAfterViewInit(): void {
		try {
			(window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
		} catch (e) {
			console.error("error");
		}
	}
}
