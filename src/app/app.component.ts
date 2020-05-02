import { MediaMatcher } from "@angular/cdk/layout";
import { Component, OnDestroy, ChangeDetectorRef, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleNavigation } from "./store/toggle-navigation/action";
import { AppState } from "./store/states/app";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	isDarkTheme: boolean;
	toggleNav: boolean;

	private mobileQueryListener: () => void;

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private media: MediaMatcher,
		private store: Store<AppState>
	) {
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this.mobileQueryListener);
	}

	ngOnInit() {
		this.store.select("theme").subscribe((state) => {
			this.isDarkTheme = state.changed;
		});
		this.store.select("navigation").subscribe((state) => {
			this.toggleNav = state.opened;
		});
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this.mobileQueryListener);
	}

	menuClosed() {
		this.store.dispatch(toggleNavigation({ opened: false }));
	}
}
