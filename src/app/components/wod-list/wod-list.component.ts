import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Wod } from '../../models/wod.model';
import { WodCardComponent } from '../wod-card/wod-card.component';

@Component({
  selector: 'app-wod-list',
  imports: [WodCardComponent],
  templateUrl: './wod-list.component.html',
  styleUrl: './wod-list.component.scss',
})
export class WodList {
  @Input({ required: true }) wods: Wod[] = [];

  @Output() wodSelected = new EventEmitter<Wod>();

  selectWod(wod: Wod): void {
    this.wodSelected.emit(wod);
  }
}
