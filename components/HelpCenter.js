import React from 'react';
import { Text, View, Linking, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HelpCenter() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>-: Feel free to reach out :-</Text>
      <Text style={styles.headingTxt}>Divya Kumari</Text>
      <Text style={styles.subHeadingTxt}>Contact Details</Text>

      <View style={styles.contactContainer}>
        <View style={styles.singleElement}>
          <Image source={require('./images/divimg.jpg')} style={styles.img} />
          <Text style={styles.headingTxt}>Divya Kumari</Text>
          <Text style={styles.emailTxt}>divyapandey090901@gmail.com</Text>

          <TouchableOpacity 
            style={styles.socialLink} 
            onPress={() => Linking.openURL('https://www.linkedin.com/in/divya-kumari-b2b755181/')}
          >
            <Image source={require('./images/Linkedin.png')} style={styles.logoimg} />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.socialLink} 
            onPress={() => Linking.openURL('https://github.com/divyapandey2')}
          >
            <Image source={require('./images/Github.png')} style={styles.logoimg} />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subHeadingTxt: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  img: {
    marginBottom: 15,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#2980b9',
  },
  logoimg: {
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  emailTxt: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: '500',
    marginBottom: 15,
  },
  socialLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#ecf0f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '80%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  socialText: {
    fontSize: 18,
    color: '#2980b9',
    fontWeight: '600',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  singleElement: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    width: 320,
    height: 420,
  },
});
