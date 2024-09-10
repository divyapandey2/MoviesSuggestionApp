import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FavContext } from './customHooks/FavContext';
import { useRoute } from '@react-navigation/native';

export default function MovieDetails({  navigation }) {
    const { addFavorite } = useContext(FavContext);
    const route = useRoute();
    const {movie} = route.params || {}; 

   
    const handleAddFavorite = () => {
        addFavorite(movie);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>
            <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} 
                style={styles.image} 
            />
            <Text style={styles.year}>{new Date(movie.release_date).getFullYear()}</Text>
            <Text>{movie.overview}</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleAddFavorite}
            >
                <Text style={styles.buttonText}>Add to Favorites</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'black',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    year: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'lightgrey',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 400,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
