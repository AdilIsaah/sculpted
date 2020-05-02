import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { ACTION_GET_CORONA_VIRUS } from "./types";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { coronaVirusLoaded, coronaVirusError } from "./action";
import { CoronaVirusService } from "../services/corona-virus.service";

@Injectable()
export class CoronaVirusEffects {
	constructor(
		private actions$: Actions,
		private coronavirusService: CoronaVirusService
	) {}

	@Effect()
	loadCoronaVirus$ = this.actions$.pipe(
		ofType(ACTION_GET_CORONA_VIRUS),
		mergeMap(() => {
			return this.coronavirusService.get().pipe(
				map(
					(coronavirus) => coronaVirusLoaded(coronavirus),
					catchError((error) => of(coronaVirusError(error)))
				)
			);
		})
	);
}
