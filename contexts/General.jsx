import { useState } from "react";
import posts from "../data/posts.json";
import { GeneralContext } from "./GeneralContext";

export const GeneralProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const searchedPosts = posts.filter((item) => {
    if (!normalizedQuery) return true;

    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.author.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
    );
  });

  const getPostBySlug = (slug) => posts.find((item) => item.slug === slug) ?? null;

  return (
    <GeneralContext.Provider
      value={{ blog: posts, query, setQuery, searchedPosts, getPostBySlug }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
