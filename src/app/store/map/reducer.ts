import { ActionTypes, ACTION_GET_COUNTRY_DETAILS } from "./types";
import { MapState } from "../states/map";

const INITIAL_STATE: MapState = {
	id: 0,
	country: null,
};

export function mapReducer(
	state = INITIAL_STATE,
	action: ActionTypes
): MapState {
	switch (action.type) {
		case ACTION_GET_COUNTRY_DETAILS:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}
