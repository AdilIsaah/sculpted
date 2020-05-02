import { NavigationState } from "../states/navigation";

export const ACTION_TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";

interface ToggleNavigation {
	type: typeof ACTION_TOGGLE_NAVIGATION;
	payload: NavigationState;
}

export type ActionTypes = ToggleNavigation;
