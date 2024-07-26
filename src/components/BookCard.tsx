import React from "react";
import { useRouter } from "next/router";
import { Book } from "../types/book";
import FavoriteButton from "./FavoriteButton";
import styles from "../styles/BookCard.module.scss";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const router = useRouter();
  const { volumeInfo } = book;

  const handleClick = () => {
    router.push(`/book?id=${book.id}`);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{volumeInfo.title}</h2>
      <p className={styles.authors}>{volumeInfo.authors?.join(", ")}</p>
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        className={styles.image}
      />
      <button onClick={handleClick} className={styles.link}>
        More Info
      </button>
      <div className={styles.favoriteButton}>
        <FavoriteButton bookId={book.id} />
      </div>
    </div>
  );
};

export default BookCard;
