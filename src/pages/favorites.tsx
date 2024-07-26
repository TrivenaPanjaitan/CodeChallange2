import React, { useEffect, useState } from "react";
import { Book } from "../types/book";
import { getFavorites } from "../utils/favorites";
import BookCard from "../components/BookCard";
import styles from "../styles/FavoritesPage.module.scss"; // Adjust the path if necessary

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        if (typeof window !== "undefined") {
          // Ensure we're on the client side
          const favoriteId = getFavorites();
          const favoriteIds = favoriteId.split(",");
          console.log("Favorite IDs:", favoriteIds);

          if (favoriteIds.length === 0) {
            setFavorites([]);
            setLoading(false);
            return;
          }

          const books = await Promise.all(
            favoriteIds.map(async (id: string) => {
              const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes/${id}`
              );
              if (!response.ok) {
                throw new Error(`Failed to fetch book with ID ${id}`);
              }
              return response.json();
            })
          );

          console.log("Fetched Books:", books);
          setFavorites(books);
        }
      } catch (err) {
        console.error("Error fetching favorite books:", err);
        setError("Failed to load favorite books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Favorite Books</h1>
        {favorites.length === 0 && <p>You have no favorite books yet.</p>}
      </div>
      {favorites.length > 0 && (
        <div className={styles.gridContainer}>
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
