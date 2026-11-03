import { Component, Input } from '@angular/core';
import { WodCategoryComponent } from '../wod-category/wod-category.component';
import type { Wod } from '../../models/wod.model';

@Component({
  selector: 'app-wod-card',
  imports: [WodCategoryComponent],
  templateUrl: './wod-card.component.html',
  styleUrl: './wod-card.component.scss',
})
export class WodCardComponent {
  @Input({ required: true }) wod!: Wod;
}
