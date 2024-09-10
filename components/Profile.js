import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies  Suggestion</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.fav}>
      <Icon name="account-circle" size={25} color="#fff" backgroundColor="transparent" padding={5} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.fav}>
      <Text style={styles.buttonText}><Icon name="favorite-border" size={25} color="red" backgroundColor="transparent" padding={5} />
        Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.set}>
        <Text style={styles.buttonText}><Icon name="settings" size={25} color="#fff" backgroundColor="transparent" padding={5} />Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height : '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
      backgroundColor: 'blue', 
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 10,
    
  },
  
  fav: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    alignContent: 'center',
  },

  set: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  
  buttonText: {
    color: 'black',
    fontSize:24,
    fontWeight:20,
  },
});
