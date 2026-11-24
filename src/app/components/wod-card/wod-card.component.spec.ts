import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WodCardComponent } from './wod-card.component';

describe('WodCard', () => {
  let component: WodCardComponent;
  let fixture: ComponentFixture<WodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WodCardComponent);
    component = fixture.componentInstance;
    component.wod = {
      id: 1,
      name: 'WOD de prueba',
      description: 'Descripción de prueba',
      date: '2026-11-24',
      category: 'AMRAP',
      durationMinutes: 12,
      featured: false,
    };
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
