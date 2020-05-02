import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { SearchPipe } from "./pipe/search/search.pipe";

import { WorldService } from "./services/world/world.service";

import { WorldMapDirective } from "./directives/world-map/world-map.directive";
import { HorizontalBarGraphDirective } from "./directives/horizontal-bar-graph/horizontal-bar-graph.directive";
import { PieChartDirective } from "./directives/pie-chart/pie-chart.directive";

import { DetailTabsComponent } from "./components/detail-tabs/detail-tabs.component";
import { SearchComponent } from "./components/search/search.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { CardComponent } from "./components/card/card.component";
import { EmptyStateComponent } from "./components/empty-state/empty-state.component";
import { ImageComponent } from "./components/image/image.component";
import { VirtualScrollComponent } from "./components/virtual-scroll/virtual-scroll.component";
import { DisplayDetailsComponent } from "./components/display-details/display-details.component";
import { GoogleAdsenseComponent } from "./components/google-adsense/google-adsense.component";

@NgModule({
	declarations: [
		DetailTabsComponent,
		SearchComponent,
		AccordionComponent,
		SearchPipe,
		CardComponent,
		WorldMapDirective,
		HorizontalBarGraphDirective,
		PieChartDirective,
		EmptyStateComponent,
		ImageComponent,
		VirtualScrollComponent,
		DisplayDetailsComponent,
		GoogleAdsenseComponent,
	],
	exports: [
		DetailTabsComponent,
		SearchComponent,
		AccordionComponent,
		SearchPipe,
		CardComponent,
		WorldMapDirective,
		HorizontalBarGraphDirective,
		PieChartDirective,
		EmptyStateComponent,
		ImageComponent,
		VirtualScrollComponent,
		DisplayDetailsComponent,
		GoogleAdsenseComponent,
	],
	imports: [
		CommonModule,
		MatTabsModule,
		MatIconModule,
		MatInputModule,
		MatDividerModule,
		MatStepperModule,
		MatButtonModule,
		MatExpansionModule,
		FormsModule,
		MatCardModule,
		ScrollingModule,
	],
	providers: [WorldService],
})
export class SharedModule {}
