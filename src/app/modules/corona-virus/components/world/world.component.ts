import { Component, OnInit } from "@angular/core";
import { WorldService } from "src/app/shared/services/world/world.service";
import { CoronaVirusCases, CoronaVirusRecord } from "../../models/corona-virus";
import { Record } from "src/app/core/models/record";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-world",
	templateUrl: "./world.component.html",
	styleUrls: ["./world.component.scss"],
})
export class WorldComponent implements OnInit {
	loading: boolean = true;
	isExpandCountry: boolean = false;
	worldWideCases: Array<Record>;
	countryWiseCases: CoronaVirusCases;
	coronaVirusCasesResponse: CoronaVirusRecord;

	constructor(
		private worldService: WorldService,
		private store: Store<any>
	) {}

	ngOnInit(): void {
		this.store
			.select("coronavirus")
			.subscribe((response: CoronaVirusRecord) => {
				if (response.records && response.total) {
					this.worldWideCases = [
						{ key: "Confirmed", value: response.total.confirmed },
						{ key: "Recovered", value: response.total.recovered },
						{ key: "Deaths", value: response.total.deaths },
					];
					this.coronaVirusCasesResponse = response;
					this.loading = false;
				}
			});
	}

	closeCountry(): void {
		this.isExpandCountry = false;
	}

	openCountry(): void {
		this.isExpandCountry = true;
	}

	clickedOncountry(data: any): void {
		this.isExpandCountry = true;
		this.countryWiseCases = null;

		const record = this.worldService.getCountryDetails(
			data.id,
			data.country
		);

		this.store
			.select("coronavirus")
			.subscribe((response: CoronaVirusRecord) => {
				response.records.some((element: CoronaVirusCases) => {
					if(!this.countryWiseCases) {
						if (element.countryCode === record.iso_a2) {
							this.countryWiseCases = {
								position: element.position,
								country: record.country,
								countryCode: element.countryCode.toLowerCase(),
								confirmed: element.confirmed,
								deaths: element.deaths,
								recovered: element.recovered,
								province: element.province
							};
							return;
						}
	
						if (element.countryCode === record.postal.slice(0, 2)) {
							this.countryWiseCases = {
								position: element.position,
								country: record.country,
								countryCode: element.countryCode.toLowerCase(),
								confirmed: element.confirmed,
								deaths: element.deaths,
								recovered: element.recovered,
								province: element.province
							};
							return;
						}
	
						if (
							element.country.toLowerCase() ===
							record.country.toLowerCase()
						) {
							this.countryWiseCases = {
								position: element.position,
								country: record.country,
								countryCode: element.countryCode.toLowerCase(),
								confirmed: element.confirmed,
								deaths: element.deaths,
								recovered: element.recovered,
								province: element.province
							};
							return;
						}
	
						if (
							element.province.toLowerCase() ===
							record.province.toLowerCase()
							||
							element.province.toLowerCase().includes(record.province.toLowerCase())
						) {
							this.countryWiseCases = {
								position: element.position,
								country: record.country,
								countryCode: element.countryCode.toLowerCase(),
								confirmed: element.confirmed,
								deaths: element.deaths,
								recovered: element.recovered,
								province: element.province
							};
							return;
						}
					} else {
						return;
					}
				});

				if (!this.countryWiseCases) {
					this.countryWiseCases = {
						position: 0,
						country: record.country,
						countryCode: record.postal.toLowerCase(),
						confirmed: 0,
						deaths: 0,
						recovered: 0,
						province: null
					};
				}
			});
	}
}
