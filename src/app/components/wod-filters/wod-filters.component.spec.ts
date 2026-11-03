import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WodFilters } from './wod-filters.component';

describe('WodFilters', () => {
  let component: WodFilters;
  let fixture: ComponentFixture<WodFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(WodFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
