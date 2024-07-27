import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import styles from "../styles/HomePage.module.scss";
import { fetchBooks } from "../utils/api";

const HomePage = () => {
  const [query, setQuery] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bookSearchQuery") || "";
    }
    return "";
  });

  const [books, setBooks] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("ebooks");
  const [sort, setSort] = useState<string>("relevance");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bookSearchQuery", query);
    }
  }, [query]);

  const searchBooks = async () => {
    if (query) {
      try {
        const data = await fetchBooks(query, filter, sort);
        setBooks(data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Book Search</h1>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
        <div className={styles.filters}>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="ebooks">All eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">Paid eBooks</option>
          </select>
          <select onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <div className={styles.bookGrid}>
        {(books || []).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
