import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WodCard } from './wod-card.component';

describe('WodCard', () => {
  let component: WodCard;
  let fixture: ComponentFixture<WodCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WodCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
