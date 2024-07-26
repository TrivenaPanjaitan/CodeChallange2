import { GetServerSideProps } from "next";
import { fetchBookById, fetchBooks } from "../../utils/api";
import { Book } from "../../types/book";
import FavoriteButton from "../../components/FavoriteButton";
import styles from "../../styles/BookDetail.module.scss"; // Sesuaikan jalurnya jika diperlukan

interface BookDetailProps {
  book: Book;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  if (!book || !book.volumeInfo) {
    return <p>Book not found or loading...</p>; // Provide feedback if data is missing
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const book = await fetchBookById(id as string);
  return { props: { book } };
};
