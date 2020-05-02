import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoronaVirusRoutingModule } from "./corona-virus-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Store } from "@ngrx/store";
import { SharedModule } from "../../shared/shared.module";
import { MatTableModule } from "@angular/material/table";

import { WorldComponent } from "./components/world/world.component";

import { coronaVirusReducer } from "./store/reducer";
import { CoronaVirusEffects } from "./store/effects";

import { CoronaVirusService } from "./services/corona-virus.service";
import { HttpClientModule } from "@angular/common/http";
import { CoronaVirusTableComponent } from "./components/corona-virus-table/corona-virus-table.component";
import { getCoronaVirus } from "./store/action";

@NgModule({
	declarations: [WorldComponent, CoronaVirusTableComponent],
	imports: [
		CommonModule,
		CoronaVirusRoutingModule,
		HttpClientModule,
		SharedModule,
		StoreModule.forFeature("coronavirus", coronaVirusReducer),
		EffectsModule.forFeature([CoronaVirusEffects]),
		MatTableModule,
	],
	providers: [CoronaVirusService],
})
export class CoronaVirusModule {
	constructor(private store: Store<any>) {
		this.store.dispatch(getCoronaVirus());
	}
}
