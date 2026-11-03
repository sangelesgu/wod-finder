import { Component, Input } from '@angular/core';
import type { Wod } from '../../models/wod.model';

@Component({
  selector: 'app-wod-category',
  imports: [],
  templateUrl: './wod-category.component.html',
  styleUrl: './wod-category.component.scss',
  standalone: true,
})
export class WodCategoryComponent {
  @Input({ required: true }) category!: Wod['category'];
}
