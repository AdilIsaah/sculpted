import { Component, OnInit } from "@angular/core";
import { AppState } from "../../../store/states/app";
import { Store } from "@ngrx/store";
import { toggleTheme } from "../../../store/toggle-theme/action";
import { toggleNavigation } from "../../../store/toggle-navigation/action";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	title = "sculpted";
	isDarkTheme: boolean;
	toggleNavigationMenu: boolean;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.select("theme").subscribe((state) => {
			this.isDarkTheme = state.changed;
		});
		this.store.select("navigation").subscribe((state) => {
			this.toggleNavigationMenu = state.opened;
		});
	}

	toggleDarkTheme() {
		this.isDarkTheme = !this.isDarkTheme;
		this.store.dispatch(toggleTheme({ changed: this.isDarkTheme }));
	}

	toggleNav(): void {
		this.toggleNavigationMenu = !this.toggleNavigationMenu;
		this.store.dispatch(
			toggleNavigation({ opened: this.toggleNavigationMenu })
		);
	}
}
