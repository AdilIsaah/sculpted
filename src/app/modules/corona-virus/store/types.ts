export const ACTION_GET_CORONA_VIRUS = "GET_CORONA_VIRUS";
export const ACTION_CORONA_VIRUS_LOADED = "CORONA_VIRUS_LOADED";
export const ACTION_CORONA_VIRUS_ERROR = "CORONA_VIRUS_ERROR";

interface GetCoronaVirus {
	type: typeof ACTION_GET_CORONA_VIRUS;
}

interface CoronaVirusLoaded {
	type: typeof ACTION_CORONA_VIRUS_LOADED;
	payload: any;
}

interface CoronaVirusError {
	type: typeof ACTION_CORONA_VIRUS_ERROR;
	payload: any;
}

export type ActionTypes = GetCoronaVirus | CoronaVirusLoaded | CoronaVirusError;
