import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
// import { Ionicons } from "@expo/vector-icons";
import { Fontisto, FontAwesome5 } from '@expo/vector-icons'; 
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {  
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({ 
      title: name, 
      // headerShown: name !== "TV",
      // headerStyle: {
      //   backgroundColor: name === "Favs" ? "blue" : "white"
      // }
    });  
  }, [route]);
 
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Movies") {
            return <FontAwesome5 name="film" color={focused ? "white" : "grey"} size={24} />
          } else if (route.name === "TV") {
            return <FontAwesome5 name="tv" color={focused ? "white" : "grey"} size={22} />
          } else if (route.name === "Search") {
            return <FontAwesome5 name="search" color={focused ? "white" : "grey"} size={24} />
          } else if (route.name === "Favs") {
            return <FontAwesome5 name="heart" color={focused ? "white" : "grey"} size={24} />
          }
        }
      })}
      tabBarOptions={{
        // showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black"
        }
      }}
    >
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="TV" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favs" component={Favs} />
  </Tabs.Navigator>
  );
};