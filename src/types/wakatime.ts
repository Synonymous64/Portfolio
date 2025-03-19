export interface WakaTimeStats {
  data: {
    start: string;
    end: string;
    daily_average: number; // in seconds
    total_seconds: number;
    best_day: {
      date: string;
      total_seconds: number;
    };
    languages: WakaTimeLanguage[];
    categories: WakaTimeCategory[];
    all_time_seconds_since_today: number;
    range: string;
    human_readable_range: string;
    status: string;
    last_update: string;
  };
}

export interface WakaTimeLanguage {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
}

export interface WakaTimeCategory {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
}

export interface FormattedWakaTimeStats {
  startDate: string;
  endDate: string;
  dailyCodingAverage: string;
  thisWeekCodingTime: string;
  bestDayCodingTime: string;
  bestDayDate: string;
  allTimeSinceToday: string;
  languages: Array<{
    name: string;
    percent: number;
    color: string;
  }>;
  categories: Array<{
    name: string;
    percent: number;
    color: string;
  }>;
  lastUpdate: string;
}
