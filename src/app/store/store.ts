import { ActionReducerMap } from "@ngrx/store";
import { toggleNavigationReducer } from "./toggle-navigation/reducer";
import { toggleThemeReducer } from "./toggle-theme/reducer";
import { mapReducer } from "./map/reducer";
import { AppState } from "./states/app";

export const reducers: ActionReducerMap<AppState> = {
	navigation: toggleNavigationReducer,
	theme: toggleThemeReducer,
	map: mapReducer,
};
