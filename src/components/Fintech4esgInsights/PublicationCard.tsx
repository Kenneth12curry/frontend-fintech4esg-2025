import React from "react";
import { Link } from "react-router-dom";

// Importe toutes les images du dossier blog
const images = import.meta.glob('/src/components/blog/*.jpg', {
  eager: true,
  import: 'default',
});

interface PublicationCardProps {
  post: {
    frontmatter: {
      title: string;
      description: string;
      pubDate: string;
      author: string;
      category: string;
      slug: string;
      image: string; // Exemple: "img1.jpg"
      tags: string[];
    };
  };
}

export default function PublicationCard({ post }: PublicationCardProps) {
  const {
    title,
    description,
    pubDate,
    author,
    category,
    slug,
    image,
    tags,
  } = post.frontmatter;

  return (
    <div className="bg-[#f5f8ff] rounded-2xl shadow-md max-w-md mx-auto overflow-hidden">
      <div className="relative">
        <img
          src={`${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-xl">
          {category}
        </span>
      </div>
      <div className="p-5">
        <div className="text-gray-500 text-sm mb-2">
          {pubDate} &nbsp;•&nbsp; Équipe {author}
        </div>
        <h3 className="text-xl font-bold mb-2 leading-snug">{title}</h3>
        <p className="text-gray-700 text-base mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${slug}`}
          className="text-[#19af58] font-semibold hover:underline flex items-center hover:underline-offset-8"
        >
          Lire l&apos;article <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
