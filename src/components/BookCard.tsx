import React from "react";
import Link from "next/link";
import { Book } from "../types/book";
import FavoriteButton from "./FavoriteButton";
import styles from "../styles/BookCard.module.scss";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{volumeInfo.title}</h2>
      <p className={styles.authors}>{volumeInfo.authors?.join(", ")}</p>
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        className={styles.image}
      />
      <Link href={`/book/${book.id}`}>
        <span className={styles.link}>More Info</span>
      </Link>
      <div className={styles.favoriteButton}>
        <FavoriteButton bookId={book.id} />
      </div>
    </div>
  );
};

export default BookCard;
