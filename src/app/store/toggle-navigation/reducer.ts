import { NavigationState } from "../states/navigation";
import { ActionTypes, ACTION_TOGGLE_NAVIGATION } from "./types";

const INITIAL_STATE: NavigationState = {
	opened: false,
};

export function toggleNavigationReducer(
	state = INITIAL_STATE,
	action: ActionTypes
): NavigationState {
	switch (action.type) {
		case ACTION_TOGGLE_NAVIGATION:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}
