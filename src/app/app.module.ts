import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CoreModule } from "./core/core.module";
import { StoreModule } from "@ngrx/store";

import { reducers } from "./store/store";

import { AppComponent } from "./app.component";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		CoreModule,
		StoreModule.forRoot(reducers, {}),
		EffectsModule.forRoot([]),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
