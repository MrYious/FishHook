import AboutTab from './AboutTab';
import CameraStacks from './CameraStacks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GalleryTab from './GalleryTab';
import HomeTab from './HomeTab';
import InfoTab from './InfoTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  return (
    <Tab.Navigator tabBarShowLabel={()=>{return null}}
      initialRouteName='Home'
      backBehavior={'none'}
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Info"
        component={InfoTab}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={'info-outline'} size={30} color={'black'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraStacks}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={'camera'} size={25} color={'black'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={'home'} size={25} color={'black'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryTab}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={'picture-o'} size={25} color={'black'}/>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutTab}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={'question-circle'} size={25} color={'black'}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;