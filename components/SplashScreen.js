import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./images/SplashScreenImg.png')}
        style={styles.logo}
      />
      <ActivityIndicator size="large" color="#f0f" style={styles.bar}/>
      <Text style={styles.txt}> Loading... </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181c24',
    height: windowHeight,
    width: windowWidth
  },
  logo: {
    margin: 1,
    padding: 1,
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
    position: 'absolute'
  },
  bar:{
    marginTop: 400,
    marginBottom: 20
  },
  txt:{
    fontSize: 30,
    fontWeight: '700',
    color: '#fff'
  }
});

export default SplashScreen;
