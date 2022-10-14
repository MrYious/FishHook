import AboutTab from './AboutTab';
import HomeTab from './HomeTab';
import InfoTab from './InfoTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  return (
    <Tab.Navigator tabBarShowLabel={()=>{return null}}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Info"
        component={InfoTab}
      />
      <Tab.Screen
        name="About"
        component={AboutTab}
      />
    </Tab.Navigator>
  );
};

export default Main;