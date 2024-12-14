import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList, Image } from 'react-native';

export default function Settings({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleThemeToggle = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const settingsOptions = [
    { name: 'Account Settings', icon: require('./images/profileLogo.png'), onPress: () => navigation.navigate('Account') },
    { name: 'Notification Settings', icon: require('./images/notification-icon.png'), onPress: () => alert('Notification Settings clicked') },
    { name: 'Privacy', icon: require('./images/privacy-icon.png'), onPress: () => alert('Privacy Settings clicked') },
    { name: 'Logout', icon: require('./images/logout-icon.png'), onPress: () => navigation.navigate('Login') },
  ];

  return (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={handleThemeToggle} />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode ? styles.darkText : styles.lightText]}>Language</Text>
        <FlatList
          horizontal
          data={['English', 'Korean', 'German']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.languageButton, selectedLanguage === item && styles.selectedLanguageButton]}
              onPress={() => handleLanguageChange(item)}
            >
              <Text style={styles.languageText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionButton} onPress={item.onPress}>
            <Image source={item.icon} style={styles.optionIcon} />
            <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkMode: {
    backgroundColor: '#1c1c1c',
  },
  lightMode: {
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  darkTitle: {
    color: '#ffffff',
  },
  lightTitle: {
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#333',
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  selectedLanguageButton: {
    backgroundColor: '#4CAF50',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  optionIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
