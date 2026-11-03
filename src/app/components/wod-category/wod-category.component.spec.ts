import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WodCategoryComponent } from './wod-category.component';

describe('WodCategory', () => {
  let component: WodCategoryComponent;
  let fixture: ComponentFixture<WodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WodCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
