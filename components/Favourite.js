import { StyleSheet, Text, View ,Button,FlatList,Image,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { FavContext } from './customHooks/FavContext'


export default function Favourite({navigation}) {
  const { favorites, removeFavorite } = useContext(FavContext);
  return (
    <View>
      <Text style={styles.head}>My Favorite Movies</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Image 
             source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
             style={styles.image} 
            />
            <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
            <TouchableOpacity style={styles.btn}>
            <Button   title="Remove" onPress={() => removeFavorite(item.id)} 
             />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,

     },

  head:{
  fontSize:20,
  fontWeight:'bold',
  color:'black',
  padding:10,
  },
  title: {
    fontSize:18,
    color: 'black',
    
  },
  year: {
    fontSize:12,
    color: 'black',
    
  },
  image: {
    height:200,
    width:150,
    
   },
  btn: {
    height:50,
    width:100,
    borderRadius:20,
   },
})