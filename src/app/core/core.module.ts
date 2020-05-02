import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "../shared/shared.module";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
	declarations: [FooterComponent, HeaderComponent, NavigationComponent],
	exports: [FooterComponent, HeaderComponent, NavigationComponent],
	imports: [
		CommonModule,
		MatDividerModule,
		MatToolbarModule,
		MatIconModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatListModule,
		RouterModule,
		MatButtonModule,
		SharedModule,
	],
	providers: [],
})
export class CoreModule {}
