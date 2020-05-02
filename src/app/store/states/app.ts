import { NavigationState } from "./navigation";
import { ThemeState } from "./theme";
import { MapState } from "./map";

export interface AppState {
	navigation: NavigationState;
	theme: ThemeState;
	map: MapState;
}
