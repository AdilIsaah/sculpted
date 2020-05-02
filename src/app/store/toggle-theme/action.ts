import { ActionTypes, ACTION_TOGGLE_THEME } from "./types";
import { ThemeState } from "../states/theme";

export function toggleTheme(payload: ThemeState): ActionTypes {
	return {
		type: ACTION_TOGGLE_THEME,
		payload: payload,
	};
}
