export interface Author {
  name: string;
  profilePicture: string;
  username: string;
}

export interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
  coverImage: string;
  readTime: number;
  author: Author;
}
