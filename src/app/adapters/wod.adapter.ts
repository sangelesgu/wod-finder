import { Wod } from '../models/wod.model';
import { WodApi } from '../models/wod-api.model';

export class WodAdapter {
  static toModel(apiWod: WodApi): Wod {
    const category = apiWod.category.trim();

    const validCategories: Wod['category'][] = ['AMRAP', 'EMOM', 'For Time', 'Chipper'];

    return {
      id: apiWod.id,
      name: apiWod.name.trim(),
      description: apiWod.description.trim(),
      category: validCategories.includes(category as Wod['category'])
        ? (category as Wod['category'])
        : 'For Time',
      date: apiWod.date,
      durationMinutes: Number(apiWod.durationMinutes) || 0,
      featured: apiWod.featured ?? false,
    };
  }

  static toModelList(apiWods: WodApi[]): Wod[] {
    return apiWods.map((wod) => this.toModel(wod));
  }
}
