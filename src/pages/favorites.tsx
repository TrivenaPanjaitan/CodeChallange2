import React, { useEffect, useState } from "react";
import { Book } from "../types/book";
import { getFavorites } from "../utils/favorites";
import { fetchBooksByIds } from "../utils/api";
import BookCard from "../components/BookCard";
import styles from "../styles/FavoritesPage.module.scss";

const FavoritesPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fetchFavorites = async () => {
        const favoriteIds = getFavorites();
        if (favoriteIds.length > 0) {
          const data = await fetchBooksByIds(favoriteIds);
          setBooks(data || []);
        }
        setLoading(false);
      };

      fetchFavorites();
    } catch (err) {
      console.error("Error fetching favorite books:", err);
      setError("Failed to load favorite books.");
    }
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Favorite Books</h1>
        {!loading && books.length === 0 && (
          <p>You have no favorite books yet.</p>
        )}
      </div>
      {books.length > 0 && (
        <div className={styles.gridContainer}>
          {books.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
