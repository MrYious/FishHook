import { Text, View } from 'react-native';

import Home from './src/pages/Home';
import Main from './src/pages/Main';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#166534' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Main'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
