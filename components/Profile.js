import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Profile({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies  Suggestion</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.fav}>
        <Text style={styles.buttonText}>Your Movies</Text>
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
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    alignContent: 'center',
    width: 100,

  },
  fav: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    alignContent: 'center',
    

  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
