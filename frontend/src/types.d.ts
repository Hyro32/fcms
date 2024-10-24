interface Opponent {
  name: string;
  logo: string;
}

interface Goal {
  player: string;
  minute: number;
}

interface Score {
  home: Goal[];
  away: Goal[];
}

interface Match {
  opponent: Opponent;
  date: Date;
  score: Score;
}
