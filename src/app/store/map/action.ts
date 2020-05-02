import { MapState } from "../states/map";
import { ACTION_GET_COUNTRY_DETAILS, ActionTypes } from "./types";

export function getCountryDetails(payload: MapState): ActionTypes {
	return {
		type: ACTION_GET_COUNTRY_DETAILS,
		payload: payload,
	};
}
