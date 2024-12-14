import { StyleSheet, Text, TextInput,View,TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'
import auth from '@react-native-firebase/auth';

export default function Register({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => { // Correct the typo here
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login'); 
      })
      .catch(error => {

        switch(error.code){
          case 'auth/email-already-in-use' :
            Alert.alert('That email address is already in use!');
          case 'auth/invalid-email' :
            Alert.alert('That email address is invalid!');
          case 'auth/weak-password' :
            Alert.alert('Invalid password.\nshould be at least 6 characters');
          default :
            console.log(error);
        }
      });
  };
    return (
    <View style={styles.container}>
      
      <TextInput 
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput 
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput 
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={styles.input}
        placeholder="DOB"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput 
        style={styles.input}
        placeholder="email Id"
        value={email}
        onChangeText={setEmail}
        
      />
       <TextInput 
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true} 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.Inbtn} onPress={createAccount}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.accountText}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logintext}> Log In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor:'black',
        width:'100%',
        height:'100%',
        
      },
      input: {
        backgroundColor: 'lightgrey',
        color: 'black',
        fontSize: 18,
        paddingHorizontal: 8,
        width: '100%',
        height: "8%",
        borderRadius: 20,
        marginBottom: 1, 
        padding: 4,
        marginVertical: 10,
      },
      Inbtn: {
        backgroundColor: 'blue', 
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
      accountText: {
        marginTop: 20,
        color: 'white',
        fontSize: 16,
      },
      logintext: {
        color: 'blue', 
        fontWeight: 'bold',
        marginTop:20,
      },
})