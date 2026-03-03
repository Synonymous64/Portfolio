export interface DeveloperQuote {
  text: string;
  author: string;
  title?: string;
}

// Fetch quote from API endpoint
async function fetchQuoteFromAPI(index: number = 1): Promise<DeveloperQuote | null> {
  try {
    // Use different API parameters for different quotes to ensure uniqueness
    const tags = index === 2 ? 'wisdom,inspirational' : 'technology,education';
    const response = await fetch(`/api/quote-of-day?type=${index}`);
    if (!response.ok) throw new Error('Failed to fetch quote');

    const data = await response.json();
    return {
      text: data.content,
      author: data.author,
      title: data.tags?.[0],
    };
  } catch (error) {
    console.error('Error fetching quote from API:', error);
    return null;
  }
}

// Get quote of the day from cache or API
export function getQuoteOfTheDay(index: number = 1): DeveloperQuote | null {
  if (typeof window === 'undefined') {
    return null; // Return null on server side
  }

  try {
    const today = new Date().toDateString();
    const cacheKey = `quote-of-day-${today}-${index}`;

    // Check if we have a cached quote for today
    const cachedQuote = localStorage.getItem(cacheKey);
    if (cachedQuote) {
      return JSON.parse(cachedQuote);
    }

    // Return null if no cache - component will fetch in useEffect with proper async handling
    return null;
  } catch (error) {
    console.error('Error reading quote from cache:', error);
    return null;
  }
}

// Async function to fetch and cache quote
export async function fetchAndCacheQuote(index: number = 1): Promise<DeveloperQuote | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const today = new Date().toDateString();
    const cacheKey = `quote-of-day-${today}-${index}`;

    // Check if we have a cached quote for today
    const cachedQuote = localStorage.getItem(cacheKey);
    if (cachedQuote) {
      return JSON.parse(cachedQuote);
    }

    // Fetch new quote from API
    const quote = await fetchQuoteFromAPI(index);
    if (quote) {
      // Cache the quote for today
      localStorage.setItem(cacheKey, JSON.stringify(quote));

      // Clean up old quotes from cache (older than 7 days)
      const now = Date.now();
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('quote-of-day-')) {
          const dateStr = key.split('-').slice(3, 5).join('-');
          const dateObj = new Date(dateStr);
          const daysDiff = Math.floor(
            (now - dateObj.getTime()) / (1000 * 60 * 60 * 24)
          );
          if (daysDiff > 7) {
            localStorage.removeItem(key);
          }
        }
      });
    }

    return quote;
  } catch (error) {
    console.error('Error fetching and caching quote:', error);
    return null;
  }
}
