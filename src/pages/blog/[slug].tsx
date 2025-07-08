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
            <Link to="/insights" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>›</span>
            <Link to="/insights" className="hover:text-blue-600 transition-colors">
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

<div className="flex justify-center gap-4 mb-10 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl text-white text-center">
  <span className="text-gray-700 font-medium mt-2 text-xl">Share the article :</span>
  <div className="flex gap-3">
    <a
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(slug)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
      Twitter
    </a>
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(slug)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      LinkedIn
    </a>
  </div>
</div>

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
