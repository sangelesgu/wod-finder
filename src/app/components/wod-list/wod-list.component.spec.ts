import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WodList } from './wod-list.component';

describe('WodList', () => {
  let component: WodList;
  let fixture: ComponentFixture<WodList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodList],
    }).compileComponents();

    fixture = TestBed.createComponent(WodList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
