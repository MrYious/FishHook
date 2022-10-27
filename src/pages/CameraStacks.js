import { Text, View } from 'react-native';

import CameraTab from './CameraTab';
import Result from './ResultTab';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CameraStacks = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="CameraTab"
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen
          name="CameraTab"
          component={CameraTab}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </>
  );
};

export default CameraStacks;