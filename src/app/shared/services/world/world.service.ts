import { Injectable } from "@angular/core";
import * as worldCountries from "../../../../assets/content/50m.json";

interface IRecord {
	postal: string;
	iso_a2: string;
	country: string;
	province: string;
}

@Injectable()
export class WorldService {
	private worldCountries: any = (worldCountries as any).default;

	constructor() {}

	getCountryDetails(id: string, country: string): IRecord {
		let record: IRecord;

		// Reason : Because in some cases even through iso_n3 id matched, the name does not.
		this.worldCountries.some((element) => {
			if (element.iso_n3 && element.name) {
				if (
					element.iso_n3 === id &&
					element.name.toUpperCase() === country.toUpperCase()
				) {

					return (record = {
						postal: element.postal,
						iso_a2: element.iso_a2,
						country: element.name,
						province: element.admin
					});
				}
			}
		});

		// Reason : if the above creatia has not passed. It is possible that the above operation did not return any records because country name did not match the element.name even though id to element.iso_n3 did.
		if (!record) {
			this.worldCountries.some((element) => {
				if (element.iso_n3 || element.name) {
					if (
						element.iso_n3 === id ||
						element.name.toUpperCase() === country.toUpperCase()
					) {

						if(element.name.endsWith("Is.")) {
							element.name = element.name.replace("Is.", "Islands") 
						} 

						return (record = {
							postal: element.postal,
							iso_a2: element.iso_a2,
							country: element.name,
							province: element.admin
						});
					}
				}
			});
		}

		return record;
	}
}
