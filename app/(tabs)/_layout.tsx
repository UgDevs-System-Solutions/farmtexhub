import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home-sharp' : 'home-outline'} 
              color={color} 
              size={24} 
              accessibilityLabel="Home" // {{ edit_1 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'information-circle' : 'information-circle-outline'} 
              color={color} 
              size={24} 
              accessibilityLabel="About" // {{ edit_2 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
