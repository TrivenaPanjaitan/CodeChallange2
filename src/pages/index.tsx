import { useState, useEffect } from "react";
import { fetchBooks } from "../utils/api";
import BookCard from "../components/BookCard";
import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
  const [query, setQuery] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bookSearchQuery") || "";
    }
    return "";
  });

  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bookSearchQuery", query);
    }
  }, [query]);

  const searchBooks = async () => {
    if (query) {
      try {
        const data = await fetchBooks(query);
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
