import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import useFetch from './customHooks/useFetch';
import { API_KEY } from './Constants';

export default function MovieList({ navigation }) {
  const [language, setLanguage] = useState('en'); 
  const { selectedMovies, isLoading, fetchMovies, currentPage, totalPages } = useFetch(language, API_KEY);

  const handleLoadMore = () => {
    if (currentPage < totalPages && !isLoading) {
      fetchMovies(currentPage + 1); 
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Image 
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
          style={styles.image} 
        />
        <Text style={styles.releaseYear}>{new Date(item.release_date).getFullYear()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.languageButton} onPress={() => setLanguage('en')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.languageButton} onPress={() => setLanguage('ko')}>
          <Text style={styles.buttonText}>Korean</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.languageButton} onPress={() => setLanguage('de')}>
          <Text style={styles.buttonText}>German</Text>
        </TouchableOpacity>
      </View>

      {isLoading && currentPage === 1 ? (
        <ActivityIndicator size="large" color="#e74c3c" />
      ) : (
        <FlatList
          data={selectedMovies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore} 
          onEndReachedThreshold={0.8} 
          ListFooterComponent={isLoading && currentPage > 1 ? <ActivityIndicator size="large" color="#e74c3c" /> : null}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 10,
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  releaseYear: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '500',
  },
  cards: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  languageButton: {
    backgroundColor: '#2980b9',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: "center",
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
