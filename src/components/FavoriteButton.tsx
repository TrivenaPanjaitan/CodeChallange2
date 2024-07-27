import React, { useEffect, useState } from "react";
import styles from "../styles/FavoriteButton.module.scss"; // Adjust the path if necessary

interface FavoriteButtonProps {
  bookId: string;
}

const FavoriteButton = ({ bookId }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    // Check if the book is already in the favorites list
    const favorites = localStorage.getItem("favorites")?.split(",") || [];
    setIsFavorite(favorites.includes(bookId));
  }, [bookId]);

  const toggleFavorite = () => {
    let favorites = localStorage.getItem("favorites")?.split(",") || [];

    if (isFavorite) {
      favorites = favorites.filter((id) => id !== bookId);
    } else {
      favorites.push(bookId);
    }

    localStorage.setItem("favorites", favorites.join(","));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`${styles.button} ${
        isFavorite ? styles.favorite : styles.notFavorite
      }`}
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
