import {
} from 'react-native'
import * as React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import ReservedFishScreen from './Screens/ReservedFishScreen';
import AddFishScreen from './Screens/AddFishScreen';
import AvailableFishScreen from './Screens/AvailableFishScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ReservedFish" component={ReservedFishScreen}/>
        <Stack.Screen name="AddFish" component={AddFishScreen}/>       
        <Stack.Screen name="AvailableFish" component={AvailableFishScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );

};

