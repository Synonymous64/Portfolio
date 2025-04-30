import request, { gql } from 'graphql-request';
import { GetPostBySlugResponse, GetPostsArgs, GetPostsResponse, PublicationName, SubscribeToNewsletterResponse } from './types';

const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

if (!endpoint || !publicationId) {
  throw new Error('Required environment variables are not set');
}

// Now TypeScript knows these variables are definitely strings
const ENDPOINT: string = endpoint;
const PUBLICATION_ID: string = publicationId;

export async function getBlogName() {
  const query = gql`
    query getBlogName($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        title
        displayTitle
        favicon
      }
    }
  `;

  const response = await request<PublicationName>(ENDPOINT, query, {
    publicationId: PUBLICATION_ID,
  });

  return {
    title: response.publication.title,
    displayTitle: response.publication.displayTitle,
    favicon: response.publication.favicon,
  };
}

export async function getPosts({ first = 9, pageParam = '' }: GetPostsArgs) {
  const query = gql`
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(ENDPOINT, query, {
    publicationId: PUBLICATION_ID,
    first,
    after: pageParam || '', // Ensure we always pass a string
  });

  return response.publication.posts.edges;
}

export async function getPost(slug: string) {
  const query = gql`
    query getPost($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          id
          title
          subtitle
          publishedAt
          content {
            html
          }
          coverImage {
            url
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(ENDPOINT, query, {
    publicationId: PUBLICATION_ID,
    slug,
  });

  return response.publication.post;
}

export async function subscribeToNewsletter(email: string) {
  const mutation = gql`
    mutation subscribeToNewsletter($publicationId: ObjectId!, $email: String!) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $publicationId }
      ) {
        status
      }
    }
  `;

  const response = await request<SubscribeToNewsletterResponse>(
    ENDPOINT,
    mutation,
    {
      publicationId: PUBLICATION_ID,
      email,
    }
  );

  return response;
}

export async function getPostBySlug(slug: string) {
  const query = gql`
    query getPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          title
          subtitle
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(ENDPOINT, query, {
    publicationId: PUBLICATION_ID,
    slug,
  });

  return response.publication.post;
}



