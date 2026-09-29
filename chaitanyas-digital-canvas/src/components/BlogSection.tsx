import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getAllPosts } from '@/lib/blog';

const BlogSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const posts = getAllPosts();

  return (
    <section
      id="blog"
      ref={ref}
      className={`py-20 md:py-28 border-t border-border reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="blogs" />

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-muted-foreground text-center">no posts yet.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="infra-card aspect-square p-5 sm:p-6 flex flex-col group"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {post.date}
                    </time>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-primary/80 border border-primary/20 px-1.5 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {post.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4 flex-1">
                      {post.description}
                    </p>
                  )}

                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                    read
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {posts.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              view all posts
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
