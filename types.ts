
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export enum GameState {
  Start,
  Playing,
  Finished,
}

export interface HighScore {
  name: string;
  score: number;
  time: number; // Time in seconds
}