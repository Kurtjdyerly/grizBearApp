import {
} from 'react-native'
import React from 'react';
import { Appbar } from 'react-native-paper';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import ReservedFishScreen from './Screens/ReservedFishScreen';
import AddFishScreen from './Screens/AddFishScreen';
import AvailableFishScreen from './Screens/AvailableFishScreen';
import 

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          header: ({ scene, previous, navigation }) => (
            <Appbar.Header>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : (
                <Appbar.Action
                  icon="menu"
                  onPress={() => {
                    // You can customize this to open a drawer or any other action
                    navigation.openDrawer();
                  }}
                />
              )}
              <Appbar.Content title={scene.route.name} />
            </Appbar.Header>
          ),
        }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ReservedFish" component={ReservedFishScreen}/>
        <Stack.Screen name="AddFish" component={AddFishScreen}/>       
        <Stack.Screen name="AvailableFish" component={AvailableFishScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );

};

