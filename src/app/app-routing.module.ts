import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoronaVirusModule } from "./modules/corona-virus/corona-virus.module";

const routes: Routes = [
	{
		path: "",
		loadChildren: () => CoronaVirusModule,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
