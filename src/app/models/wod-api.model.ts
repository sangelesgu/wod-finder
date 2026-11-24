export interface WodApi {
  id: number;
  name: string;
  description: string;
  category: string;
  date: string;
  durationMinutes: number;
  featured?: boolean;
}
