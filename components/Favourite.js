import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FavContext } from './customHooks/FavContext';

export default function Favourite({ navigation }) {
  const { favorites, removeFavorite } = useContext(FavContext);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>My Favorite Movies</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
              style={styles.image} 
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={() => removeFavorite(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  removeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
