import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            back to portfolio
          </Link>

          <header className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
              ~/blog
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              writing
            </h1>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Notes on AI systems, self-hosted infrastructure, and shipping production pipelines.
              Posts live as Markdown files — no CMS, no database.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="font-mono text-sm text-muted-foreground">no posts yet.</p>
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block infra-card p-5 hover:border-primary/40 transition-colors group"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {post.date}
                      </time>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-primary/80 border border-primary/20 px-1.5 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
