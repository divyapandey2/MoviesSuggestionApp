import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Movies Suggestion</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="account-circle" size={30} color="#007bff" />
          <Text style={styles.buttonText}>Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="favorite-border" size={30} color="#e74c3c" />
          <Text style={styles.buttonText}>Favourites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="settings" size={30} color="#2c3e50" />
          <Text style={styles.buttonText}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon name="help" size={30} color="#f39c12" />
          <Text style={styles.buttonText}>Help Center</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button, styles.logoutButton]}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
    justifyContent: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#34495e',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },

  logoutButton: {
    backgroundColor: '#e74c3c',
  },

  logoutText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
