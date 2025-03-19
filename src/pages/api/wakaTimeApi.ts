import { WakaTimeStats, FormattedWakaTimeStats } from "@/types/wakatime";
import { format, parseISO } from "date-fns";


// Language colors mapping
const languageColors: Record<string, string> = {
  TypeScript: "from-blue-400 via-blue-500 to-blue-600",
  JavaScript: "from-yellow-300 via-yellow-400 to-orange-500",
  HTML: "from-orange-400 via-red-500 to-red-600",
  CSS: "from-blue-400 via-purple-500 to-purple-600",
  Python: "from-blue-400 via-green-500 to-yellow-400",
  Java: "from-red-400 via-red-500 to-red-600",
  CSharp: "from-purple-400 via-purple-500 to-purple-600",
  Bash: "from-green-400 via-green-500 to-green-600",
  PHP: "from-indigo-400 via-indigo-500 to-indigo-600",
  Ruby: "from-red-400 via-red-500 to-red-600",
  Go: "from-blue-300 via-blue-400 to-blue-500",
  Rust: "from-orange-400 via-orange-500 to-orange-600",
  Swift: "from-orange-400 via-orange-500 to-red-500",
  Kotlin: "from-purple-400 via-purple-500 to-purple-600",
  Dart: "from-blue-400 via-cyan-500 to-cyan-600",
  // Add more languages as needed
};

// Category colors mapping
const categoryColors: Record<string, string> = {
  Coding: "from-blue-400 via-purple-500 to-indigo-600",
  Building: "from-green-400 via-green-500 to-green-600",
  Debugging: "from-red-400 via-red-500 to-red-600",
  Designing: "from-pink-400 via-pink-500 to-pink-600",
  // Add more categories as needed
};

// Default color for unlisted languages/categories
const defaultColor = "from-gray-400 via-gray-500 to-gray-600";

// Format seconds to human-readable time (X hrs Y mins)
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${minutes} mins`;
  }

  return `${hours} hrs ${minutes} mins`;
};

// Format date to display format (Month DD, YYYY)
export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, "MMMM d, yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
};

// Get color gradient for a language or category
export const getColorGradient = (
  name: string,
  type: "language" | "category"
): string => {
  const colorMap = type === "language" ? languageColors : categoryColors;
  return colorMap[name] || defaultColor;
};

// Calculate time since last update
export const getTimeSinceLastUpdate = (lastUpdateTime: string): string => {
  try {
    const lastUpdate = new Date(lastUpdateTime);
    const now = new Date();
    const diffInMs = now.getTime() - lastUpdate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return `${diffInMinutes} minutes ago`;
    }

    return `${diffInHours} hours ago`;
  } catch (error) {
    console.error("Error calculating time since last update:", error);
    return "recently";
  }
};

// Fetch WakaTime stats using the API
export const fetchWakaTimeStats = async (
  apiKey: string
): Promise<FormattedWakaTimeStats> => {
  try {
    // Since this is client-side code, we'll use a proxy endpoint to avoid exposing the API key
    // In a real implementation, this should be done through a server-side API route
    // This is a placeholder to show the structure
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${btoa(apiKey)}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch WakaTime stats: ${response.statusText}`);
    }

    const data: WakaTimeStats = await response.json();

    // Format the data for our UI
    const formattedStats: FormattedWakaTimeStats = {
      startDate: formatDate(data.data.start),
      endDate: formatDate(data.data.end),
      dailyCodingAverage: formatTime(data.data.daily_average),
      thisWeekCodingTime: formatTime(data.data.total_seconds),
      bestDayCodingTime: formatTime(data.data.best_day.total_seconds),
      bestDayDate: formatDate(data.data.best_day.date),
      allTimeSinceToday: formatTime(data.data.all_time_seconds_since_today),
      languages: data.data.languages.slice(0, 5).map((lang) => ({
        name: lang.name,
        percent: lang.percent,
        color: getColorGradient(lang.name, "language"),
      })),
      categories: data.data.categories.slice(0, 5).map((cat) => ({
        name: cat.name,
        percent: cat.percent,
        color: getColorGradient(cat.name, "category"),
      })),
      lastUpdate: getTimeSinceLastUpdate(data.data.last_update),
    };

    return formattedStats;
  } catch (error) {
    console.error("Error fetching WakaTime stats:", error);
    // Return mock data for development or error cases
    return getMockWakaTimeStats();
  }
};

// Mock data for development or fallback
export const getMockWakaTimeStats = (): FormattedWakaTimeStats => {
  return {
    startDate: "March 12, 2025",
    endDate: "March 18, 2025",
    dailyCodingAverage: "4 hrs 48 mins",
    thisWeekCodingTime: "33 hrs 41 mins",
    bestDayCodingTime: "8 hrs 14 mins",
    bestDayDate: "March 16, 2025",
    allTimeSinceToday: "497 hrs 31 mins",
    languages: [
      {
        name: "TypeScript",
        percent: 78,
        color: getColorGradient("TypeScript", "language"),
      },
      {
        name: "JavaScript",
        percent: 18,
        color: getColorGradient("JavaScript", "language"),
      },
      { name: "Bash", percent: 2, color: getColorGradient("Bash", "language") },
      { name: "HTML", percent: 1, color: getColorGradient("HTML", "language") },
      { name: "CSS", percent: 1, color: getColorGradient("CSS", "language") },
    ],
    categories: [
      {
        name: "Coding",
        percent: 100,
        color: getColorGradient("Coding", "category"),
      },
    ],
    lastUpdate: "16 hours ago",
  };
};
