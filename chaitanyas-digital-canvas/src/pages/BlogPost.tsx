import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from '@/pages/NotFound';
import { markdownComponents } from '@/components/MarkdownComponents';
import { getPostBySlug } from '@/lib/blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            all posts
          </Link>

          <header className="mb-10 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {post.date}
              </time>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-primary/80 border border-primary/20 px-1.5 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-muted-foreground mt-4 leading-relaxed">{post.description}</p>
            )}
          </header>

          <div className="blog-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
