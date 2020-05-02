import {
	ACTION_GET_CORONA_VIRUS,
	ActionTypes,
	ACTION_CORONA_VIRUS_LOADED,
	ACTION_CORONA_VIRUS_ERROR,
} from "./types";

export function coronaVirusReducer(state = null, action: ActionTypes): any {
	switch (action.type) {
		case ACTION_GET_CORONA_VIRUS:
			return {
				...state,
			};

		case ACTION_CORONA_VIRUS_LOADED:
			return {
				...state,
				...action.payload,
			};

		case ACTION_CORONA_VIRUS_ERROR:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}
