export interface Wod {
  id: number;
  name: string;
  description: string;
  date: string;
  category: 'AMRAP' | 'EMOM' | 'For Time' | 'Chipper';
  durationMinutes: number; // duration in minutes
  featured?: boolean;
}
