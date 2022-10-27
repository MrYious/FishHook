import Landing from './src/pages/Landing';
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
          initialRouteName="Landing"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#166534' },
          }}
        >
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'FishHook'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
