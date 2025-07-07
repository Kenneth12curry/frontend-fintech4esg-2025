import React, { useState } from "react";
import PublicationCard from "./PublicationCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const POSTS_PER_PAGE = 6;

// ✅ Chargement conditionnel de posts.json
let posts: any[] = [];
try {
  // @ts-ignore : éviter erreur TS sur require de JSON
  posts = require("../../posts.json");
} catch (err) {
  console.warn("posts.json introuvable ou invalide :", err);
}

export default function Archive() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lang, setLang] = useState<"fr" | "en" | "all">("all");

  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.slug, post])).values()
  );

  const filteredPosts =
    lang === "all" ? uniquePosts : uniquePosts.filter((post) => post.langue === lang);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleLanguageChange = (newLang: "fr" | "en" | "all") => {
    setLang(newLang);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      {/* Filtres par langue */}
      <div className="flex gap-2 mb-5">
        <button
          className={`border px-3 py-1 rounded-xl ${lang === "fr" ? "bg-gray-300" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("fr")}
          type="button"
        >
          French
        </button>
        <button
          className={`border px-3 py-1 rounded-xl ${lang === "en" ? "bg-gray-300" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("en")}
          type="button"
        >
          English
        </button>
        <button
          className={`border px-3 py-1 rounded-xl ${lang === "all" ? "bg-gray-300" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("all")}
          type="button"
        >
          All
        </button>
      </div>

      {/* Cartes de publication */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <PublicationCard
            key={post.slug}
            post={{
              frontmatter: {
                title: post.title,
                description: post.description ?? "",
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

      {/* Pagination */}
      <div className="flex justify-end mt-10 gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-xl bg-[#19af58] hover:bg-primary disabled:opacity-70 text-white"
        >
          <FaArrowLeft />
        </button>
        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-xl bg-[#19af58] hover:bg-primary disabled:opacity-70 text-white"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
