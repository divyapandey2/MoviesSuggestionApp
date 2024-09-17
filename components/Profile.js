import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies  Suggestion</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.but}>
      <Text style={styles.buttonText}><Icon name="account-circle" size={30} color="blue" backgroundColor="transparent" padding={5} />
      Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.but}>
      <Text style={styles.buttonText}><Icon name="favorite-border" size={30} color="red" backgroundColor="transparent" padding={5} />
        Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.but}>
        <Text style={styles.buttonText}><Icon name="settings" size={30} color="black" backgroundColor="transparent" padding={5} />Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')} style={styles.but}>
        <Text style={styles.buttonText}><Icon name="help" size={30} color="black" backgroundColor="transparent" padding={5} />HelpCenter</Text>
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
    padding: 10,
    marginBottom: 10,
  },
  
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    padding: 5,
  },
  button: {
      backgroundColor: 'blue', 
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 10,
    
  },
  
  but: {
    backgroundColor: 'lightgrey',
    alignContent: 'center',

  },

 
});
