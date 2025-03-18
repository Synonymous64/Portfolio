
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Eye, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
  coverImage: string;
  readingTime: { text: string };
  totalReactions: number;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.hashnode.com/v1/me/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(username: "yourusername") {
                  publication {
                    posts(page: 1) {
                      title
                      brief
                      slug
                      dateAdded
                      coverImage
                      readingTime {
                        text
                      }
                      totalReactions
                    }
                  }
                }
              }
            `
          }),
        });

        const data = await response.json();
        
        // Use mock data for now, replace with actual data from Hashnode API
        const mockPosts = [
          {
            title: "Building Scalable React Applications",
            brief: "Learn the best practices for building large-scale React applications that can grow with your needs.",
            slug: "building-scalable-react-applications",
            dateAdded: new Date().toISOString(),
            coverImage: "https://placehold.co/600x400/9370DB/ffffff?text=React+Article",
            readingTime: { text: "5 min read" },
            totalReactions: 42
          },
          {
            title: "Understanding TypeScript Generics",
            brief: "Master TypeScript generics to write more reusable and type-safe code in your projects.",
            slug: "understanding-typescript-generics",
            dateAdded: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            coverImage: "https://placehold.co/600x400/6495ED/ffffff?text=TypeScript+Article",
            readingTime: { text: "7 min read" },
            totalReactions: 38
          },
          {
            title: "Getting Started with Three.js and React",
            brief: "A comprehensive guide to integrating Three.js with React for creating impressive 3D visualizations.",
            slug: "getting-started-with-threejs-and-react",
            dateAdded: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            coverImage: "https://placehold.co/600x400/9ACD32/ffffff?text=Three.js+Article",
            readingTime: { text: "10 min read" },
            totalReactions: 56
          },
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary/5 to-background/20 animate-gradient" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3
            className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Blog
          </motion.h3>
          <motion.h2
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Latest Articles
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-lg text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Thoughts, insights, and tutorials about modern web development and design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {loading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="card-hover overflow-hidden backdrop-blur-sm bg-background/50 border-background/10">
                <Skeleton className="h-48 w-full" />
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-28" />
                </CardFooter>
              </Card>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col backdrop-blur-sm bg-background/50 border-background/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-display">{post.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-3 mt-1 text-sm font-body">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.dateAdded)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readingTime.text}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm font-body line-clamp-3">{post.brief}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="group" asChild>
                      <a href={`https://yourusername.hashnode.dev/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild>
            <a href="https://yourusername.hashnode.dev" target="_blank" rel="noopener noreferrer" className="px-6">
              View All Articles
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
