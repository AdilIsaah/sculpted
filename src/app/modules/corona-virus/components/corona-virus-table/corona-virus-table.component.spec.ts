import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoronaVirusTableComponent } from "./corona-virus-table.component";

describe("CoronaVirusTableComponent", () => {
	let component: CoronaVirusTableComponent;
	let fixture: ComponentFixture<CoronaVirusTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoronaVirusTableComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoronaVirusTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
