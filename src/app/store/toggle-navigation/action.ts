import { NavigationState } from "../states/navigation";
import { ActionTypes, ACTION_TOGGLE_NAVIGATION } from "./types";

export function toggleNavigation(payload: NavigationState): ActionTypes {
	return {
		type: ACTION_TOGGLE_NAVIGATION,
		payload: payload,
	};
}
