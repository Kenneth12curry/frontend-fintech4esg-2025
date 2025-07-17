import React, { useState } from "react";
import PublicationCard from "./PublicationCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import posts from "../../posts.json";

const POSTS_PER_PAGE = 6;

export default function Archive() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lang, setLang] = useState<"fr" | "en" | "all">("all");

  // 🔍 Supprimer les doublons (par slug)
  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.slug, post])).values()
  );

  // ✨ Trier les articles par date de publication (du plus récent au plus ancien)
  const sortedPosts = uniquePosts.sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });

  // 🔍 Filtrer selon la langue
  const filteredPosts = lang === "all"
    ? sortedPosts
    : sortedPosts.filter((post) => post.langue === lang); 

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // ⚠️ Remise à la première page si langue changée
  const handleLanguageChange = (newLang: "fr" | "en" | "all") => {
    setLang(newLang);
    setCurrentPage(1); // Revenir à la page 1 après changement de langue
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">NewsLetters</h1>

      {/* Boutons de filtre de langue */}
      <div className="flex mb-5">
        <button
          className={`px-3 py-1 rounded-xl ${lang === "fr" ? "bg-gray-200" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("fr")}
          type="button"
        >
          <span className="text-3xl">🇫🇷</span>
        </button>
        <button
          className={`px-3 py-1 rounded-xl ${lang === "en" ? "bg-gray-200" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("en")}
          type="button"
        >
          <span className="text-3xl">🇬🇧</span>
        </button>
        <button
          className={`text-sm px-3 py-1 rounded-xl ${lang === "all" ? "bg-gray-200" : "bg-gray-100"}`}
          onClick={() => handleLanguageChange("all")}
          type="button">
          All
        </button>
      </div>

      {/* Cartes des publications */}
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
          className="px-2 py-1 rounded-xl bg-[#19af58] hover:bg-primary disabled:opacity-70 text-white"
        >
          <FaArrowLeft />
        </button>
        <span className="px-2 py-2">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded-xl bg-[#19af58] hover:bg-primary disabled:opacity-70 text-white"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
