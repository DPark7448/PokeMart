// src/utils/userData.js

export function getFavorites() {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("favorites");
      return data ? JSON.parse(data) : [];
    }
    return [];
  }
  
  export function getHistory() {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("history");
      return data ? JSON.parse(data) : [];
    }
    return [];
  }
  