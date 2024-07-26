import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_TOKEN = "AIzaSyBPkVt6ZSkx0mmMayfmoB-jXX7hsnIkEtI";

export const fetchBooks = async (query: string) => {
  const response = await axios.get(`${API_URL}?q=${query}&key=${API_TOKEN}`);
  return response.data.items;
};

export const fetchBookById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const fetchBookByIds = async () => {
  if (typeof window !== "undefined") {
    const query =
      localStorage.getItem("bookSearchQuery") !== ("" || null || undefined)
        ? localStorage.getItem("bookSearchQuery")
        : "*";
    if (query) {
      const response = await axios.get(
        `${API_URL}?q=${query}&key=${API_TOKEN}`
      );
      return response.data.items;
    }
  }
  return [];
};
