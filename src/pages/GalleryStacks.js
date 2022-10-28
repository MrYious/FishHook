import { Text, View } from 'react-native';

import GalleryTab from './GalleryTab';
import Result from './ResultTab';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const GalleryStacks = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="GalleryTab"
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen
          name="GalleryTab"
          component={GalleryTab}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </>
  );
};

export default GalleryStacks;