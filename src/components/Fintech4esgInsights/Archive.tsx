import React, { useState } from "react";
import PublicationCard from "./PublicationCard";
import posts from "./posts";


export default function Archive() {
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<"fr" | "en" | "">("");

  return (
    <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Archive</h2>
        <div className="flex flex-col gap-2 mb-4">
            <input
                type="text"
                placeholder="Search posts..."
                className="rounded-xl border-none px-4 py-2 bg-gray-100 w-4/6"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
            <div className="flex gap-2 mt-3">
                <button
                className={`border px-3 py-1 rounded-xl ${lang === "fr" ? "bg-gray-100" : ""}`}
                onClick={() => setLang("fr")}
                type="button">
                Français
                </button>
                <button
                className={`border px-3 py-1 rounded-xl ${lang === "en" ? "bg-gray-100" : ""}`}
                onClick={() => setLang("en")}
                type="button">
                English
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
                <PublicationCard key={idx} post={post} />
            ))}
        </div>
    </section>
  );
}