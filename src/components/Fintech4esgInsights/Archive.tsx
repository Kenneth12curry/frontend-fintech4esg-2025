import React, { useState } from "react";
import PublicationCard from "./PublicationCard";
import posts from "./posts";


export default function Archive() {
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<"fr" | "en" | "">("");

  return (
    <>
        {/*  <section className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, idx) => (
                    <PublicationCard key={idx} post={post} />
                ))}
            </div>
        </section> */}
    </>
    
  );
}