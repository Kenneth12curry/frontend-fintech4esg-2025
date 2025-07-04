import React from "react";
import PublicationCard from "./PublicationCard";
import posts from "../../posts.json"; // ✅ Assure-toi que ce chemin est correct (adapté selon ton projet)

export default function Archive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Toutes les publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
         <PublicationCard
            key={post.slug}
            post={{
              frontmatter: {
                title: post.title,
                description: post.description ?? "", // fallback si manquant
                pubDate: post.pubDate,
                author: post.author,
                category: post.category,
                slug: post.slug,
                image: post.image,
                tags: post.tags,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
