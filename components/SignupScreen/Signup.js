import { StyleSheet, Text, TextInput,View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      
      <TextInput 
        style={styles.input}
        placeholder="First Name"
      />
      <TextInput 
        style={styles.input}
        placeholder="Last Name"
      />
      <TextInput 
        style={styles.input}
        placeholder="username"
      />
      <TextInput 
        style={styles.input}
        placeholder="DOB"
      />
      <TextInput 
        style={styles.input}
        placeholder="email Id"
      />
       <TextInput 
        style={styles.input}
        placeholder="Contact Number"
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true} 
      />
       <TouchableOpacity style={styles.Inbtn}>
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
        backgroundColor: 'grey',
        color: 'black',
        fontSize: 18,
        paddingHorizontal: 8,
        width: '100%',
        height: 50,
        borderRadius: 20,
        //marginTop: 20,
        marginBottom: 0, 
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