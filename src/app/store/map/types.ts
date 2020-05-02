import { MapState } from "../states/map";

export const ACTION_GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";

interface GetCountryDetails {
	type: typeof ACTION_GET_COUNTRY_DETAILS;
	payload: MapState;
}

export type ActionTypes = GetCountryDetails;
