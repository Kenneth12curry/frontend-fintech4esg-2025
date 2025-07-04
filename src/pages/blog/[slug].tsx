import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../../posts.json";

function estimateReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <div>Slug manquant</div>;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Article non trouvé.</div>;
  }

  const { title, description, pubDate, author, category, image, content } = post;

  const formattedDate = new Date(pubDate).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
  const readingTime = estimateReadingTime(description || "");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>›</span>
            <Link to={`/blog/category/${categorySlug}`} className="hover:text-blue-600 transition-colors">
              {category}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{title}</span>
          </div>
        </div>
      </nav>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link
            to={`/blog/category/${categorySlug}`}
            className="inline-block bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
          >
            {category}
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>

        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
          <div>{author}</div>
          <div>{formattedDate}</div>
          <div>{readingTime} min de lecture</div>
        </div>

        {image && (
          <figure className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full object-cover max-h-[450px]" />
          </figure>
        )}

        {/* Affichage du contenu HTML */}
        {content && (
          <div
            className="prose max-w-none" // pour un meilleur style, tu peux installer tailwindcss/typography
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </article>
    </main>
  );
};

export default BlogPostPage;
