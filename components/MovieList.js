import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import useFetch from './customHooks/useFetch';

const API_KEY = '88fee88334634a4b4e1340580d3c6b15';

export default function MovieList({ navigation }) {
  const [language, setLanguage] = useState('en'); 
  const { selectedMovies, isLoading, fetchMovies, currentPage, totalPages } = useFetch(language, API_KEY);

  const handleLoadMore = () => {
    if (currentPage < totalPages && !isLoading) {
      fetchMovies(currentPage + 1); 
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
      <Text style={styles.title}>{item.title}</Text>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
        style={styles.image} 
      />
      <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.button} onPress={() => setLanguage('en')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setLanguage('ko')}>
          <Text style={styles.buttonText}>Korean</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setLanguage('de')}>
          <Text style={styles.buttonText}>German</Text>
        </TouchableOpacity>
      </View>

      {isLoading && currentPage === 1 ? (
        <ActivityIndicator size="large" color="#f0f" />
      ) : (
        <FlatList
          data={selectedMovies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore} 
          onEndReachedThreshold={0.8} 
          ListFooterComponent={isLoading && currentPage > 1 ? <ActivityIndicator size="large" color="#f0f" /> : null}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  item: {
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    width: 300,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  year: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'light grey',
  },
  image: {
    height: 300,
    width: '100%',
  },
  cards: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: "center",
    height: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});
