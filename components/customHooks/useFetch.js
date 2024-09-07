import { StyleSheet, Text, View } from 'react-native'
import{useState,useEffect} from 'react'
import React from 'react'

export default function useFetch(language,apikey) {
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        if(!language)return;
        const fetchMovies=async()=>{
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&with_original_language=${language}`
                  );
                const data=await response.json(); 
                setSelectedMovies(data.results); 
            } catch (error) {
                console.error(error);
              } finally {
                setIsLoading(false);
              }
            };
            fetchMovies();
        },[language]);
  return { selectedMovies, isLoading };
}

const styles = StyleSheet.create({})