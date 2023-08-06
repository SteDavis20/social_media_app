import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

// Screens
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Profile from "../Pages/Profile";

// Screen Names
const home = "Home";
const explore = "Explore";
const profile = "Profile";

// create navigator
const Tab = createBottomTabNavigator();

function BottomTab({ route }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === home) {
            iconName = "home";
          } else if (route.name === explore) {
            iconName = "search";
          } else if (route.name === profile) {
            iconName = "user";
          }
          if (focused) {
            color = "orange";
          } else {
            color = "grey";
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Group
        screenOptions={{
          headerTintColor: "#1F1F1F",
          headerStyle: {
            backgroundColor: "#EEEDDE",
            height: 100,
          },
          headerTitleStyle: {
            paddingHorizontal: 0,
            fontSize: 35,
          },
        }}
      >
        <Tab.Screen
          name={home}
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name={explore}
          component={Explore}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name={profile}
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default BottomTab;
