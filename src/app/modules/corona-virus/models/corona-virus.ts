export interface CoronaVirusCases {
	position: number;
	country: string;
	countryCode: string;
	deaths: number;
	confirmed: number;
	recovered: number;
	province: string;
}

export interface Latest {
	confirmed: number;
	deaths: number;
	recovered: number;
}

export interface CoronaVirusRecord {
	records: Array<CoronaVirusCases>;
	total: Latest;
}
