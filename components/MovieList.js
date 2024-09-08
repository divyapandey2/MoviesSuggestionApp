import React,{useState,useContext}from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,ActivityIndicator,Image} from 'react-native';
import useFetch from './customHooks/useFetch';
import { FavContext } from './customHooks/FavContext';

const API_KEY = '88fee88334634a4b4e1340580d3c6b15';

export default function MovieList({navigation}) {
  const [language, setLanguage] = useState(null); 
  const {selectedMovies,isLoading} = useFetch(language,API_KEY);
  const { addFavorite} = useContext(FavContext);


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => addFavorite(item)}>
      <Text style={styles.title}>{item.title}</Text>
    <Image 
      source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
      style={styles.image} 
    />
     <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
    <Text>{item.overview}</Text>
    
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
    
      {isLoading ? (
        <ActivityIndicator size="large" color="#f0f" />
      ) : (
      <FlatList
        data={selectedMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
     
    )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    padding:10,
  },
  item: {
    backgroundColor: 'grey',
    padding:10,
    marginVertical:8,
    borderRadius: 10,
    width:300,
    justifyContent:"center",
  },
  
  title: {
    fontSize:18,
    color: 'white',
  },
  year: {
    fontSize: 16,
    fontWeight :'bold',
    color: 'light grey ',
  },
  image: {
   height:200,
   width:150,
  },
  cards:{
    flexDirection:'row',
    marginVertical:20,
    paddingVertical:20,

  },
  button: {
    backgroundColor:'white', 
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal:8,
    alignItems: 'center',
    justifyContent:"center",
    height:30,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});
