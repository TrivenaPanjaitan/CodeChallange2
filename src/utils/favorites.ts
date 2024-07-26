// utils/favorites.ts
// export const getFavorites = (): any => {
//   try {
//     const favorites = localStorage.getItem("favorites");
//     console.log("Retrieved favorites:", favorites);
//     if (favorites) {
//       // Attempt to parse JSON
//       return favorites;
//     }
//     return "";
//   } catch (error) {
//     console.error("Failed to parse favorites from localStorage:", error);
//     // Clear invalid data and return an empty array
//     localStorage.removeItem("favorites");
//     return "";
//   }
// };

export const getFavorites = () => {
  return localStorage.getItem("favorites")?.split(",") || [];
};

export const addFavorite = (bookId: string) => {
  try {
    const favorites = getFavorites();
    if (!favorites.includes(bookId)) {
      favorites.push(bookId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  } catch (error) {
    console.error("Failed to add favorite:", error);
  }
};

export const removeFavorite = (bookId: string) => {
  try {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((id: any) => id !== bookId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error("Failed to remove favorite:", error);
  }
};
