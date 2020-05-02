import { ActionTypes, ACTION_TOGGLE_THEME } from "./types";
import { ThemeState } from "../states/theme";

const INITIAL_STATE: ThemeState = {
	changed: false,
};

export function toggleThemeReducer(
	state = INITIAL_STATE,
	action: ActionTypes
): ThemeState {
	switch (action.type) {
		case ACTION_TOGGLE_THEME:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}
