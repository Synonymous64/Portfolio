import request, { gql } from 'graphql-request';
import { GetPostBySlugResponse, GetPostsArgs, GetPostsResponse, PublicationName } from './types';

const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

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

  const response = await request<PublicationName>(endpoint, query, {
    publicationId,
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

  const response = await request<GetPostsResponse>(endpoint, query, {
    publicationId,
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

  const response = await request<GetPostBySlugResponse>(endpoint, query, {
    publicationId,
    slug,
  });

  return response.publication.post;
}

export async function searchPosts(query: string) {
  const searchQuery = gql`
    query SearchPosts($publicationId: ObjectId!, $query: String!) {
      publication(id: $publicationId) {
        posts(filter: { query: $query }, first: 10) {
          edges {
            node {
              id
              title
              subtitle
              slug
              brief
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
      }
    }
  `;

  const response = await request(endpoint, searchQuery, {
    publicationId,
    query,
  });

  return response.publication.posts.edges;
}

export async function addComment(postId: string, content: string) {
  const mutation = gql`
    mutation AddComment($postId: ID!, $content: String!) {
      createComment(input: { postId: $postId, content: $content }) {
        comment {
          id
          content
          author {
            name
            profilePicture
          }
          dateAdded
        }
      }
    }
  `;

  return await request(endpoint, mutation, { postId, content });
}

export async function subscribeNewsletter(email: string) {
  const mutation = gql`
    mutation SubscribeNewsletter($input: SubscribeToNewsletterInput!) {
      subscribeToNewsletter(input: $input) {
        status
      }
    }
  `;

  return await request(endpoint, mutation, {
    input: { email },
  });
}

