
import React from 'react'
import { View,TouchableOpacity} from 'react-native';
import Login from './components/Login'
import Register from './components/SignupScreen/Register';
import MovieList from './components/MovieList';
import Favourite from './components/Favourite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FavProvider } from './components/customHooks/FavContext';
import Profile from './components/ProfileScreen/Profile';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <FavProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200EE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
       
        <Stack.Screen name="MovieList"
         component={MovieList} 
         options={({ navigation })=>({
          headerRight:()=>(
            <View style={{ flexDirection: 'row', marginRight: 10, padding: 10,marginHorizontal: 10}}>
           <TouchableOpacity     onPress={() => navigation.navigate('Favourite')}>
            <Icon
            name="favorite-border"
            size={25}
            color="#fff"
            backgroundColor="transparent"
            padding={5}
            />
            </TouchableOpacity>
            <TouchableOpacity    onPress={() => navigation.navigate('Profile')}>
            <Icon
            name="account-circle" 
            size={25}
            color="#fff"
            backgroundColor="transparent"
            padding={5}
            />
            </TouchableOpacity>
            </View>
          )
         })}
        />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="Profile" component={Profile}/>
   
      </Stack.Navigator>
    </NavigationContainer>
     </FavProvider>
  );
}

export default App