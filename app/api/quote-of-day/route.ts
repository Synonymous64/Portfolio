import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || '1';

    // Different tag filters for different quotes to ensure uniqueness
    let tags = 'technology,education';
    if (type === '2') {
      tags = 'wisdom,inspirational';
    }

    // Fetch a random technical quote from Quotable API
    const response = await fetch(
      `https://api.quotable.io/random?tags=${tags}&minLength=30`,
      {
        headers: {
          'User-Agent': 'Portfolio-App',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const quote = await response.json();

    return NextResponse.json({
      content: quote.content,
      author: quote.author,
      tags: quote.tags,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);

    // Fallback quote if API fails
    return NextResponse.json({
      content:
        'The only way to do great work is to love what you do. Great things never came from comfort zones.',
      author: 'Steve Jobs & Unknown',
      tags: ['technology', 'education'],
    });
  }
}
