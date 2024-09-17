import { useState, useEffect } from 'react';

export default function useFetch(language, apikey) {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies from API
  const fetchMovies = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&with_original_language=${language}&page=${page}`
      );
      const data = await response.json();

      setSelectedMovies((prevMovies) => [...prevMovies, ...data.results]); 
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Call fetchMovies when the language changes
  useEffect(() => {
    if (language) {
      setSelectedMovies([]); // Reset movies when language changes
      fetchMovies(1); // Fetch first page
    }
  }, [language]);

  return { selectedMovies, isLoading, fetchMovies, currentPage, totalPages };
}
