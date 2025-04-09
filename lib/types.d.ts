import type { QueryFunctionContext } from '@tanstack/react-query';

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
};

export type PostMetadata = {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
};

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first?: number;
  after?: string | null;
};

export type GetPostsArgs = Omit<QueryFunctionContext, 'pageParam'> & {
  pageParam?: string;
} & GetPostsFunctionArgs;

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
};

export type GetPostBySlugResponse = {
  publication: {
    post: {
      id: string;
      title: string;
      subtitle?: string;
      publishedAt: string;
      coverImage: {
        url: string;
      };
      content: {
        html: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
};

export interface HashnodeBlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
  readTime: number;
  views: number;
  author: {
    name: string;
    profilePicture: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
}

export interface HashnodeResponse {
  data: {
    publication: {
      posts: HashnodeBlogPost[];
    };
  };
}
