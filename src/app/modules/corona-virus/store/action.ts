import {
	ActionTypes,
	ACTION_GET_CORONA_VIRUS,
	ACTION_CORONA_VIRUS_LOADED,
	ACTION_CORONA_VIRUS_ERROR,
} from "./types";

export function getCoronaVirus(): ActionTypes {
	return {
		type: ACTION_GET_CORONA_VIRUS,
	};
}

export function coronaVirusLoaded(payload: any): ActionTypes {
	return {
		type: ACTION_CORONA_VIRUS_LOADED,
		payload: payload,
	};
}

export function coronaVirusError(payload: any): ActionTypes {
	return {
		type: ACTION_CORONA_VIRUS_ERROR,
		payload: payload,
	};
}
