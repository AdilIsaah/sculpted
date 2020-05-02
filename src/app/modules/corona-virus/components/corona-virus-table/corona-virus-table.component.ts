import { Component, OnInit, Input } from "@angular/core";
import { CoronaVirusCases, CoronaVirusRecord } from "../../models/corona-virus";
import { MatTableDataSource } from "@angular/material/table";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-corona-virus-table",
	templateUrl: "./corona-virus-table.component.html",
	styleUrls: ["./corona-virus-table.component.scss"],
})
export class CoronaVirusTableComponent implements OnInit {
	@Input() displayedColumns: string[] = ["position", "country"];
	tableData: Array<CoronaVirusCases>;
	data: MatTableDataSource<CoronaVirusCases>;

	constructor(private store: Store<any>) {}

	ngOnInit(): void {
		this.store
			.select("coronavirus")
			.subscribe((response: CoronaVirusRecord) => {
				if (response.records) {
					this.tableData = response.records
						.slice()
						.sort((a, b) => b.confirmed - a.confirmed)
						.map((element: CoronaVirusCases, index: number) => {
							return {
								position: index + 1,
								country: element.country,
								countryCode: element.countryCode,
								deaths: element.deaths,
								confirmed: element.confirmed,
								recovered: element.recovered,
								province: element.province
							};
						});
					this.data = new MatTableDataSource(this.tableData);
				}
			});
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.data.filter = filterValue.trim().toLowerCase();
	}
}
