
import { BlogPost } from '@/types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `
    query Publication {
      publication(host: "${process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}") {
        posts(first: 6) {
          edges {
            node {
              id
              title
              brief
              slug
              dateAdded
              coverImage
              readTime
              author {
                name
                profilePicture
                username
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT as string,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      },
    );

    const data = await response.json();

    // Debug the response to see what's actually being returned
    console.log('Hashnode API Response:', data);

    // Add proper error handling and data validation
    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      return [];
    }

    if (!data.data || !data.data.publication) {
      console.error('Unexpected response structure:', data);
      return [];
    }

    // Make sure posts exist before trying to map them
    if (!data.data.publication.posts || !data.data.publication.posts.edges) {
      console.error('No posts found in the response');
      return [];
    }

    return data.data.publication.posts.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Alternative implementation using dummy data for testing
export async function getTestBlogPosts(): Promise<BlogPost[]> {
  // Return dummy data for testing when the API isn't working
  return [
    {
      id: '1',
      title: 'Getting Started with Next.js and TypeScript',
      brief:
        'A comprehensive guide to setting up your first Next.js project with TypeScript support.',
      slug: 'getting-started-nextjs-typescript',
      dateAdded: new Date().toISOString(),
      coverImage: '/portfolio-main/public/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
      readTime: 5,
      author: {
        name: 'John Doe',
        profilePicture: '/portfolio-main/public/images/svg/TS-Logo.svg',
        username: 'johndoe',
      },
    },
    {
      id: '2',
      title: 'Mastering Tailwind CSS for Modern Web Development',
      brief:
        'Learn how to use Tailwind CSS to create beautiful, responsive designs without writing custom CSS.',
      slug: 'mastering-tailwind-css',
      dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      coverImage: '/portfolio-main/public/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
      readTime: 8,
      author: {
        name: 'Jane Smith',
        profilePicture: '/portfolio-main/public/images/svg/TS-Logo.svg',
        username: 'janesmith',
      },
    },
    {
      id: '3',
      title: 'Building Interactive UIs with Framer Motion',
      brief:
        'Discover how to add beautiful animations to your React applications using Framer Motion.',
      slug: 'interactive-uis-framer-motion',
      dateAdded: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      coverImage: '/portfolio-main/public/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
      readTime: 6,
      author: {
        name: 'Alex Johnson',
        profilePicture: '/portfolio-main/public/images/svg/TS-Logo.svg',
        username: 'alexjohnson',
      },
    },
  ];
}
