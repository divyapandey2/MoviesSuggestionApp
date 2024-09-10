import React,{ createContext,useState,useContext } from "react";

export const FavContext=createContext();

export const FavProvider =({children})=>{
  
   const [favorites,setFav]=useState([]);

const addFavorite = (movie) => {
  if (!favorites.find(fav => fav.id === movie.id))
    {
    setFav([...favorites, movie]);
  }
  };
  
  const removeFavorite = (movieId) => {
    setFav(favorites.filter(fav => fav.id !== movieId));
  };
  return (
    <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavContext.Provider>
  );
}
