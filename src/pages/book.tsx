import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchBookById } from "../utils/api";
import { Book } from "../types/book";
import FavoriteButton from "../components/FavoriteButton";
import styles from "../styles/BookDetail.module.scss";

const BookPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      fetchBookById(id as string).then((data) => setBook(data));
    }
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  const { volumeInfo } = book;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {volumeInfo.imageLinks?.thumbnail && (
            <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
          )}
        </div>
        <div className={styles.details}>
          <h1>{volumeInfo.title}</h1>
          <p>
            <strong>Author:</strong> {volumeInfo.authors?.join(", ")}
          </p>
          <p>
            <strong>Publisher:</strong> {volumeInfo.publisher} (
            {volumeInfo.publishedDate})
          </p>
          <p>
            <strong>Rating:</strong> {volumeInfo.ratingsCount} /{" "}
            {volumeInfo.averageRating}
          </p>
          <p>
            <strong>Categories:</strong> {volumeInfo.categories?.join(", ")}
          </p>
          <p>
            <strong>Pages:</strong> {volumeInfo.pageCount}
          </p>
          <p>
            <strong>Dimensions:</strong> {volumeInfo.dimensions?.height} x{" "}
            {volumeInfo.dimensions?.width}
          </p>
          <div className={styles.favoriteButton}>
            <FavoriteButton bookId={book.id} />
          </div>
        </div>
      </div>
      <div className={styles.containerDesc}>
        <p className={styles.description}>
          <strong>Description:</strong> <br />
          <span
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: volumeInfo.description || "No description available.",
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default BookPage;
