import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_TOKEN = "AIzaSyBPkVt6ZSkx0mmMayfmoB-jXX7hsnIkEtI";

// export const fetchBooks = async (query: string) => {
//   const response = await axios.get(`${API_URL}?q=${query}&key=${API_TOKEN}`);
//   return response.data.items;
// };

// utils/api.ts
// export const fetchBooks = async (query: string) => {
//   const response = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${query}`
//   );
//   const data = await response.json();
//   return data.items;
// };

export const fetchBooks = async (
  query: string,
  filter: string,
  sort: string,
  startIndex: number = 0,
  maxResults: number = 10
) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=${filter}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_TOKEN}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const fetchBookById = async (id: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );
  const data = await response.json();
  return data;
};

export const fetchBooksByIds = async (ids: string[]) => {
  const books = await Promise.all(ids.map((id) => fetchBookById(id)));
  return books;
};
