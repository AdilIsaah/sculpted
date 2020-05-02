import { ThemeState } from "../states/theme";

export const ACTION_TOGGLE_THEME = "TOGGLE_THEME";

interface ToggleTheme {
	type: typeof ACTION_TOGGLE_THEME;
	payload: ThemeState;
}

export type ActionTypes = ToggleTheme;
