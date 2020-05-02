import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as coronaData from "../../../../assets/content/formated-corona.json";
import { CoronaVirusRecord } from "../models/corona-virus";
import { Observable, of } from "rxjs";

@Injectable()
export class CoronaVirusService {
	private coronaData: any = (coronaData as any).default;
	private api: string = "https://sculpted-adil.now.sh/api/coronavirus";

	constructor(private httpClient: HttpClient) {}

	get(): Observable<CoronaVirusRecord> {
		// return of(this.coronaData);
		return this.httpClient.get<CoronaVirusRecord>(this.api);
	}
}
